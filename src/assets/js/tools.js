/**
 * Created by Epsilon on 2017/4/14.
 */

//  本地时间转美东时间 （丢弃）
export function toLocalTime(timeArr) {
    console.log(timeArr.length)
    console.log(timeArr.length === 2)
    if (timeArr.length === 2 && timeArr[0] === null) {
        return false
    }
    let result = []
    let localOffset = new Date().getTimezoneOffset() * 60000
    for (let i in timeArr) {
        result.push(new Date(Date.parse(timeArr[i]) - localOffset).toISOString().replace('T', ' ').replace('.000Z', ''))
    }

    return result
}

// （丢弃）
export function toESTs(time) {
    if (!time) {
        return ''
    }
    const d = new Date(2017, 0, 1)
    const d1 = new Date(2017, 6, 1)
        // 时令补时
    const season = d.getTimezoneOffset() !== d1.getTimezoneOffset() ? 0 : 3600000
        // let localOffset = d.getTimezoneOffset() * 60000
    let utc = Date.parse(time)
    let NYTime = utc - (3600000 * 5) + season

    return new Date(NYTime).toISOString().replace('T', ' ').replace('.000Z', '')
}

export function toEST(time) {
    if (!time) {
        return ''
    }
    return new Date(time).format("yyyy-MM-dd hh:mm:ss")
}

export function clone(obj) {
    return Object.create(
        Object.getPrototypeOf(obj),
        Object.getOwnPropertyDescriptors(obj)
    )
}


export function timeRangeRules($this, val, target) {
    if (!val) {
        $this[target].timeVal = []
        return
    }
    if (val.length === 2 && val[0] !== null) {
        let val0 = new Date(val[0])
        let val1 = new Date(val[1])
        if (val1.getTime() <= val0.getTime()) {
            $this[target].timeVal = []
            return
        }
        (3600 * 1000 * 24 * 40) < (val1.getTime() - val0.getTime()) &&
        $this.$message.error($this.$t('rulesTimeLimit')) && ($this[target].timeVal = [])
    }
}

export function timeRangeRules3($this, val, target) {
    if (!val) {
        $this[target].timeVal = []
        return
    }
    if (val.length === 2 && val[0] !== null) {
        let val0 = new Date(val[0])
        let val1 = new Date(val[1])
        if (val1.getTime() <= val0.getTime()) {
            $this[target].timeVal = []
            return
        }
        (3600 * 1000 * 24 * 30 * 3) < (val1.getTime() - val0.getTime()) &&
        $this.$message.error($this.$t('rulesTimeLimit3')) && ($this[target].timeVal = [])
    }
}

//日期函数后者大于前者
export function timeRangeRules4($this, val, target) {
    if (!val) {
        $this[target].timeVal = []
        return
    }
    if (val.length === 2 && val[0] !== null) {
        let val0 = new Date(val[0])
        let val1 = new Date(val[1])
        if (val1.getTime() <= val0.getTime()) {
            $this[target].timeVal = []
            return
        }
    }
}