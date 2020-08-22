// const path = require('path');

// //拼接路径
// function resolve(dir) {
// 	return path.join(__dirname, dir)
// }
// module.exports = {
// 	chainWebpack: (config) => {
// 		config.resolve.alias
// 			.set('@', resolve('src'))
// 			.set('components', resolve('src/components'))
// 			.set('assets', resolve('src/assets'))
// 			.set('views', resolve('src/views'))
// 	},
// }
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  }
}

