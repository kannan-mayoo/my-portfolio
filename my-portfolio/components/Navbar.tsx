import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center py-4 px-8 shadow-md bg-white dark:bg-grey-800" >
            <h1 className="text-2xl font-bold" >Mayoo Portfolio</h1>
            <div className="space-x-6">
                <Link href="/" className="hover:text-blue-500">Home</Link>
                <Link href="/about" className="hover:text-blue-500">About</Link>
                <Link href="/projects" className="hover:text-blue-500" >Projects</Link>
                <Link href="/blog" className="hover:text-blue-500">Blog</Link>
            </div>

        </nav>
    )
}