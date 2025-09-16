// app/blog/[slug]/page.tsx
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

type Props = { params: { slug: string } };

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), "content", "blog", `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return <p>Post not found</p>;
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  const processed = await remark().use(html).process(content);
  const contentHtml = processed.toString();

  return (
    <article className="prose dark:prose-invert mx-auto py-20">
      <h1>{data.title}</h1>
      <p className="text-sm text-gray-500">{data.date}</p>
      <p className="text-sm flex flex-col justify-between text-gray-500">{data.description}</p>
      <div className="min-h-screen  text-lg font-bold text-center text-gray-500" dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </article>
  );
}
