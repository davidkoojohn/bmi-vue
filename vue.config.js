module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/bmi-vue/'
    : '/',
  devServer: {
    proxy: {
      '/': {
        target: 'https://veihwwnelcwq.leanapp.cn',
        // target: 'http://localhost:3000/',
      }
    }
  }
}
