import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './index.scss'

export default class Policy extends Component {
  static defaultProps = {
    list: []
  }

  render () {
    return (
      <View className='home-policy'>
          <View  className='home-policy__item'>
            <Image
              className='home-policy__item-img'
              src={require('../../../assets/images/back.png')}
            />
            <Text className='home-policy__item-txt'>官方入口</Text>
          </View>
      </View>
    )
  }
}
