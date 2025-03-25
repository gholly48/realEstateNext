import { FaSearch } from 'react-icons/fa'
import Link from 'next/link'

export default function Header() {
  return (
    <header className='bg-cyan-100 shadow-md'>
       <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-pink-600'>Lavasan</span>
            <span className='text-pink-400'>Line</span>
        </h1>

        <form className='bg-blue-100 p-3 rounded-lg flex items-center w-24 sm:w-64'>
            <input type='text' placeholder='Search...' className='bg-transparent focus:outline-none' />
            <FaSearch className='text-slate-500' />
        </form>
        <div className='flex gap-4'>
           <Link className='hidden sm:inline text-slate-700 hover:underline' href='/'>Home</Link>
            <Link className='hidden sm:inline text-slate-700 hover:underline' href='/pages/about'>About</Link>
           <Link className='hidden sm:inline text-slate-700 hover:underline' href='/login'>Login</Link>
        </div>
       </div>
    </header>
  )
}
