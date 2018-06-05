const koa2Req = require('koa2-request');

/**
 * 获取知乎日报热门数据
 * @param  {obejct} ctx 上下文对象
 * @return {object}      查询结果
 */
let zhihu = async (ctx, next) => {
  let result = {
    success: false,
    message: '获取知乎日报接口失败',
    data: {},
    code: -10000
  }
  const start = new Date()
  let ms = 0
  try {
    let data = await koa2Req('https://news-at.zhihu.com/api/4/news/latest')
    data = JSON.parse(data.body)
    result.data = data
    result.success = true
    result.message = 'success'
    result.code = 0
  } catch (err) {
    ms = new Date() - start
    //记录异常日志
    logUtil.logError(ctx, err, ms)
  }
  ctx.body = result
}

module.exports = {
  'Get /api/zhihu': zhihu
}
