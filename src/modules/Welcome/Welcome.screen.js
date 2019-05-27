import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';
import { IMAGES } from '../../assets';

import styles from './Welcome.screen.styles';

class WelcomeScreen extends Component {

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
          {this.renderWelcomeImage()}
          {this.renderWelcomeTitle()}
          {this.renderWelcomeText()}
          {this.renderRegisterButton()}
      </View>
    );
  }
}

export default WelcomeScreen;