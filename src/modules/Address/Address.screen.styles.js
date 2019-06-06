import { Dimensions, StyleSheet, View } from 'react-native';
import { FONTS } from '../../assets';
import { COLORS } from '../../themes';
import React from 'react';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,

    paddingHorizontal: 30,
    paddingTop: 37.5,
    paddingBottom: 43,
  },

  savedAddressTitle: {
    fontSize: 30,
    marginBottom: 20,
    lineHeight: 36,
    fontFamily: FONTS.Oswald.Light
  },
  savedAddressesItemContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  savedAddressesItemIcon: {
    width: 37,
    height: 37,
    backgroundColor: 'yellow',
    margin: 10,
    marginLeft: 0
  },
  savedAddressesItemTitle: {
    fontSize: 18,
    marginBottom: 5,
    lineHeight: 16,
    fontFamily: FONTS.Oswald.Light
  },
  savedAddressesItemAddress: {
    fontSize: 13,
    lineHeight: 16,
    fontFamily: FONTS.Oswald.Light
  }
});

export default styles;