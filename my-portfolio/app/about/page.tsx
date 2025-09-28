import Link from "next/link"

export default function About() {
    return (
        <div className="justify-center min-h-screen items-start  bg-gray-50 text-center bg-gradient-to-tr from-lime-200 via-green-100 to-cyan-200">
            <div className="max-w-3xl w-full mx-auto text-left py-12 py-20">
            <h1 className="text-3xl font-bold mb-6 text-3xl font-bold text-red-300 mb-6 text-4xl font-bold mb-4 border-b pb-2
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
            <p className="text-lg leading-relaxed prose prose-blue text-gray-600 text-center mb-8">
                I'm a developer passionate about building modern web applications,
        writing clean code, and sharing knowledge.
            </p>
        </div>
        {/* max-w-xl w-full mx-auto text-md text-left py-12 py-20 text-center flex flex-col items-center */}
        <div className=" flex flex-col gap-4 items-center ">
           
            <Link href="/books" className="hover:underline max-w-xl w-full mx-auto text-lg md:text-xl text-blue-400 font-semibold transition
          duration-200 relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-pink-400 after:to-blue-400 after:rounded-full
          hover:text-pink-500 hover:after:w-full
          after:transition-all after:duration-300">Books I have read</Link> <br/>
            <Link href="/interested" className="hover:underline  max-w-xl w-full mx-auto text-lg md:text-xl text-blue-400 font-semibold transition
          duration-200 relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-pink-400 after:to-blue-400 after:rounded-full
          hover:text-pink-500 hover:after:w-full
          after:transition-all after:duration-300">Interested things</Link> <br/>
            <Link href="/to-do" className="hover:underline max-w-xl w-full mx-auto text-lg md:text-xl text-blue-400 font-semibold transition
          duration-200 relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-pink-400 after:to-blue-400 after:rounded-full
          hover:text-pink-500 hover:after:w-full
          after:transition-all after:duration-300">To-Do Checklist </Link> <br/>
            <Link href="/learning-journey" className="hover:underline max-w-xl w-full mx-auto text-lg md:text-xl text-blue-400 font-semibold transition
          duration-200 relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-pink-400 after:to-blue-400 after:rounded-full
          hover:text-pink-500 hover:after:w-full
          after:transition-all after:duration-300">Learning Journey</Link> <br/>
            
        </div>
         
        </div>
        
    ) 
}