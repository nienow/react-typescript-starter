import {TsconfigPathsPlugin} from 'tsconfig-paths-webpack-plugin';

const webpackConfig = () => ({
  entry: './src/index2.tsx',
  resolve: {
    plugins: [new TsconfigPathsPlugin({configFile: './tsconfig.json'})]
  }
});

export default webpackConfig;
