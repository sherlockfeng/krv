const Utils = {
  /**
   * 格式化时间
   * @param  {string}  需要的时间格式 yyyy-MM-dd hh:mm:ss
   * @param  {number}  可以设置格式化几天之前或几天之后的时间
   * @return {string}  查询结果
   */
  getTime: (fmt, before = 0) => {
    let date = new Date()
    date.setTime(date.getTime() + before * 24 * 60 * 60 * 1000)
    let o = { 
      "M+" : date.getMonth() + 1,                 //月份 
      "d+" : date.getDate(),                    //日 
      "h+" : date.getHours(),                   //小时 
      "m+" : date.getMinutes(),                 //分 
      "s+" : date.getSeconds(),                 //秒 
      "q+" : Math.floor((date.getMonth()+3)/3), //季度 
      "S"  : date.getMilliseconds()             //毫秒 
    }; 
    if(/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (date.getFullYear()+"").substr(4 - RegExp.$1.length)); 
    }
    for(var k in o) {
      if(new RegExp("("+ k +")").test(fmt)){
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
      }
    }
    return fmt; 
  }
}

module.exports = Utils