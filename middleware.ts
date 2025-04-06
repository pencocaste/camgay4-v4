import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Get the pathname from the URL
  const pathname = request.nextUrl.pathname;

  // If the path starts with /men/, redirect to the same path without /men/
  if (pathname.startsWith('/men/') || pathname === '/couple/') {
    // For /men/ paths, remove the /men/ prefix
    // For /couple/, redirect to /couples/
    const newPath = pathname.startsWith('/men/') 
      ? pathname.replace('/men/', '/')
      : '/couples/';
    return NextResponse.redirect(new URL(newPath, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Match all paths starting with /men/
    '/men/:path*',
    // Match exact /couple path
    '/couple',
  ],
};