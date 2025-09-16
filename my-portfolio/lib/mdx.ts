import fs from "fs";
import path from "path";
import matter from "gray-matter";


const postsDirectory = path.join(process.cwd(), "content/blog");

export function getAllPosts() {
    const fileNames = fs.readdirSync(postsDirectory);

    const posts = fileNames.map((fileName) => {
        const filePath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(filePath, "utf-8");

        const {data} = matter (fileContents);
        const slug = fileName.replace(/\.mdx?$/, "");

        return {
            slug, 
            ...data,
        };
    })

    return posts.sort ((a: any, b:any) => 
        new Date(b.date).getTime() - new Date(a.date).getTime()
);
}