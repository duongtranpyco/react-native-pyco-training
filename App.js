/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View, SafeAreaView, Text, Image, Dimensions, TouchableOpacity } from 'react-native';
import { FONTS, IMAGES } from './src/assets';

export default class App extends Component {

  renderLogo = () => {
    return (
      <Image
        style={styles.logo}
        source={IMAGES.logo}
        resizeMode={'cover'}
      />
    );
  };

  renderWelcomeImage = () => {
    return (
      <Image
        style={styles.welcomeImage}
        source={IMAGES.welcome.image}
        resizeMode={'contain'}
      />
    )
  };

  renderWelcomeTitle = () => {
    return (
      <Text style={styles.welcomeTitle}>
        Your ride, on demand
      </Text>
    )
  };

  renderWelcomeText = () => {
    return (
      <Text style={styles.welcomeText}>
        Whether you’re headed to work, the airport, or out on the town, Uber connects you with a reliable ride in
        minutes. One tap and a car comes directly to you.
      </Text>
    );
  };

  renderRegisterButton = () => {
    return (
      <TouchableOpacity>
      <View style={styles.registerButton}>
        <Text style={styles.registerTitle}>
          Register with Phone
        </Text>
        <Image
          source={IMAGES.arrowRight}
          style={styles.arrowRight}
        />
      </View>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView>
          {this.renderLogo()}
          {this.renderWelcomeImage()}
          {this.renderWelcomeTitle()}
          {this.renderWelcomeText()}
          {this.renderRegisterButton()}
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',

    paddingHorizontal: 30,
    paddingTop: 37.5,
    paddingBottom: 43,
  },

  // logo
  logo: {
    width: 137,
    height: 46,
    marginBottom: 40
  },

  // welcome image
  welcomeImage: {
    width: Dimensions.get('window').width - 60,
    height: 350,
    marginBottom: 40,
    marginLeft: -20,
  },

  // welcome title
  welcomeTitle: {
    fontSize: 26,
    marginBottom: 20,
    lineHeight: 43,
    fontFamily: FONTS.Oswald.Regular
  },

  // welcome text,
  welcomeText: {
    marginBottom: 40,
    fontSize: 13.4,
    lineHeight: 16,
    fontFamily: FONTS.Oswald.Light
  },

  // register button
  registerButton: {
    height: 50,
    borderRadius: 5,

    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',

    flexDirection: 'row',
    paddingHorizontal: 25
  },
  registerTitle: {
    color: 'white',
    fontSize: 14,
    flex: 1,
    textAlign: 'center',
    fontFamily: FONTS.Oswald.Regular
  },
  arrowRight: {
    width: 26,
    height: 21
  }
});
