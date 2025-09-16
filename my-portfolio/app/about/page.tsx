import Link from "next/link"

export default function About() {
    return (
        <div className="flex justify-center min-h-screen items-start bg-gray-50 text-center">
            <div className="max-w-3xl w-full mx-auto text-left py-12 py-20">
            <h1 className="text-3xl font-bold mb-6 text-3xl font-bold mb-6 text-4xl font-bold mb-4 border-b pb-2
         animate-fade-down opacity-0 animate-duration-1000 animate-fill-forwards" style={{
            animation: 'fadeDown 1s ease-in-out forwards',
            animationDelay: '0.1s',
          }}>About me</h1>
          <style>
          {`
            @keyframes fadeDown {
              to { opacity: 1; transform: translateY(0); }
              from { opacity: 0; transform: translateY(-40px); }
            }
          `}
        </style>
            <p className="text-lg leading-relaxed">
                I'm a developer passionate about building modern web applications,
        writing clean code, and sharing knowledge.
            </p>
        </div>
        <div className="max-w-xl w-full mx-auto text-md text-left py-12 py-20 mt-80 text-center flex flex-col items-center">
           
            <Link href="/books" className="hover:text-blue-500 max-w-xl w-full mx-auto">Books I have read</Link> <br/>
            <Link href="/interested" className="hover:text-blue-500 max-w-xl w-full mx-auto">interested things</Link> <br/>
            <Link href="/to-do" className="hover:text-blue-500 max-w-xl w-full mx-auto">To Do</Link> <br/>
            <Link href="/books" className="hover:text-blue-500 max-w-xl w-full mx-auto">Essays</Link> <br/>
            
        </div>
        </div>
        
    ) 
}