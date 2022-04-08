// export const REGISTER_SOURCE = '108';

export const IS_DEV = process.env.NODE_ENV === 'development';

// export const LOGIN_TYPE = IS_DEV ? '114' : '14';

export const BASE_HOST = IS_DEV
  ? 'https://www.fastmock.site/mock/f3feaaceec0de8d1a32084308143c624'
  : 'https://xs.newrank.cn';

export const BASE_URL = '/ceshi1';

// export const BASE_MAIN_URL = IS_DEV
//   ? 'http://test.main.newrank.cn'
//   : 'https://www.newrank.cn';

// export const BASE_PAY_URL = IS_DEV
//   ? 'http://test.pay.newrank.cn'
//   : 'https://pay.newrank.cn';

// export const HTTP_ERROR = {
//   '400': '发出的请求有错误，服务器没有进行新建或修改数据的操作',
//   '401': '用户没有权限（令牌、用户名、密码错误）',
//   '403': '用户得到授权，但是访问是被禁止的',
//   '404': '发出的请求针对的是不存在的记录，服务器没有进行操作',
//   '406': '请求的格式不可得',
//   '410': '请求的资源被永久删除，且不会再得到的',
//   '422': '当创建一个对象时，发生一个验证错误',
//   '500': '服务器发生错误，请检查服务器',
//   '502': '网关错误',
//   '503': '服务不可用，服务器暂时过载或维护',
//   '504': '网关超时',
// };
