/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'di2546syqxmrb.cloudfront.net',
            port: '',
            pathname: '/**',
          },
        ],
      }
};

export default nextConfig;
