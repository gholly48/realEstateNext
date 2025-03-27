import Link from "next/link"

const Register = () => {

    return (
    <div className="p-3 max-w-lg mx-auto">
        <h1 className="text-3xl text-center font-semibold my-7">Register</h1>
        <form className="flex flex-col gap-4">
            <input type="text" placeholder="username" className="border p-3 rounded-lg" id="username" />
            <input type="email" placeholder="email" className="border p-3 rounded-lg" id="email" />
            <input type="password" placeholder="password" className="border p-3 rounded-lg" id="password" />
            <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">Register</button>
        </form>
        <div className="flex justify-center gap-2 mt-5">
            <p>Have an account?</p>
            <Link href={'/login'}>
              <span className="text-blue-700">Login</span>
            </Link>
        </div>
    </div>
    )
}

export default Register