import { createStackNavigator } from 'react-navigation';

import WelcomeContainer from '../Welcome/Welcome.container';

const AppNavigator = createStackNavigator(
  {
    Welcome: {
      screen: WelcomeContainer
    },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'white',
          borderBottomWidth: 0,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  });


export default AppNavigator;