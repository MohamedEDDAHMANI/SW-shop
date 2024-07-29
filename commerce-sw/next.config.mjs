/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'res.cloudinary.com',
              port: '',
              pathname: '/**',
            },
          ],
    },
    reactStrictMode: true,
    env: {
      RESEND_API_KEY: process.env.RESEND_API_KEY,
  },
};

export default nextConfig;
