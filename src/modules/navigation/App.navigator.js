import { createStackNavigator } from 'react-navigation';

import WelcomeContainer from '../Welcome/Welcome.container';
import { COLORS } from '../../themes';

const AppNavigator = createStackNavigator(
  {
    Welcome: {
      screen: WelcomeContainer
    },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: COLORS.white,
        borderBottomWidth: 0,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  });


export default AppNavigator;