/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View, SafeAreaView, Text } from 'react-native';

export default class App extends Component {

  renderLogo = () => {
    return (
      <View style={styles.logo}>

      </View>
    );
  };

  renderWelcomeImage = () => {
    return (
      <View style={styles.welcomeImage}>

      </View>
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
        Whether you’re headed to work, the airport, or out on the town, Uber connects you with a reliable ride in minutes. One tap and a car comes directly to you.
      </Text>
    );
  };

  renderRegisterButton = () => {
    return (
      <View style={styles.registerButton}>

      </View>
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
    backgroundColor: 'green',
    marginBottom: 40
  },

  // welcome image
  welcomeImage: {
    width: 320,
    height: 350,
    backgroundColor: 'blue',
    marginBottom: 40
  },

  // welcome title
  welcomeTitle: {
    marginBottom: 20,
    backgroundColor: 'yellow'
  },

  // welcome text,
  welcomeText: {
    marginBottom: 40,
    backgroundColor: 'gray',
  },

  // register button
  registerButton: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
  }
});
