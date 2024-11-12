import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    // Public paths that don't require authentication
    const publicPaths = ["/login"];
    const isPublicPath = publicPaths.includes(req.nextUrl.pathname);

    if (isPublicPath && req.nextauth.token) {
      return NextResponse.redirect(new URL("/", req.url));
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ req, token }) => {
        const publicPaths = ["/login"];
        const isPublicPath = publicPaths.includes(req.nextUrl.pathname);
        
        if (isPublicPath) {
          return true;
        }
        return !!token;
      },
    },
  }
);

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};