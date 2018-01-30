## 此项目是为了复现extract-text-webpack-plugin插件和异步组件同时使用会报错

使用 npm start 可以启动项目

修改 build/webpack.config.js文件中的 第90行

如果注释掉第90行则会报错，目前extract-text-webpack-plugin这个插件和异步组件之前同时使用有BUG

如果使用了allChunks: true，则可以临时解决问题，不过css文件就不能异步加载了，而是同步加载

## 参考
1. [参考一](https://github.com/webpack-contrib/extract-text-webpack-plugin/issues/456)
2. [参考二](https://github.com/webpack/webpack/issues/959)
