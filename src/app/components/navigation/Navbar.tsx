'use client'
import Link from "next/link";
import { ChevronsLeft , ChevronsRight, Clapperboard, LayoutGrid, Film, Tv, Bookmark} from 'lucide-react';
import {useState} from "react";

export default function Navbar() {
    let [collapsed, setCollapsed] = useState<boolean>(true);

    const iconMap = {
        Clapperboard: Clapperboard,
        LayoutGrid: LayoutGrid,
        Tv: Tv,
        Film: Film,
        Bookmark: Bookmark
    };

    const routes = [
        {
            id: 1,
            route: '/',
            name: 'Home',
            icon: "Clapperboard"
        },
        {
            id: 2,
            route: '/discover',
            name: 'Discover',
            icon: "LayoutGrid"
        },
        {
            id: 3,
            route: '/movies',
            name: 'Movies',
            icon: "Film"
        },
        {
            id: 4,
            route: '/series',
            name: 'Series',
            icon: "Tv"
        },
        {
            id: 5,
            route: '/bookmark',
            name: 'Bookmarked',
            icon: "Bookmark"
        },

    ]

    return (
        <nav className={`bg-gray-900 text-white p-4 m-4 h-screen rounded-xl ${collapsed ? 'w-14 overflow-hidden' : 'px-6'}`}>
            <div className="container h-full mx-auto flex flex-col justify-between items-fit">
                <ul className="flex flex-col w-fit gap-y-4">
                    <button onClick={() => setCollapsed(!collapsed)} className={`cursor-pointer`}>
                        {
                            !collapsed ? <ChevronsLeft className="w-5 h-5"/> : <ChevronsRight className="w-5 h-5"/>
                        }
                    </button>
                    {
                        routes.map((route) => {
                            const IconComponent = iconMap[route.icon] || Clapperboard; // Default icon fallback/ Default fallback

                            return (
                                <li key={route.id}>
                                    <Link href={route.route} className={`flex items-center space-x-2 h-6`}>
                                        <IconComponent className="w-5 h-5"/>
                                        {
                                            !collapsed && <span>{route.name} </span>
                                        }
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>

                <div>
                    {
                        !collapsed && <p>User container</p>
                    }
                </div>
            </div>
        </nav>
    );
}
