export function timeFormat(time) {
  // 时间格式化 2019-09-08
  const year = time.getFullYear()
  const month = (time.getMonth() + 1).toString().padStart(2, '0')
  const day = time
    .getDate()
    .toString()
    .padStart(2, '0')
  const hour = time
    .getHours()
    .toString()
    .padStart(2, '0')
  const minute = time
    .getMinutes()
    .toString()
    .padStart(2, '0')
  return year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':00'
}
