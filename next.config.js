/** @type {import('next').NextConfig} */

const securityHeaders = [
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "Permissions-Policy",
    value: "geolocation=()",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "origin-when-cross-origin",
  },
  {
    key: "Access-Control-Allow-Origin",
    value:
      "https://s3.eu-west-1.amazonaws.com https://fonts.googleapis.com https://fonts.gstatic.com",
  },
  {
    key: "Content-Security-Policy",
    value:
      process.env.NODE_ENV === "development"
        ? ""
        : "default-src 'self' https://s3.eu-west-1.amazonaws.com; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.gstatic.com https://www.google.com https://vercel.live; child-src 'self'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com  https://fonts.gstatic.com  https://s3.eu-west-1.amazonaws.com; font-src 'self' https://fonts.googleapis.com  https://fonts.gstatic.com; object-src 'self' https://s3.eu-west-1.amazonaws.com;",
  },
];

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
  experimental: {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "s3.eu-west-1.amazonaws.com",
          pathname: "/filestore.molitio.org/green-brick/web-content/**",
        },
      ],
    },
  },
};
