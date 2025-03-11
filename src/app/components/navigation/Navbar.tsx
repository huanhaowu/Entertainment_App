import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="bg-gray-900 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">Entertainment App</h1>
                <ul className="flex space-x-6">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/discover">Discover</Link></li>
                    <li><Link href="/movies">Movies</Link></li>
                    <li><Link href="/series">Series</Link></li>
                    <li><Link href="/bookmark">Bookmarked</Link></li>
                </ul>
            </div>
        </nav>
    );
}
