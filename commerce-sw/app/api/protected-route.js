// pages/api/protected-route.js
import { withClerkMiddleware } from "@clerk/nextjs/server";

const handler = (req, res) => {
    res.status(200).json({ message: "This is a protected route" });
};

export default withClerkMiddleware(handler);
