import Link from "next/link"

export default function BooksPage() {
    return (
        <div className="flex justify-center min-h-screen items-start bg-gray-50 text-center">
            <div className="max-w-2xl w-full mx-auto text-left py-12 py-20">
            <h1 className="text-3xl font-bold mb-6 text-4xl font-bold mb-4 border-b pb-2
         animate-fade-down opacity-0 animate-duration-1000 animate-fill-forwards" style={{
            animation: 'fadeDown 1s ease-in-out forwards',
            animationDelay: '0.1s',
          }}>Books</h1>
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
            <h2 className="font-bold" >Have Read</h2>
            <ol className="mb-6 text-left">
                <li>The Denial of Death – Ernest Becker</li>
                <li>Man’s Search for Meaning – Viktor Frankl</li>
                <li>The Power Broker – Robert Caro</li>
                <li>The Black Swan – Nassim Nicholas Taleb</li>
                <li>How to Lie with Statistics – Darrell Huff</li>
                <li>The Innovator’s Dilemma – Clayton Christensen</li>
                <li>The Lessons of History – Will & Ariel Durant</li>
                <li>Fooled by Randomness – Nassim Nicholas Taleb</li>
                <li>On Liberty – John Stuart Mill</li>
                <li>Meditations – Marcus Aurelius</li>
            </ol>
            <h2 className="font-bold" >To Read</h2>
            <ol>
                <li>The Trilogy of Meluga - Amish</li>
                <li>Antifragile – Nassim Nicholas Taleb</li>
                <li>The Fifth Discipline – Peter Senge</li>
                <li>Thinking, Fast and Slow – Daniel Kahneman</li>
                <li>Flow: The Psychology of Optimal Experience – Mihaly Csikszentmihalyi</li>
                <li>The Structure of Scientific Revolutions – Thomas Kuhn</li>
                <li>Gödel, Escher, Bach: An Eternal Golden Braid – Douglas Hofstadter</li>
                <li>Superforecasting: The Art and Science of Prediction – Philip Tetlock</li>
                <li>Range: Why Generalists Triumph in a Specialized World – David Epstein</li>
                <li>The Selfish Gene – Richard Dawkins</li>
                <li>Influence: The Psychology of Persuasion – Robert Cialdini</li>
            </ol>
            </div>
        </div>
        </div>
)
}