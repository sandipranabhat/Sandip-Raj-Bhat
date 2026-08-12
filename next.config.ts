import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  poweredByHeader:false,
  reactStrictMode:true,
  images:{remotePatterns:[{protocol:"https",hostname:"**"}]},
  async headers(){
    return [{source:"/(.*)",headers:[
      {key:"X-Content-Type-Options",value:"nosniff"},
      {key:"X-Frame-Options",value:"DENY"},
      {key:"Referrer-Policy",value:"strict-origin-when-cross-origin"},
      {key:"Permissions-Policy",value:"camera=(), microphone=(), geolocation=()"},
      {key:"Content-Security-Policy",value:"default-src 'self'; img-src 'self' data: https:; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline' https://www.google.com https://www.gstatic.com; frame-src https://www.google.com; connect-src 'self' https:;"}
    ]}];
  }
};
export default nextConfig;
