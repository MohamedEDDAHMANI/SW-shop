import { clerkMiddleware } from "@clerk/nextjs/server";

const isEdgeRuntime = process.env.NEXT_RUNTIME === 'edge';

export default function middleware(req, res, next) {
    if (isEdgeRuntime) {
        // Logic for edge runtime
        return next();
    }
    return clerkMiddleware()(req, res, next);
}

export const config = {
    matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
