/**
 * 获得url中请求的参数
 * @return {}
 */
export function getQueryParams(): {
  [propName: string]: string
} {
  const query = window.location.search.substring(1)
  const arr = query.split('&')
  const params: {
    [propName: string]: string
  } = {}
  for (let i = 0; i < arr.length; i += 1) {
    const pair = arr[i].split('=')
    // eslint-disable-next-line prefer-destructuring
    params[pair[0]] = pair[1]
  }
  return params
}
export function test(str: any) {
  return str
}
