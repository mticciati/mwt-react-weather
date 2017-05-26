var webpack = require('webpack');

module.exports = {
  entry: [
    'script-loader!jquery/dist/jquery.min.js',
    'script-loader!foundation-sites/dist/js/foundation.min.js',
    './app/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    modules: [__dirname, 'node_modules'],
    alias: {
      Main: 'app/components/Main.jsx',
      Nav: 'app/components/Nav.jsx',
      SearchForm: 'app/components/SearchForm.jsx',
      // Modal: 'app/components/Modal.jsx',
      // Weather: 'app/components/Weather.jsx',
      // WeatherForm: 'app/components/WeatherForm.jsx',
      // WeatherMsg: 'app/components/WeatherMsg.jsx',
      // openWeatherMap: 'app/api/openWeatherMap.jsx',
      About: 'app/components/About.jsx',
      // Examples: 'app/components/Examples.jsx',
      applicationStyles: 'app/styles/app.scss'
    },
    extensions: ['*', '.js', '.jsx'] 
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};