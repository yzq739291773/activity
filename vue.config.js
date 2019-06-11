let path = require('path')
let glob = require('glob')
    //配置pages多页面获取当前文件夹下的html和js
function getEntry(globPath) {
    // console.log('globPath', globPath)
    let entries = {},
        basename, tmp, pathname, appname;

    glob.sync(globPath).forEach(function(entry) {
        // console.log('entry', entry)
        basename = path.basename(entry, path.extname(entry));
        // console.log('basename', basename)
        tmp = entry.split('/').splice(-3);
        // console.log('tmp', tmp)
        pathname = basename; // 正确输出js和html的路径
        // console.log('pathname', pathname)

        // console.log(pathname)
        entries[pathname] = {
            entry: 'src/' + tmp[0] + '/' + tmp[1] + '/' + tmp[1] + '.js',
            template: 'src/' + tmp[0] + '/' + tmp[1] + '/' + tmp[2],
            filename: tmp[2]
        };
    });
    // console.log(entries)
    return entries;

}

let htmls = getEntry('./src/pages/**/*.html');
// console.log(htmls)
//配置end

module.exports = {
    pages: htmls,
    baseUrl: '',
    productionSourceMap: false,
    devServer: {
        index: 'selection.html', //默认启动serve 打开page1页面
        open: process.platform === 'darwin',
        host: '',
        port: 8088,
        https: false,
        hotOnly: false,
        // proxy: {
        //     '/xrf/': {
        //         target: 'http://reg.tool.hexun.com/',
        //         changeOrigin: true,
        //         pathRewrite: {
        //             '^/xrf': ''
        //         }
        //     },
        //     '/wa/': {
        //         target: 'http://api.match.hexun.com/',
        //         changeOrigin: true,
        //         pathRewrite: {
        //             '^/wa': ''
        //         }
        //     }
        // }, // 设置代理
        before: app => {}
    },
    chainWebpack: config => {
        config.module
            .rule('images')
            .use('url-loader')
            .loader('url-loader')
            .tap(options => {
                // 修改它的选项...
                options.limit = 10000
                return options
            })
    }
}