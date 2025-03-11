import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
    // // Get the auth token from cookies
    // const token = req.cookies.get('authToken')?.value;
    //
    // const protectedRoutes = ['/bookmark', '/movies', '/series'];
    // const isProtected = protectedRoutes.some(route => req.nextUrl.pathname.startsWith(route));
    //
    // if (isProtected && !token) {
    //     return NextResponse.redirect(new URL('/login', req.url));
    // }

    return NextResponse.next(); // Continue normally
}

// Apply middleware to specific paths (optional)
export const config = {
    matcher: ['/bookmark/:path*', '/movies/:path*', '/series/:path*'],
};
