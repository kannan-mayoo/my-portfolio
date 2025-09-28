import Link from "next/link"

export default function Interested() {
    return (
        <div className="flex justify-center min-h-screen items-start bg-gray-50 text-center bg-gradient-to-bl from-purple-200 via-pink-100 to-yellow-200">
            <div className="max-w-2xl w-full mx-auto text-left py-12 py-20">
            <h1 className="text-3xl font-bold mb-6 text-4xl font-bold mb-4 border-b pb-2
         animate-fade-down opacity-0 animate-duration-1000 animate-fill-forwards" style={{
            animation: 'fadeDown 1s ease-in-out forwards',
            animationDelay: '0.1s',
          }}>To-Do Checklist</h1>
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
            <h2 className="font-bold mb-6" >Explore & Experience</h2>
            <ol className="mb-6 text-left">
                <li>Visit at least 1 new country every year</li>
                <li>Do a solo backpack trip with just a notebook and camera</li>
                <li>Watch the northern lights at least once</li>
                <li>Try living one month in a new city without Google Maps</li>
     </ol>
            <h2 className="font-bold mb-6" >Learn & Build</h2>
            <ol className="mb-6">
                <li>Master one deep skill every year (AI, design, or philosophy)</li>
                <li>Publish a short ebook/guide on something I’ve learned</li>
                <li>Build a side-project that at least 1000 people use</li>
                <li>Learn to play a musical instrument (or pretend really well)</li>
                <li>Take a course totally unrelated to my career (pottery? astronomy?)</li>
                
            </ol>
            <h2 className="font-bold mb-6" >Mind & Body</h2>
            <ol className="mb-6">
                <li>Run a half marathon (without collapsing)</li>
                <li>Meditate daily for 30 days straight</li>
                <li>Try a digital detox week (no phone, no laptop, only life)</li>
                <li>Learn 5 magic tricks just to confuse friends</li>
                <li>Practice stand-up comedy once (even if I fail miserably)</li>
                
            </ol>
            <h2 className="font-bold mb-6" >Fun & Random</h2>
            <ol>
                <li>Host a theme dinner night with weird rules</li>
                <li>Write letters to my future self (open in 5 years)</li>
                <li>Create a photo journal of “ordinary but beautiful things”</li>
                <li>Try a silent retreat (yes, even though I talk silly too much)</li>
                <li>Learn to cook one killer dish from every cuisine</li>
                
            </ol>
            </div>
        </div>
        </div>
)
}