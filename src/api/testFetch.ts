import axios from './apiConfig';

/** 测试请求接口 */
export function testFetch() {
  return axios.post<ApiData<string>>('/success');
}
/** 测试错误请求接口示范 */
export function testFetchErr() {
  return axios.post<ApiData<string>>('/err');
}
