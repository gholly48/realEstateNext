async function getUsers() {
  const res = await fetch('http://localhost:1234/users', { cache: 'no-store' }); 
  if (!res.ok) throw new Error('Failed to fetch users');  
  return res.json();
}

export default async function Home() {
  const users = await getUsers();

  return (
    <div>
      <h1>لیست کاربران</h1>
      <ul>
        {users.map((user: { id: number; name: string }) => (
          <li >{user.id} {user.name}</li>
        ))}
      </ul>
    </div>
  );
}
