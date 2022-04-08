interface ApiData<T = any> {
  code: number;
  data: T;
  msg: string;
}

declare namespace API {
  export interface Response<T = any> {
    cookies: Array<{
      name: string;
      value: string;
      expires: string;
      path: string;
      [key: string]: any;
    }>;
    data: T;
    errMsg: string;
    header: any;
    statusCode: number;
    config?: any;
    request?: any;
  }
}
