import { View } from '@tarojs/components';
import React from 'react';
import { useSelector } from 'src/models/hook';

import styles from './index.module.less';

const ComA = () => {
  const countState = useSelector((state) => state.count.num);
  // const state = useSelector((state) => state.count);

  return (
    <View className={styles.comA}>
      ComA
      <View>{countState}</View>
    </View>
  );
};
export default React.memo(ComA);
