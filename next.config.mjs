/** @type {import('next').NextConfig} */
export default {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/es',
        permanent: false
      }
    ];
  }
};



