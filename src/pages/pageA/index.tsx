import { Button, View } from '@tarojs/components';
import React from 'react';
import { useDispatch, useSelector } from 'src/models/hook';
import ComA from './components/ComA';

import styles from './index.module.less';

interface IProps {}

const PageA = (props: IProps) => {
  const dispatch = useDispatch();

  const loadingObj = useSelector(
    (rootState) => rootState.loading.effects.count.testFetchErr
  );
  console.log('loadingObj', loadingObj);

  return (
    <View className={styles.pagea}>
      PageA
      <Button
        onClick={() => {
          dispatch.count.increment(1);
        }}
      >
        改变num
      </Button>
      <ComA />
      <Button
        onClick={() => {
          dispatch.count.testFetch();
        }}
      >
        请求接口
      </Button>
      <Button
        onClick={() => {
          dispatch.count.testFetchErr();
        }}
      >
        请求错误接口
      </Button>
    </View>
  );
};
export default React.memo(PageA);
