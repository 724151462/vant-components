export function timeFormat(time, type) {
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
  let res = ''
  switch (type) {
    case 'datetime':
      res = year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':00'
      break
    case 'date':
      res = year + '-' + month + '-' + day
      break
    default:
      break
  }
  return res
}
