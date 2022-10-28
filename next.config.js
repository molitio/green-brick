/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
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
