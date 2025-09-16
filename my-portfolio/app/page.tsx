
// import Layout from "../components/Layout"
// import Layout from "blog/components/Layout"
import Layout from '../components/Layout';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout>
          <div className='mt-6 text-long text-black-600 bg-red dark:text-gray-300'>
          <section className="text-center py-20 ">
      <h1 className="text-5xl font-bold mb-6"> Hi, I'm Mayoora Balan 👋 </h1>

      <hr className="my-1 border-t-2 border-red-500" />


        <p className="mt-6 text-long text-gray-600 dark:text-gray-300">
          Welcome to my portfolio & blog built with Next.js and Tailwind CSS
        </p>
        <p className="mt-6 text-long text-lg text-gray-600 dark:text-gray-300">
          A unique mix of <span className="font-bold" >tech geek, creative hustler, and business dreamer.</span>
          <br/>
         I am a System Engineer, who currently <span className="text-xs  font-bold ">experimenting with e-commerce and exploring startups —</span> from selling to exploring and exporting traditional, eco-friendly products
        </p>
        <p>
          I love to travel and explore new places but had special heart in metro cities.
        </p>
        <p className='text-lg' ></p>
    </section>
    <div>
      <h1 className="text-xl font-bold mb-6"> Recent Activities</h1>
      <ol>
        <li>Added a fresh stack of mind-bending <span>Books</span> to my reading journey</li>
        <li>Updated my <span>To-Do list</span> with some daring (and slightly crazy) life experiments.</li>
        <li>Discovered new <span>Podcasts & Documentaries</span> that challenge how I think.</li>
        <li>Published quirky <span>Blog drafts</span> — from overthinking to digital minimalism.</li>
        <li>Explored <span>fascinating concepts</span> like antifragility, network effects & Lindy effect.</li>
        <li>Planned my next mini travel-experiment in metro cities I can’t resist.</li>
        <li>Practicing “learning one deep skill a year” — current obsession: AI + e-commerce.</li>
      </ol>
    </div>
    </div>
    </Layout>
  )
}




// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
//       <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
//           <li className="mb-2 tracking-[-.01em]">
//             Get started by editing{" "}
//             <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
//               app/page.tsx
//             </code>
//             .
//           </li>
//           <li className="tracking-[-.01em]">
//             Save and see your changes instantly.
//           </li>
//         </ol>

//         <div className="flex gap-4 items-center flex-col sm:flex-row">
//           <a
//             className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>
//       <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>
//   );
// }
