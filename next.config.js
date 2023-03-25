// must restart server whenever you make changes in next.config

/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  env: {
    
  },
  
  // reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  trailingSlash: true,
  optimizeFonts: false,
  distDir: 'build',
}
module.exports = nextConfig