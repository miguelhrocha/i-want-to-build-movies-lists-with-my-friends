const path = require('path')
const sveltePreprocess = require('svelte-preprocess');

module.exports = ({ config, mode }) => {
  const svelteLoader = config.module.rules.find(
    r => r.loader && r.loader.includes('svelte-loader')
  );

  svelteLoader.options.preprocess = sveltePreprocess({
    typescript: {
      tsconfigFile: './tsconfig.json',
      transpileOnly: true
    }
  });

  config.module.rules.push({
    test: /\.css$/,
    loaders: [
      {
        loader: 'postcss-loader',
        options: {
          sourceMap: true,
          config: {
            path: './.storybook/',
          },
        },
      },
    ],

    include: path.resolve(__dirname, '../storybook/'),
  });

  config.resolve.extensions.push('ts')

  return config
}
