import { Ajax, errorReport } from './common'
//获取期数列表
const getIssueLists = async function() {

        let data = Object.assign({}, { is_page: 0 }); //0不分页，1分页 默认的
        try {
            let res = await Ajax("get", "issue", data);
            return res;
        } catch (error) {
            errorReport(this, error);
        } finally {
            // console.log(2)
        }
    }
    //获取游戏分类列表 gema
const getGameTypeLists = async function() {
        try {
            let res = await Ajax('get', 'game/cat', {});
            return res;
        } catch (error) {
            errorReport(this, error)
        } finally {

        }
    }
    //获取游戏类型列表 game_name    
const getGameLists = async function() {
        let data = Object.assign({}, { is_page: 0 }); //0不分页，1分页 默认的
        try {
            let res = await Ajax('get', 'game', data);
            return res;
        } catch (error) {
            errorReport(this, error)
        } finally {

        }
    }
    //获取厅种类列表
const getHallTypeLists = async function() {
        try {
            let res = await Ajax('get', 'hall/games', {});
            return res;
        } catch (error) {
            errorReport(this, error)
        } finally {

        }
    }
    //获取厅主列表
const getHallLists = async function() {

    }
    //获取代理列表
const getAgentLists = async function() {

    }
    //获取玩家列表
const getPlayLists = async function() {

}


let ServiceData = {
    getIssueLists, //获取期数列表
    getGameTypeLists, //获取游戏分类列表
    getHallLists, //获取厅主列表
    getAgentLists, //获取代理列表
    getPlayLists, //获取玩家列表
    getHallTypeLists, //获取厅种类列表
    getGameLists, //获取游戏列表
}


export default ServiceData;