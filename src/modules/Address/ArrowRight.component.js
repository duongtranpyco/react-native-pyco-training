import React from 'react';
import {
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import { IMAGES } from '../../assets';

const ArrowRight = (props) => (
  <TouchableOpacity onPress={() => navigate(props.screen)}>
    <View>
      <Image source={IMAGES.arrowRight} style={{ width: 50, height: 50 }}/>
    </View>
  </TouchableOpacity>
)

export default ArrowRight;
