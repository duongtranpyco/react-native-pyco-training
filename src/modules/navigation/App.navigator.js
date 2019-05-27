import { createStackNavigator } from 'react-navigation';

import WelcomeContainer from '../Welcome/Welcome.container';
import LogoNavigationHeader from './headers/Logo.navigation.header';

import { defaultNavigatorStyle } from './Navigator.styles';

const AppNavigator = createStackNavigator(
  {
    Welcome: {
      screen: WelcomeContainer,
      navigationOptions: () => ({
        headerLeft: LogoNavigationHeader
      }),
    },
  },
  {
    defaultNavigationOptions: {
      ...defaultNavigatorStyle
    },
  });


export default AppNavigator;