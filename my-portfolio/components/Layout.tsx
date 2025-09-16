import Navbar from "./Navbar"
import Footer from "./Footer"

export default function Layout({children} :{children:React.ReactNode}) {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow container mx-auto px-6">{children}</main>
            <Footer />
        </div>
    )
}