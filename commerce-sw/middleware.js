import { getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export default function middleware(req) {
  const { userId } = getAuth(req);

  if (!userId) {
    return NextResponse.redirect("/login");
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};
