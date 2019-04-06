function formatYear(date) {
  var year = date.getFullYear()
  return year
}
function formatMou(date){
  var month = date.getMonth() + 1
  return month
}
function formatDay(date){
  var day = date.getDate()
  return day
}
function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatYear: formatYear,
  formatMou:formatMou,
  formatDay:formatDay
} 