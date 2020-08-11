import Taro from '@tarojs/taro'
import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'

export default class About extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  onReachBottom () {
    console.log('===s=sdsds')
  }

  render () {
    return (
      <View className='about'>
        <Text onClick={() => { Taro.navigateTo({ url: '/pages/index/index' }) }}>About</Text>
      </View>
    )
  }
}
