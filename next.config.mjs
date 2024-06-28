/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'media.mnt.com.ar',
            port: '',
            pathname: '/**',
          },
        ],
      }
};

export default nextConfig;
