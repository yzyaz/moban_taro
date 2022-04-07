import { Component } from "react";
import { View, Text, Image } from "@tarojs/components";
import bottom from "src/assets/img/bottom.svg";
import "./index.less";

export default class Index extends Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
        <Image src={bottom} />
      </View>
    );
  }
}
