const path = require('path');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');

module.exports = {
  mode: 'development',
  devtool: 'eval', // hidden-source-map
  resolve: {
    extensions: ['.jsx', '.js'],
  },

  entry: {
    app: './client',
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      options: {
        /* preset : plugins 의 모음들 */
        presets: [
          ['@babel/preset-env', {
            targets: {
              /* chrome 이 70버전이라면 68,69 버전만 호환되게 설정 */
              browsers: ['> 5% in KR','last 2 chrome versions'],
            },
            debug: true,
          }], 
          '@babel/preset-react',
        ],
        plugins: [],
      },
    }],
  },
  plugins: [
    new LoaderOptionsPlugin({ debug: true }),
  ],
  output: {
    filename: 'app.js',
    path: path.join(__dirname, 'dist'),
  },
};