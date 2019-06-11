import Vue from 'vue';
import axios from 'axios'
import { toESTs } from './tools'
import { Message } from 'element-ui'
let qs = require('qs');
//判断对象是否是字符串
function isString(obj) {
    return Object.prototype.toString.call(obj) === "[object String]";
}
Date.prototype.format = function(fmt) {
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}
Array.prototype.remove = function(val) {
    let index = this.indexOf(val);
    if (index > -1) {
        this.splice(index, 1);
    }
};
//活动API接口地址
const API = {
    230: "http://activity-api.go/",
    232: "http://activity-api.go/",
    docker: "https://test.activityapi.34era.com/",
    outtest: "https://test.activityapi.lgapi.co/",
    production: "https://activityapi.lgapi.co/"
}

//埋点API地址
const API1 = {
    230: "http://game.eventtrack.local/api/",
    232: "http://game.eventtrack.local/api/",
    docker: "https://test.collect.34era.com/api",
    outtest: "https://test.collect.lgapi.co/api",
    production: "https://collect.lgapi.co/api"
}

let FetchA = axios.create({
    baseURL: API[process.env.VUE_APP_BUILD_MODE],
    // headers: { 'Accept': 'application/vnd.pt.v0.1.0+json' },
    // headers:{'Content-Type': 'text/plain;charset=UTF-8'},
    headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },

    transformRequest: [function(data, headers) {
        // Do whatever you want to transform the data
        if (!data) return false
        let k = qs.stringify(data)
        return k
    }],
});
let FetchB = axios.create({
    baseURL: API1[process.env.VUE_APP_BUILD_MODE],

    headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },

    transformRequest: [function(data, headers) {
        // Do whatever you want to transform the data
        if (!data) return false
        let k = qs.stringify(data)
        return k
    }],
});
Vue.FetchA = FetchA
Vue.FetchB = FetchB
console.log(API1[process.env.VUE_APP_BUILD_MODE])
    // Add a response interceptor
FetchA.interceptors.response.use(function(response) {
    // Do something with response data
    // console.log(1)
    // console.log(response)
    return response;
}, function(error) {
    // console.log(2)
    // console.log(error)
    // let c = document

    // Do something with response error
    return Promise.reject(error);
});

// export function Ajax(type, url, data,fn, timeout = null) {
export function AjaxA(type, url, data, fn) {
    return new Promise((resolve, reject) => {
        let datas = {};


        if (type == 'get' || type == 'delete') {
            datas = {
                params: data,
                // timeout:timeout
            }
        } else {
            // datas = {...data,timeout:timeout};
            datas = data
        }


        Vue.FetchA[type](url, datas).then((res) => {
            if (res.status === 200) {

                if (parseInt(res.data.code) == 0) {
                    resolve(res.data)
                } else {
                    reject(res.data)
                }

            }

        }).catch((err) => {
            reject(err);

        })
    })

}


export function AjaxB(type, url, data, fn) {
    return new Promise((resolve, reject) => {
        let datas = {};


        if (type == 'get' || type == 'delete') {
            datas = {
                params: data,
                // timeout:timeout
            }
        } else {
            // datas = {...data,timeout:timeout};
            datas = data
        }


        Vue.FetchB[type](url, datas).then((res) => {
            if (res.status === 200) {

                if (parseInt(res.data.Code) == 0) {
                    resolve(res.data)
                } else {
                    reject(res.data)
                }

            }

        }).catch((err) => {
            reject(err);

        })
    })

}


export function errorReport(that, res) {
    console.log(res)
    if (typeof res.text == 'string') {
        // that.$message.error(res.text);
        Message.error({
            type: 'error',
            message: res.text
        })
        if (res.code == 401) {
            sessionStorage.removeItem('key');
            that.$router.push({ path: '/login' })
        }
    } else if (res.code == "ECONNABORTED") {

        // that.$message.error("超时错误");
        Message.error({
            type: 'error',
            message: "超时错误"
        })
    }
    // else if (res.response.status == 500) {
    //     // let err = "";
    //     // for (let item in res.text) {
    //     //     err += res.text[item][0]
    //     // }
    //     //超时处理
    //     console.log(res)
    //     that.$message.error("服务器错误:"+res.response.data.message+",Code:"+res.response.data.status_code);
    // }
    else if (Object.prototype.toString.call(res.text) == '[object Object]') {
        let err = "";
        for (let item in res.text) {
            err += res.text[item][0]
        }
        // that.$message.error(err);
        Message.error({
            type: 'error',
            message: err
        })
    } else {
        // that.$message.error("服务器或者网络错误");
        Message.error({
            type: 'error',
            message: "服务器或者网络错误"
        })
        return false
    }
}

