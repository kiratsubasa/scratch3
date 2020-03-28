//vue.config.js
module.exports = {
    devServer: {
        port: 8080,
        host: "localhost",
        https: false,
        // 自动启动浏览器
        open: true,
        // proxy: 'http://fbilab.cc:8080',
        proxy: {
            '/api/': {
                target: 'http://fbilab.cc:8008/api/', //设置调用的接口域名和端口
                changeOrigin: true, //是否跨域
                ws: true,
                pathRewrite: {
                    '^/api/': ''
                }
            },
        }
    }
}
