import { Text, View, Image } from 'react-native'
import { s } from "./Card.style";
import React, { Component } from 'react'
import checkImg from "../../assets/check.png";

export class Card extends Component {
  render() {
    return (
      <View style={s.cardBody}>
        <Text style={s.title}>Challenge Title</Text>
        <Image style={s.img} source={checkImg} />
      </View>
    )
  }
}

export default Card