// /** @type {import('next').NextConfig} */
// const isGithubActions = process.env.GITHUB_ACTIONS || false;

// let repo = '';
// if (isGithubActions) {
//   repo = 'garvitdby.github.io';
// }

// const nextConfig = {
//   output: 'export',
//   images: { unoptimized: true },
//   basePath: '',
//   assetPrefix: '',
// };

// module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',          // export static HTML
  images: { unoptimized: true },
  trailingSlash: true,       // helps static routes on GitHub Pages
  basePath: '',              // user-site, serve from root
  assetPrefix: '',
};

module.exports = nextConfig;
