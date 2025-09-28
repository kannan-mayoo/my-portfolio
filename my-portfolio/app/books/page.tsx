import Link from "next/link"

export default function BooksPage() {
    return (
        <div className="flex justify-center min-h-screen items-start bg-gray-50 text-center bg-gradient-to-bl from-purple-200 via-pink-100 to-yellow-200">
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
            <h2 className="font-bold mt-6 mb-6" >Have Read</h2>
            {/* <ol className="mb-6 text-left"> */}
                <Link href="https://lit2talks.com/read_book.php?bookpath=2237" className="hover:text-red-500">The Denial of Death – Ernest Becker</Link><br/>
                <Link href="https://lit2talks.com/read_book.php?bookpath=2237" className="hover:text-red-500">Man’s Search for Meaning – Viktor Frankl</Link><br/>
                <Link href="https://lit2talks.com/read_book.php?bookpath=2237" className="hover:text-red-500">The Power Broker – Robert Caro</Link><br/>
                <Link href="https://lit2talks.com/read_book.php?bookpath=2237" className="hover:text-red-500">The Black Swan – Nassim Nicholas Taleb</Link><br/>
                <Link href="https://lit2talks.com/read_book.php?bookpath=2237" className="hover:text-red-500">How to Lie with Statistics – Darrell Huff</Link><br/>
                <Link href="https://lit2talks.com/read_book.php?bookpath=2237" className="hover:text-red-500">The Innovator’s Dilemma – Clayton Christensen</Link><br/>
                <Link href="https://lit2talks.com/read_book.php?bookpath=2237" className="hover:text-red-500">The Lessons of History – Will & Ariel Durant</Link><br/>
                <Link href="https://lit2talks.com/read_book.php?bookpath=2237" className="hover:text-red-500">Fooled by Randomness – Nassim Nicholas Taleb</Link><br/>
                <Link href="https://lit2talks.com/read_book.php?bookpath=2237" className="hover:text-red-500">On Liberty – John Stuart Mill</Link><br/>
                <Link href="https://lit2talks.com/read_book.php?bookpath=2237" className="hover:text-red-500">Meditations – Marcus Aurelius</Link><br/> 
            <h2 className="font-bold mt-6 mb-6" >To Read</h2>
            <ol>
                <Link href="https://lit2talks.com/read_book.php?bookpath=2237" className="hover:text-red-500">The Trilogy of Meluga - Amish</Link><br/>
                <Link href="https://lit2talks.com/read_book.php?bookpath=2237" className="hover:text-red-500">Antifragile – Nassim Nicholas Taleb</Link><br/>
                <Link href="https://lit2talks.com/read_book.php?bookpath=2237" className="hover:text-red-500">The Fifth Discipline – Peter Senge</Link><br/>
                <Link href="https://lit2talks.com/read_book.php?bookpath=2237" className="hover:text-red-500">Thinking, Fast and Slow – Daniel Kahneman</Link><br/>
                <Link href="https://lit2talks.com/read_book.php?bookpath=2237" className="hover:text-red-500">Flow: The Psychology of Optimal Experience – Mihaly Csikszentmihalyi</Link><br/>
                <Link href="https://lit2talks.com/read_book.php?bookpath=2237" className="hover:text-red-500">The Structure of Scientific Revolutions – Thomas Kuhn</Link><br/>
                <Link href="https://lit2talks.com/read_book.php?bookpath=2237" className="hover:text-red-500">Gödel, Escher, Bach: An Eternal Golden Braid – Douglas Hofstadter</Link><br/>
                <Link href="https://lit2talks.com/read_book.php?bookpath=2237" className="hover:text-red-500">Superforecasting: The Art and Science of Prediction – Philip Tetlock</Link><br/>
                <Link href="https://lit2talks.com/read_book.php?bookpath=2237" className="hover:text-red-500">Range: Why Generalists Triumph in a Specialized World – David Epstein</Link><br/>
                <Link href="https://lit2talks.com/read_book.php?bookpath=2237" className="hover:text-red-500">The Selfish Gene – Richard Dawkins</Link><br/>
                <Link href="https://lit2talks.com/read_book.php?bookpath=2237" className="hover:text-red-500">Influence: The Psychology of Persuasion – Robert Cialdini</Link>  <br/>
            </ol>
            </div>
        </div>
        </div>
)
}