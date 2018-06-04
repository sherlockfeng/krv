import axios from 'axios'
import Vue from 'vue'
import { Modal } from 'iview'
Vue.$Modal = Modal

const Utils = {
    /**
     * http请求封装
     * @param {String} type
     * @param {String} url
     * @param {Object} data
     * @param {Boolean} async
     */
    get: (url, params, callback, errorback) => {
      // let domain = 'http://rapapi.org/mockjsdata/22461'
      let domain = ''
      //通用参数处理
      let transParams = () => {
      }
      transParams();
      axios.get(domain + url, {
          headers: {
              'X-Requested-With': 'XMLHttpRequest'
          },
          timeout: 10000,
          params,
      }).then((json) => {
          let {return_code,return_message} = json.data
          if (return_code == 0){
              callback && callback(json.data)
          } else {
              errorback ? errorback(error) : Utils.toast(return_message,2000)
          }
      }).catch((error) => {
          if (error.message.indexOf('timeout') > -1) { //超时提示
            Vue.$Modal.info({
                title: '请求超时',
                content: '请求超时，请稍后再试',
            })
            setTimeout(()=>{
                Vue.$Modal.remove()
            },1000)
          } else if (error.response && error.response.status > 400){ //status 404,502这种提示
            Vue.$Modal.info({
                title: '网络故障',
                content: '网络故障' + error.response.status + '，请稍后再试',
            })
            setTimeout(()=>{
                Vue.$Modal.remove()
            },1000)
          } else{
              console.log(error)
          }
      })
  },
}

export default Utils