export function limitBtn({ code = 0, menu = 0 } = {}) {
    if (!code) return;
    if (!menu) return;
    let v;
    let bBtn = {};
    let cId = {};
    let m = {};
    menu.forEach(function(el) {
        el._child.forEach(function(el) {
            if (el.menu_code == code) {
                v = el
            }
        })
    });
    if (v._child) {
        v._child.forEach(function(val) {
            bBtn[val.menu_code] = val.state
            cId[val.menu_code] = val.id
        })
    }
    return { bBtn, cId };
}

export class limit {
    static limitRouter(code) {
        let menu = JSON.parse(sessionStorage.getItem('menus')) || []
        let exit = false
        menu.forEach(function(el) {
            el._child.forEach(function(el) {
                if (el.menu_code == code) {
                    exit = true
                }
            })
        });

        return exit
    }

    static optionTime(that) {
        return {
            shortcuts: [{
                    text: that.$t('jintian'),
                    onClick(picker) {
                        const endEST = toESTs(new Date())
                        const startEST = toESTs(new Date())
                        const end = new Date(endEST.replace(/-/g, "/"))
                        const start = new Date(startEST.replace(/-/g, "/"))
                        let nowHours = start.getHours()
                        let nowMinutes = start.getMinutes()
                        let nowSecond = start.getSeconds()
                        let nowMilliseconds = start.getMilliseconds()
                        start.setTime(start.getTime() - (nowHours * 60 * 60 * 1000 + nowMinutes * 60 * 1000 + nowSecond * 1000 + nowMilliseconds))
                        end.setTime(start.getTime() + 23 * 60 * 60 * 1000 + 59 * 60 * 1000 + 59 * 1000)
                        picker.$emit('pick', [start, end])
                    }
                },
                {
                    text: that.$t('OptTimePicker1'),
                    onClick(picker) {
                        const end = new Date()
                        const start = new Date()
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 3)
                        picker.$emit('pick', [toESTs(start).replace(/-/g, "/"), toESTs(end).replace(/-/g, "/")])
                    }
                }, {
                    text: that.$t('OptTimePicker2'),
                    onClick(picker) {
                        const end = new Date()
                        const start = new Date()
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
                        picker.$emit('pick', [toESTs(start).replace(/-/g, "/"), toESTs(end).replace(/-/g, "/")])
                    }
                },
                {
                    text: that.$t('OptTimePicker3'),
                    onClick(picker) {
                        const end = new Date()
                        const start = new Date()
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 14)
                        picker.$emit('pick', [toESTs(start).replace(/-/g, "/"), toESTs(end).replace(/-/g, "/")])
                    }
                },
                {
                    text: that.$t('OptTimePicker4'),
                    onClick(picker) {
                        const end = new Date()
                        const start = new Date()
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
                        picker.$emit('pick', [toESTs(start).replace(/-/g, "/"), toESTs(end).replace(/-/g, "/")])
                    }
                }
            ]
        }
    }

}


function onChangePageSize(page_size, form, that) {
    that.getList({
        page_size,
        where: form
    })
}

Vue.prototype.$optionTime = function(that) {
    return limit.optionTime(that)
}

function onChangeCurrentPage(page) {

    this.getList({
        page,
        where: this.queryform
    })
}
Vue.prototype.$onChangePageSize = function(page_size, form) {
    onChangePageSize(page_size, form, this)
}

Vue.prototype.$onChangeCurrentPage = function(page, form) {
        onChangeCurrentPage(page, form, this)
    }
    //获取唯一id函数
export function generateUUID() {
    let d = new Date().getTime();
    let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        let r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
}

