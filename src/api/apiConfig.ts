import Taro from '@tarojs/taro';
import createError from 'src/utils/createError';
import { BASE_HOST, BASE_URL } from './apiBase';

type TConfig<T> = Partial<Taro.request.Option<T>>;

/**
 * 检查http状态值
 * @param response
 * @returns {*}
 */
function checkHttpStatus(response, resolve, reject) {
  if (response.statusCode >= 200 && response.statusCode < 300) {
    if (response.data && response.data.code !== 2000) {
      return reject(
        createError(
          response.data.msg || response.data.desc,
          response.data.code,
          response
        )
      );
    } else {
      resolve(response.data);
    }
  } else {
    reject(response.data);
  }
}

// function setCookie(response: API.Response) {
//   if (response.cookies && response.cookies.length > 0) {
//     let cookies = '';
//     response.cookies.forEach((cookie, index) => {
//       // windows的微信开发者工具返回的是cookie格式是有name和value的,在mac上是只是字符串的
//       if (cookie.name && cookie.value) {
//         cookies +=
//           index === response.cookies.length - 1
//             ? `${cookie.name}=${cookie.value};expires=${cookie.expires};path=${cookie.path}`
//             : `${cookie.name}=${cookie.value};`;
//       } else {
//         cookies += `${cookie};`;
//       }
//     });
//     Taro.setStorageSync('cookies', cookies);
//   }
//   if (response.header && response.header['Set-Cookie']) {
//     Taro.setStorageSync('cookies', response.header['Set-Cookie']);
//   }
//   return response;
// }

const request = <T = any, U = any>(options: Taro.request.Option<T>) => {
  return new Promise<T>((resolve, reject) => {
    Taro.request<T, U>({
      ...options,
      url: `${BASE_HOST}${BASE_URL}${options.url}`,
      header: {
        // cookie: `vtoken=1;${Taro.getStorageSync('cookies')}`,
        ...options.header,
      },
    })
      // .then(setCookie)
      .then((res) => {
        checkHttpStatus(res, resolve, reject);
      });
  });
};

export default {
  request,
  get<T = any, U = any>(url: string, config?: TConfig<T>) {
    const options: Taro.request.Option<T> = { ...config, url, method: 'GET' };
    return request<T, U>(options);
  },
  delete<T = any, U = any>(url: string, config?: TConfig<T>) {
    const options: Taro.request.Option<T> = {
      ...config,
      url,
      method: 'DELETE',
    };
    return request<T, U>(options);
  },
  head<T = any, U = any>(url: string, config?: TConfig<T>) {
    const options: Taro.request.Option<T> = {
      ...config,
      url,
      method: 'HEAD',
    };
    return request<T, U>(options);
  },
  options<T = any, U = any>(url: string, config?: TConfig<T>) {
    const options: Taro.request.Option<T> = {
      ...config,
      url,
      method: 'OPTIONS',
    };
    return request<T, U>(options);
  },
  post<T = any, U = any>(url: string, data?: U, config?: TConfig<T>) {
    const options: Taro.request.Option<T> = {
      ...config,
      url,
      data,
      method: 'POST',
    };
    return request<T, U>(options);
  },
  put<T = any, U = any>(url: string, data?: U, config?: TConfig<T>) {
    const options: Taro.request.Option<T> = {
      ...config,
      url,
      data,
      method: 'PUT',
    };
    return request<T, U>(options);
  },
};
