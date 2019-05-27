import { Dimensions, StyleSheet } from 'react-native';
import { FONTS } from '../../assets';
import { COLORS } from '../../themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,

    paddingHorizontal: 30,
    paddingTop: 37.5,
    paddingBottom: 43,
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
    backgroundColor: COLORS.black,

    flexDirection: 'row',
    paddingHorizontal: 25
  },
  registerTitle: {
    color: COLORS.white,
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

export default styles;