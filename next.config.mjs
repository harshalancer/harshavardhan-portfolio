/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS === 'true';

const nextConfig = {
  ...(isGithubActions && {
    output: 'export',
    basePath: '/harshavardhan-portfolio',
    assetPrefix: '/harshavardhan-portfolio/',
  }),
  images: {
    unoptimized: true,
  },
};

export default nextConfig;