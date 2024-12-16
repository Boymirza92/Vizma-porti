// // /** @type {import('next').NextConfig} */
// // const nextConfig = {
// //     webpack: (config) => {
// //         config.module.rules.push({
// //           test: /\.(mp4|webm|ogg|avi|mov)$/, 
// //           use: {
// //             loader: 'file-loader',
// //             options: {
// //               name: '[name].[hash].[ext]',
// //               outputPath: 'static/media/', 
// //           },
// //         });
// //         return config;
// //       },
// //     };
     
// // export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|avi|mov)$/i,
      use: {
        loader: 'file-loader',
        options: {
          name: '[name].[hash].[ext]',
          outputPath: 'static/media/',
        },
      },
    });
    return config;
  },
};

export default nextConfig;



// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   compiler: {
//     styledComponents: true,
//   },
// };

// export default nextConfig; // ES Module uchun to'g'ri eksport
