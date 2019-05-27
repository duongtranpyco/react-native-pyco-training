import { Dimensions, StyleSheet } from 'react-native';
import { FONTS } from '../../assets';

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

export default styles;