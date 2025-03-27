'use client'; // چون این فانکشن روی کلیک اجرا می‌شه، باید client باشد.

import { useState } from 'react';

export default function Home() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [password, setPassword] = useState('');

  async function createUser() {
    const res = await fetch('http://localhost:1234/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, password }),
    });

    if (res.ok) {
      setMessage('✅ کاربر با موفقیت ایجاد شد!');
      setName('');
    } else {
      setMessage('❌ خطایی رخ داد!');
    }
  } 

  return (
    <div>
      <h1>افزودن کاربر جدید</h1>
           <input value={name} onChange={(e) => setName(e.target.value)} placeholder="نام را وارد کنید" />
           <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="رمز عبور را وارد کنید" />
         <button onClick={createUser}>افزودن</button>
      <p>{message}</p>
    </div>
  );
}
