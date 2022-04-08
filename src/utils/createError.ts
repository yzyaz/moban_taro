/** 自定义错误 */
export class AxiosError extends Error {
  isCustomAxiosError: boolean;
  msg: string;
  // config: any;
  code?: string | number | null;
  // request?: any;
  response?: any;

  constructor(
    msg: string,
    // config: any,
    code?: string | number | null,
    // request?: any,
    response?: any
  ) {
    super();

    // this.config = config;
    this.code = code;
    this.msg = msg;
    this.message = msg;
    // this.request = request;
    this.response = response;
    this.isCustomAxiosError = true;
  }
}

export default function createError(
  msg: string,
  // config: any,
  code?: string | number | null,
  // request?: any,
  response?: any
): AxiosError {
  const error = new AxiosError(
    msg,
    //  config,
    code,
    // request,
    response
  );

  return error;
}
