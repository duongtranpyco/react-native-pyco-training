import React from 'react';
import { IMAGES } from '../../../assets';
import { Image } from 'react-native';

import styles from './Logo.navigation.header.styles';

const LogoNavigationHeader = () => (
  <Image
    style={styles.logo}
    source={IMAGES.logo}
    resizeMode={'cover'}
  />
);

export default LogoNavigationHeader