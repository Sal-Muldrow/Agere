import React, { Component } from 'react';
import {
  ActivityIndicator,
  Image,
  Text,
  View,
  StyleSheet,
  Dimensions,
  StatusBar,
  Platform,
} from 'react-native';
import { Constants, Font } from 'expo';
import SideSwipe from 'react-native-sideswipe'; // Version can be specified in package.json

import { Planet, BottomBar } from './components';
import Card from "./src/Card.js"

const { width } = Dimensions.get('window');

const planets = [
  { title: '12323', value: '123123', abbr: 'SU123123N' },
  { title: 'Merc1234ury', value: 'mer454cury', abbr: 'M34qRC' },
  { title: 'Suasdn', value: 'sdfdfun', abbr: 'SdfsdfUN' },
  { title: 'Mezxczxcrcury', value: 'mervcbcvbcury', abbr: 'MzxcRC' },
  { title: 'Suhhhn', value: 'shhhun', abbr: 'ShhUN' },
  { title: 'Suaasdsdn', value: 'sasddfdfun', abbr: 'SdfsasddfUN' },
  { title: 'Mezxcxxzxcrcury', value: 'mervcxxbcvbcury', abbr: 'MzxxxcRC' },
  { title: 'Succhhhn', value: 'shcchhun', abbr: 'ScchhUN' },
  { title: 'Mezxczbbxcrcury', value: 'mervcbbbcvbcury', abbr: 'MzbbxcRC' },
  { title: 'Sunnhhhn', value: 'shhnnhun', abbr: 'ShhnnUN' },
  { title: 'Suasnndn', value: 'sdnnfdfun', abbr: 'SdnnfsdfUN' },
  { title: 'Mezxnnczxcrcury', value: 'mervcbcvbasdascnnury', abbr: 'MnnzxcRC' },
  { title: 'Sunnhhhn', value: 'shhhnnun', abbr: 'ShnnhUN' },


];

export default class App extends Component {
  state = {
    currentIndex: 0,
    fontsLoaded: false,
  };

  componentDidMount = async () => {
    await Font.loadAsync({
      dhurjati: require('./assets/Dhurjati-Regular.ttf'),
      'inconsolata-regular': require('./assets/Inconsolata-Regular.ttf'),
      'inconsolata-bold': require('./assets/Inconsolata-Bold.ttf'),
      'libre-barcode-39': require('./assets/LibreBarcode39-Regular.ttf'),
    });

    this.setState({ fontsLoaded: true });
  };

  render = () => {
    const { width } = Dimensions.get('window');
    const offset = (width - Card.WIDTH)/2

    return !this.state.fontsLoaded
      ? <View style={[styles.container, { justifyContent: 'center' }]}>
          <ActivityIndicator color="white" />
        </View>
      : <View style={styles.container}>
          <StatusBar barStyle="light-content" />


          <SideSwipe
            data={planets}
            shouldCapture={() => true}
            style={{ width }}
            contentContainerStyle={{  paddingTop: 50, }}
            itemWidth={Card.WIDTH }
            threshold={Card.WIDTH}

            extractKey={item => item.value}
            contentOffset={offset}
            onIndexChange={index =>
              this.setState(() => ({ currentIndex: index }))}
            renderItem={({ itemIndex, currentIndex, item, animatedValue }) => (
              <Card

                planet={item}
                index={itemIndex}
                currentIndex={currentIndex}
                animatedValue={animatedValue}
              ></Card>
            )}
          />

        </View>;
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#2196f3',
  },
  fill: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  title: {
    fontFamily: 'dhurjati',
    fontSize: 32,
    color: 'white',
    backgroundColor: 'transparent',
    textAlign: 'center',
    marginTop: 8,
    letterSpacing: 1.6,
    zIndex: 2,
    alignSelf: 'center'
  },
  titlePlatformSpecific: Platform.select({
    ios: {
      marginBottom: 10,
    },
  }),
});
