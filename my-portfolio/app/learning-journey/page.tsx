import Link from "next/link"

export default function LearningJourney() {
    return (
        <div className="flex justify-center min-h-screen items-start bg-gray-50 text-center bg-gradient-to-bl from-purple-200 via-pink-100 to-yellow-200">
            <div className="max-w-2xl w-full mx-auto text-left py-12 py-20">
            <h1 className="text-3xl font-bold mb-6 text-4xl font-bold mb-4 border-b pb-2
         animate-fade-down opacity-0 animate-duration-1000 animate-fill-forwards" style={{
            animation: 'fadeDown 1s ease-in-out forwards',
            animationDelay: '0.1s',
          }}>Learning Journey</h1>
          <style>
          {`
            @keyframes fadeDown {
              to { opacity: 1; transform: translateY(0); }
              from { opacity: 0; transform: translateY(-40px); }
            }
          `}
        </style>
            <hr className="my-1 border-t-2 border-red-500 mb-6" />
            <div>
            <h2 className="font-bold mb-6" >Build & Create</h2>
            <ol className="mb-6 text-left">
                <li>Launch at least one impactful project every year (not just demo, but usable by real people)</li>
                <li>Contribute meaningfully to open-source and get recognized for at least one PR/feature</li>
                <li>Build a product that scales to handle real users (not just personal use)</li>
                <li>Write a mini technical guide that helps other beginners</li>
                <li>Rebuild or refactor an old project with new tech to see progress in skills</li>
     </ol>
            <h2 className="font-bold mb-6" >Learn & Grow</h2>
            <ol className="mb-6">
                <li>Build strong foundations in full-stack (Next.js, Node.js, Databases, APIs) and then scale into microservices & serverless</li>
                <li>Learn how to design and deploy applications on cloud (AWS, Azure, GCP) with CI/CD pipelines</li>
                <li>Explore Machine Learning workflows — train a simple model, deploy it, and integrate it with a web app</li>
                <li>Learn about AI-powered development tools (LangChain, Agents, Vector DBs) and how to use them in real apps</li>
                <li>Experiment with future UI/UX — voice interfaces, AR/VR, or 3D web apps with Three.js</li>
                
            </ol>
            <h2 className="font-bold mb-6" >Innovate & Experiment</h2>
            <ol className="mb-6">
                <li>Try building small prototypes with new technologies (AI agents, Web3 apps, AR/VR demos)</li>
                <li>Experiment with automation — scripts, bots, or tools that save time in daily work</li>
                <li>Build one “fun” side project purely for creativity (generative art, random app, etc.)</li>
                <li>Explore hardware + software mix (IoT device, Raspberry Pi, AI on edge) at least once</li>
                <li>Keep a “Tech Journal” of experiments, failures, and learnings for future reference</li>
                
            </ol>
            <h2 className="font-bold mb-6" >Share & Inspire</h2>
            <ol>
                <li>Write short blog posts about what I learned this week/month</li>
                <li>Help at least 1 person every month by answering questions online (StackOverflow, Discord, Twitter, etc.)</li>
                <li>Record a short video or tutorial explaining a concept I struggled with</li>
                <li>Share my code snippets and tools openly for others to use</li>
                <li>Collaborate on knowledge-sharing projects (blogs, podcasts, open notes)</li>
                
            </ol>
            </div>
        </div>
        </div>
)
}