import Link from "next/link"

export default function Interested() {
    return (
        <div className="flex justify-center min-h-screen items-start bg-gray-50 text-center">
            <div className="max-w-2xl w-full mx-auto text-left py-12 py-20">
            <h1 className="text-3xl font-bold mb-6 text-4xl font-bold mb-4 border-b pb-2
         animate-fade-down opacity-0 animate-duration-1000 animate-fill-forwards" style={{
            animation: 'fadeDown 1s ease-in-out forwards',
            animationDelay: '0.1s',
          }}>Interested Things</h1>
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
            <h2 className="font-bold mb-6" >Podcasts that changed my thinking</h2>
            <ol className="mb-6 text-left">
                <li>Lex Fridman Podcast – AI, science, and meaning</li>
                <li>Acquired – stories of big companies and why they work</li>
                <li>Huberman Lab – neuroscience meets daily life hacks</li>
                <li>The Knowledge Project – clear thinking + decision making</li>
                <li>How I Built This – founders and their struggles</li>
     </ol>
            <h2 className="font-bold mb-6" >Fascinating Concepts</h2>
            <ol className="mb-6">
                <li>Cognitive Biases – why our brains trick us</li>
                <li>Antifragility – things that get stronger with stress</li>
                <li>Network Effects – why some ideas scale like wildfire</li>
                <li>Second-Order Thinking – making decisions beyond the obvious</li>
                <li>Lindy Effect – why old things tend to last longer</li>
                
            </ol>
            <h2 className="font-bold mb-6" >Random but Cool</h2>
            <ol className="mb-6">
                <li>Collecting maps of places I’ve never been (and planning trips from them)</li>
                <li>Writing short notes on things I learn daily (digital + scribbled ones)</li>
                <li>Chasing hidden street food spots instead of big restaurants</li>
                <li>Exploring lost/abandoned places (urban exploration vibes)</li>
                <li>Keeping a “Curiosity Jar” → every week I drop a note with one weird question I had</li>
                
            </ol>
            <h2 className="font-bold mb-6" >Documentaries / Series worth watching</h2>
            <ol>
                <li>The Social Dilemma – tech + psychology of social media</li>
                <li>Inside Bill’s Brain – quirky deep dive into Bill Gates’ problem-solving</li>
                <li>Abstract: The Art of Design – creativity meets design thinking</li>
                <li>Cosmos: A Spacetime Odyssey – science, philosophy, wonder</li>
                <li>Free Solo – raw human focus and risk</li>
                
            </ol>
            </div>
        </div>
        </div>
)
}