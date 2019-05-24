/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

export default class App extends Component {

  renderLogo = () => {

  };

  renderWelcomeImage = () => {

  };

  renderWelcomeTitle = () => {

  };

  renderWelcomeText = () => {

  };

  renderRegisterButton = () => {

  };

  render() {
    return (
      <View style={styles.container}>
        {this.renderLogo()}
        {this.renderWelcomeImage()}
        {this.renderWelcomeTitle()}
        {this.renderWelcomeText()}
        {this.renderRegisterButton()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  // logo
  logo: {

  },

  // welcome image
  welcomeImage: {

  },

  // welcome title
  welcomeTitle: {

  },

  // welcome text,
  welcomeText: {

  },

  // register button
  registerButton: {
    
  }
});
