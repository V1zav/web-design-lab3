const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  runtimeCompiler: true, // Compile at run time
	configureWebpack: {
		resolve: {
			alias: {
				vue: 'vue/dist/vue.esm-bundler.js',
			},
		},
	},
  pages: {
	  index: {
			entry: "./src/pages/index/index.js",
			// template: "public/index.html",
			template: "./src/pages/index/index.html",
			title: "Home",
			chunks: ["chunk-vendors", "chunk-common", "index"],
		},
		about: {
			entry: "./src/pages/about/about.js",
			// template: "public/index.html",
			filename: "about.html",
			template: "./src/pages/about/about.html",
			title: "Home",
			chunks: ["chunk-vendors", "chunk-common", "about"],
		},
		aboutme: {
			entry: "./src/pages/aboutme/aboutme.js",
		// template: "public/index.html",
			filename: "aboutme.html",
			template: "./src/pages/aboutme/aboutme.html",
			title: "Home",
			chunks: ["chunk-vendors", "chunk-common", "aboutme"],
		},
		calculator: {
			entry: "./src/pages/calculator/calculator.js",
			// template: "public/index.html",
			filename: "calculator.html",
			template: "./src/pages/calculator/calculator.html",
			title: "Home",
			chunks: ["chunk-vendors", "chunk-common", "calculator"],
		},
		register: {
			entry: "./src/pages/register/register.js",
			// template: "public/index.html",
			filename: "register.html",
			template: "./src/pages/register/register.html",
			title: "Home",
			chunks: ["chunk-vendors", "chunk-common", "register"],
		},
		signin: {
			entry: "./src/pages/signin/signin.js",
			// template: "public/index.html",
			filename: "signin.html",
			template: "./src/pages/signin/signin.html",
			title: "Home",
			chunks: ["chunk-vendors", "chunk-common", "signin"],
		},
  },
})
