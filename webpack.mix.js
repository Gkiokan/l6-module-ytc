const mix = require('laravel-mix');
require('laravel-mix-merge-manifest');

const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin');

mix.setPublicPath('../../public/modules/YTC/').mergeManifest();

mix.js(__dirname + '/Resources/assets/js/app.js', 'app.js')
    .sass( __dirname + '/Resources/assets/sass/app.scss', 'app.css');

if (mix.inProduction()) {
    mix.version();
}

mix.webpackConfig({
  plugins: [
    // new BundleAnalyzerPlugin(),
    // new CleanWebpackPlugin({
    //     cleanStaleWebpackAssets: false,
    //     cleanOnceBeforeBuildPatterns: ['pulblic/css/*', 'public/js/*'],
    // }),
    // new VuetifyLoaderPlugin(),
  ],
  resolve: {
    extensions: ['.js', '.json', '.vue'],
    alias: {
      // 'vue$': 'vue/dist/vue.esm.js',
      '~': path.join(__dirname, 'Resources/assets/js'),
    }
  },
  output: {
    chunkFilename: 'js/[name].[chunkhash].js',
    publicPath:  mix.config.hmr ? '//localhost:8080' : '/modules/YTC/'
  }
})
