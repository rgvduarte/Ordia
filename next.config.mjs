/** @type {import('next').NextConfig} */

// O GitHub Pages serve o site num subcaminho (ex.: /Ordia).
// Em produção (build no Action) definimos o basePath; em local fica vazio.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const nextConfig = {
  output: 'export',
  basePath,
  trailingSlash: true,
  images: {
    // O export estático não suporta o otimizador de imagens da Vercel.
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
