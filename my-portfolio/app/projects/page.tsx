


export default function Projects() {
    return (
            <div className="py-20 flex justify-center min-h-screen items-start bg-green-50 text-center" >
                <div className="max-w-3xl w-full mx-auto text-left py-12 py-20">
                <h1 className="text-3xl font-bold mb-6 text-3xl font-bold mb-6 text-3xl font-bold mb-6 text-4xl font-bold mb-4 border-b pb-2
         animate-fade-down opacity-0 animate-duration-1000 animate-fill-forwards" style={{
            animation: 'fadeDown 1s ease-in-out forwards',
            animationDelay: '0.1s',
          }}>Projects</h1>
          <style>
          {`
            @keyframes fadeDown {
              to { opacity: 1; transform: translateY(0); }
              from { opacity: 0; transform: translateY(-40px); }
            }
          `}
        </style>
                <ul className="space-y-4">
                    <li className="border p-4 rounded-lg shadow">
                        <h2 className="font-semibold">Decentralized voting system</h2>
                        <p>
                           A secure, transparent, and tamper-proof digital voting platform built using blockchain technology...
                            <a href="#" className="text-blue-500">View</a>
                        </p>
                    </li>
                    <li className="border p-4 rounded-lg shadow">
                        <h2 className="font-semibold"> Smart Supply Chain Tracker </h2>
                            <p>
                                A blockchain + IoT powered system that tracks products across the supply chain in real-time...
                                <a href="#" className="text-blue-500">View</a>
                            </p>
                    </li>git --version

                    

                </ul>
        </div>

            </div>
        
    )
}