//列表点击展开函数
Vue.prototype.$clickExpand = function(row, event, column, that) {
    // clickexpand(row, event, column){

    if (that.entexpands.indexOf(row.uuid) < 0) {
        that.entexpands = [];
        row.uuid = generateUUID();
        that.entexpands.push(row.uuid);
    } else {
        that.entexpands.remove(row.uuid);
    }

}

Vue.prototype.$generateUUID = function(that) {
    return generateUUID()
}

Vue.prototype.$defaultTime = function() {
    const endEST = toESTs(new Date())
    const startEST = toESTs(new Date())
    const end = new Date(endEST.replace(/-/g, "/"))
    const start = new Date(startEST.replace(/-/g, "/"))
    let nowHours = start.getHours()
    let nowMinutes = start.getMinutes()
    let nowSecond = start.getSeconds()
    let nowMilliseconds = start.getMilliseconds()
    start.setTime(start.getTime() - (nowHours * 60 * 60 * 1000 + nowMinutes * 60 * 1000 + nowSecond * 1000 + nowMilliseconds))
    end.setTime(start.getTime() + 23 * 60 * 60 * 1000 + 59 * 60 * 1000 + 59 * 1000)
    return [start, end]
}
Vue.prototype.$onehundred = function() {
        let prog = document.querySelector(".el-progress__text");
        if (prog) {
            // console.log(prog.innerHTML);
            if ((prog.innerHTML).replace(/\%/, "") > 90) {

                prog.innerHTML = "99%";
            }
        }
    }
    // export function defaultTime() {
    //     const end = new Date(toESTs(new Date()))
    //     const start = new Date(toESTs(new Date()))
    //     let nowHours = start.getHours()
    //     let nowMinutes = start.getMinutes()
    //     let nowSecond = start.getSeconds()
    //     let nowMilliseconds = start.getMilliseconds()
    //     start.setTime(start.getTime() - (nowHours * 60 * 60 * 1000 + nowMinutes * 60 * 1000 + nowSecond * 1000 + nowMilliseconds))
    //         // return [new Date(start).toISOString(), new Date(end).toISOString()]
    //     return [start, end]
    // }
    //  onChangeCurrentPage(page) {

//             this.getList({
//                 page,
//                 where:this.queryform
//             })
//         }
// export function toESTs(time) {
//     if (!time) {
//         return ''
//     }
//     const d = new Date(2017, 0, 1)
//     const d1 = new Date(2017, 6, 1)
//         // 时令补时
//     const season = d.getTimezoneOffset() !== d1.getTimezoneOffset() ? 0 : 3600000
//         // let localOffset = d.getTimezoneOffset() * 60000
//     let utc = Date.parse(time)
//     let NYTime = utc - (3600000 * 5) + season

//     return new Date(NYTime).toISOString().replace('T', ' ').replace('.000Z', '')
// }


//德州牛仔 试图渲染格式化数组
//例子 remark “2,3;40,41;18,19,34,4,5”
// result “1;3;0;2,18,3,19,5”
//返回值 [ '2-2', '3-3', '40', '41', '18-18', '19-19', '34', '4', '5-5' ]
export function CowBoy(remark, result) {
    if (!remark) { console.log("remark不存在"); return []; }
    if (!result) { console.log("result不存在"); return []; }
    if (!isString(remark)) { console.log("remark不是字符串,内容:" + remark); return []; }
    if (!isString(result)) { console.log("result不是字符串,内容:" + result); return []; }
    let remarkFormat = [];
    let resultFormat = [];
    console.log(result)
    try {
        remarkFormat = remark.replace(/;/g, ",").split(",");
        resultFormat = result.split(";")[3].split(",");
    } catch (e) {
        console.log(e)

        console.log("格式不正确")
        return [];
    }
    let remarkLength = remarkFormat.length;
    if (remarkLength != 9) { console.log("remark长度不为9,内容:" + remarkFormat); return []; }
    let resultLength = resultFormat.length;
    if (resultLength != 5) { console.log("resul长度不为5,内容:" + resultFormat); return []; }
    for (let i = 0; i < remarkLength; i++) {
        let temp = remarkFormat[i]
        for (let j = 0; j < resultLength; j++) {
            if (temp == resultFormat[j]) {
                remarkFormat[i] = temp + "-" + resultFormat[j]
                break;
            }
        }

    }
    //格式
    return remarkFormat;
}