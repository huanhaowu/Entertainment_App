// import Image from "next/image";
// import axios from "axios";
//
// export default async function Home() {
//     // let posts: Array<any>
//     // await axios.get('https://api.vercel.app/blog')
//     //     .then((res) => {
//     //         posts = res.data
//     //     })
//     //     .catch((err) => {
//     //
//     //     })
//
//     const res = await fetch('https://api.vercel.app/blog', { cache: "no-store" }); // No cache to ensure SSR
//     const posts = await res.json();
//
//     return (
//         <>
//             <h1>HELLO WORLD</h1>
//             <ul>
//                 {posts.map((post) => (
//                     <li key={post.id}>{post.title}</li>
//                 ))}
//             </ul>
//         </>
//     );
// }

export default function HomePage() {
    return (
        <>
            <h1 className="text-4xl font-bold mb-4">Welcome to the Entertainment App</h1>
            <p className="text-lg text-gray-500">Explore movies, series, and more!</p>
        </>
    );
}

