import React from 'react';
import { createAppContainer } from 'react-navigation';

import AppNavigator from './src/modules/navigation/App.navigator';

const App = createAppContainer(AppNavigator);

export default App;