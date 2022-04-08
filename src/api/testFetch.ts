import axios from './apiConfig';

/** 测试请求接口 */
export function testFetch() {
  return axios.post<ApiData<string>>('/success', {
    a: 1,
    b: 2,
  });
}
/** 测试请求接口 */
export function testFetch2() {
  return axios.post<ApiData<string>>(
    '/success',
    {
      a: 1,
      b: 2,
    },
    {
      header: {
        // 对于 POST 方法且 header['content-type'] 为 application/x-www-form-urlencoded 的数据，会将数据转换成 query string
        'content-type': 'application/x-www-form-urlencoded',
      },
    }
  );
}
/** 测试错误请求接口示范 */
export function testFetchErr() {
  return axios.post<ApiData<string>>('/err');
}
