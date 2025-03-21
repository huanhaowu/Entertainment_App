// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import "./styles/globals.css";
//
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });
//
// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });
//
// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };
//
// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         {children}
//       </body>
//     </html>
//   );
// }

import Navbar from "./components/navigation/Navbar";
import "@/app/styles/globals.css"

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <div className="grid grid-cols-[auto_1fr] grid-rows-5 gap-4 h-full">
                    <div className="row-span-5">
                        <Navbar/>
                    </div>

                    <main className="row-span-5 flex py-4">
                        <div className="w-full">
                            {children}
                        </div>
                    </main>
                </div>
            </body>
        </html>
    );
}
