import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions  } from 'react-native';

//header component
const { width: screenWidth } = Dimensions.get('window');
const width = screenWidth - 50;
export class Card extends Component {
  static WIDTH = 320;
  render() {
    return (
      <View style={styles.viewStyle}>
        <Text style={styles.bigblue}>YOYOYO</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  bigblue: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
  },
  viewStyle: {
  backgroundColor: '#fff',
  justifyContent: 'center',

  width: 300,
  shadowColor: '#000000',
  shadowOffset: {
    width: 0,
    height: 3
  },
  flex: 1,
  borderRadius: 3,
  shadowOpacity: .2,
  margin: 10,
  height: 500,



  },
});


export default Card;
// skip this line if using Create React Native App
//wow
