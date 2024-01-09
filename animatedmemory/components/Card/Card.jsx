import { Text, View } from 'react-native'
import { s } from "./Card";
import React, { Component } from 'react'

export class Card extends Component {
  render() {
    return (
      <View style={s.cardBody}>
        <Text style={s.title}>Challenge Title</Text>
      </View>
    )
  }
}

export default Card