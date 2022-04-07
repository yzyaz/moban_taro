import { Button, View } from "@tarojs/components";
import React from "react";
import { useDispatch, useSelector } from "src/models/hook";
import ComA from "./components/ComA";

import styles from "./index.module.less";

interface IProps {}

const PageA = (props: IProps) => {
  const {} = props;
  const dispatch = useDispatch();

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
    </View>
  );
};
export default React.memo(PageA);
