var rq = require('request-promise')
exports.main = (event, context) => {
  var res = rq('http://www.weather.com.cn/data/sk/'+event.code+'.html').then( html => {
    return html;
  })
  console.log(event);
  return res
}