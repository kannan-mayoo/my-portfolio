


// export default function Blog() {
//     return (
//         <section className="py-20">
//             <h1 className="tx-3xl font-bold mb-6">Blog</h1>
//             <p className="text-lg">
//                 Soon, you'll see my articles here  🚀
//             </p>
//         </section>
//     )
// }




// app/blog/page.tsx
import Link from "next/link";
import { getAllPosts } from "../../lib/mdx"; // relative path from app/blog/page.tsx to /lib


// type PostMeta = {
//   slug: string;
//   title: string;
//   date: string;
//   description: string;
// };

export default function BlogPage() {
  const posts = getAllPosts(); // runs server-side

  return (
    <div className="py-20 flex justify-center min-h-screen items-start bg-green-50 text-center">
      <div className="max-w-3xl w-full mx-auto text-left py-12 py-20">
      <h1 className="text-3xl font-bold mb-6 text-3xl font-bold mb-6 text-3xl font-bold mb-6 text-3xl font-bold mb-6 text-4xl font-bold mb-4 border-b pb-2
         animate-fade-down opacity-0 animate-duration-1000 animate-fill-forwards" style={{
            animation: 'fadeDown 1s ease-in-out forwards',
            animationDelay: '0.1s',
          }}>Blog</h1>
          <style>
          {`
            @keyframes fadeDown {
              to { opacity: 1; transform: translateY(0); }
              from { opacity: 0; transform: translateY(-40px); }
            }
          `}
        </style>
      <ul className="space-y-6">
        {posts.map((post: any) => (
          <li key={post.slug} className="border p-4 rounded-lg shadow">
            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-xl font-semibold hover:text-blue-500">{post.title}</h2>
            </Link>
            <p className="text-gray-600">{post.description}</p>
            <small className="text-sm text-gray-500">{post.date}</small>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
}


