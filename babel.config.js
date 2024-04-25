module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins:[
      [
        'module-resolver',
        {
          alias: {
            // This needs to be mirrored in tsconfig.json
            components: './src/components',
            screens: './src/screens',
            common: './src/common',
            config: './src/config',
            helpers: './src/helpers',
            navigations: './src/navigations',
            store: './src/store',
            services: './src/services',
            types: './src/types',
            assets: './assets',
            images: './assets/images',
            routes: './src/routes',
            hooks: './src/hooks',
          },
        },
      ],
      'react-native-reanimated/plugin'
    ]
  };
};
