import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center py-4 px-8 shadow-md bg-white dark:bg-grey-800 " >
            <h1 className="text-2xl font-bold bg-gradient-to-r from-sky-500 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg tracking-wide" >Mayoo Portfolio</h1>
            <div className="space-x-8 text-gray-700 text-lg font-medium transition hover:scale-105 hover:shadow-2xl">
                <Link href="/" className="hover:text-blue-500">Home</Link>
                <Link href="/about" className="hover:text-blue-500">About</Link>
                {/* <Link href="/projects" className="hover:text-blue-500" >Projects</Link> */}
                <Link href="/blog" className="hover:text-blue-500">Blog</Link>
            </div>

        </nav>
    )
}