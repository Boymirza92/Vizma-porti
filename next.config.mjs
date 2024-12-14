// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     webpack: (config) => {
//         config.module.rules.push({
//           test: /\.(mp4|webm|ogg|avi|mov)$/, 
//           use: {
//             loader: 'file-loader',
//             options: {
//               name: '[name].[hash].[ext]',
//               outputPath: 'static/media/', 
//           },
//         });
//         return config;
//       },
//     };
     
// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
      config.module.rules.push({
        test: /\.(mp4|webm|ogg|avi|mov)$/, // Video fayl formatlari
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]',
            outputPath: 'static/media/', // Yuklangan fayl joylashuvi
          },
        },
      });
      return config;
    },
  };
  
  export default nextConfig;