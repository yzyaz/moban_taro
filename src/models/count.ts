import { createModel } from '@rematch/core';
import { testFetch, testFetchErr } from 'src/api/testFetch';
import { RootModel } from '.';

export const count = createModel<RootModel>()({
  state: {
    num: 0,
    str: 's',
    req: {} as any,
  },
  reducers: {
    increment(state, payload: number) {
      state.num = state.num + payload;
    },
    changeReq(state, payload: any) {
      state.req = payload;
    },
  },
  effects: (dispatch) => ({
    // 数据请求
    async testFetch() {
      let req = await testFetch();
      console.log('req', req.data);
      dispatch.count.changeReq(req);
    },

    // 数据请求错误示范
    async testFetchErr() {
      let req = await testFetchErr();
      console.log('req', req.data);
      dispatch.count.changeReq(req);
    },
  }),
});
