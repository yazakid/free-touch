import Taro, { Component } from '@tarojs/taro'
import { View, Text, Input ,Form, Button} from '@tarojs/components'
import './index.scss'

class Subform extends Component {
  static defaultProps = {
    data: {}
  }

  constructor(props) {
    super(props)
    this.state = {
    }
  }
  
  componentDidMount() {
  }

  componentWillReceiveProps() {
  }

  componentWillUnmount() {
  }

  render () {
    return (
      <View className='home-sub-form__list'>
        <View className='home-sub-form__list-item'>
            <Text className='home-sub-form__list-item-text'>姓名：</Text>
            <Input className='home-sub-form__list-item-inp' type='text'/>
        </View>
        <View className='home-sub-form__list-item'>
            <Text className='home-sub-form__list-item-text'>手机：</Text>
            <Input className='home-sub-form__list-item-inp' type='number'  maxLength='11'/>
        </View>
        <View className='home-sub-form__list-sub'>
            <Button  size= 'default' className='home-sub-form__list-sub-btn'><Text className='home-sub-form__list-sub-btn-txt'>一键办理</Text></Button>
            <Text className='home-sub-form__list-sub-pre'>点击申请即同意 <Text className='home-sub-form__list-sub-msg'>《平安好贷用户服务协议》 </Text></Text>
        </View>
      </View>
    )
  }
}
export default  Subform;