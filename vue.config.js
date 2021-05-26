module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/bmi-vue/'
    : '/',
  devServer: {
    proxy: {
      '/': {
        target: process.env.NODE_ENV === '!production'
          ? 'https://veihwwnelcwq.leanapp.cn/'
          : 'http://localhost:3000/'
      }
    }
  }
}
