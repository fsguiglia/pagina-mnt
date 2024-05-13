/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'd1at6djbu3ggt6.cloudfront.net',
            port: '',
            pathname: '/**',
          },
        ],
      }
};

export default nextConfig;
