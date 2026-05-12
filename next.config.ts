import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export', // Essencial para gerar a pasta /out
  images: {
    unoptimized: true, // Necessário para o GitHub Pages
  },
  // Se o seu site for usuario.github.io/meu-projeto/, adicione:
  // basePath: '/meu-projeto',
};

export default nextConfig;