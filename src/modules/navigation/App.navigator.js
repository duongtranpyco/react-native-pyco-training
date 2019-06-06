import { createStackNavigator } from 'react-navigation';

import WelcomeContainer from '../Welcome/Welcome.container';
import LogoNavigationHeader from './headers/Logo.navigation.header';
import AddressContainer from '../Address/Address.container';

import { defaultNavigatorStyle } from './Navigator.styles';

const AppNavigator = createStackNavigator(
  {
    Address: {
      screen: AddressContainer,
      navigationOptions: () => ({
        headerLeft: LogoNavigationHeader
      }),
    },
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