import Link from "next/link";
import { Clapperboard, LayoutGrid, Film, Tv, Bookmark} from 'lucide-react';

export default function Navbar() {
    return (
        <nav className="bg-gray-900 text-white p-4">
            <div className="container mx-auto flex flex-col justify-between items-center">
                <ul className="flex flex-col w-fit gap-y-4">
                    <li className="flex items-center space-x-2">
                        <Link href="/" className="flex items-center space-x-2">
                            <Clapperboard className="w-5 h-5"/>
                            <span>Home</span>
                        </Link>
                    </li>

                    <li className="flex items-center space-x-2">
                        <Link href="/discover" className="flex items-center space-x-2">
                            <LayoutGrid  className="w-5 h-5"/>
                            <span>Discover</span>
                        </Link>
                    </li>

                    <li className="flex items-center space-x-2">
                        <Link href="/movies" className="flex items-center space-x-2">
                            <Film className="w-5 h-5"/>
                            <span>Movies</span>
                        </Link>
                    </li>

                    <li className="flex items-center space-x-2">
                        <Link href="/series" className="flex items-center space-x-2">
                            <Tv className="w-5 h-5"/>
                            <span>Series</span>
                        </Link>
                    </li>

                    <li className="flex items-center space-x-2">
                        <Link href="/bookmark" className="flex items-center space-x-2">
                            <Bookmark className="w-5 h-5"/>
                            <span>Bookmarked</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
