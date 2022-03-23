const { defineConfig } = require('@vue/cli-service')
module.exports = {
  pwa: {
    name: 'My App',
    themeColor: '#000000',
    msTileColor: '#000000',
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: 'black',
    //configure the workbox plugin
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      // swSrc is required in InjectManifest mode.
      swSrc: 'dev/sw.js',
    }
  }
}

module.exports = defineConfig({
  transpileDependencies: true,

  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
  }
})
