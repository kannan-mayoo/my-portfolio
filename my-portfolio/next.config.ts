// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   eslint : {
//     ignoreDuringBuilds:true;
//   },
// };

// export default nextConfig;



import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // use a comma, not a semicolon
    ignoreDuringBuilds: true,
  },
  // optional extras you might want:
  reactStrictMode: true,
  swcMinify: true,
};

export default nextConfig;
