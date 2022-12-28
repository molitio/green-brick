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
    value: "same-origin",
  },
  {
    key: "Access-Control-Allow-Origin",
    value:
      "s3.eu-west-1.amazonaws.com fonts.googleapis.com fonts.gstatic.com",
  },
  {
    key: "Content-Security-Policy",
    value:
      process.env.NODE_ENV === "development"
        ? ""
        : "default-src 'self' s3.eu-west-1.amazonaws.com; script-src 'self' 'strict-dynamic' 'unsafe-eval' www.gstatic.com www.google.com vercel.live; child-src 'self' www.gstatic.com www.google.com; style-src 'self' 'unsafe-inline' fonts.googleapis.com  fonts.gstatic.com  s3.eu-west-1.amazonaws.com; font-src 'self' fonts.googleapis.com  fonts.gstatic.com; object-src 'self' s3.eu-west-1.amazonaws.com;",
  },
];

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false, net: false, tls: false };

    return config;
  },
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
