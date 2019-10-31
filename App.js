import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import MemoListScreen from './src/screens/MemoListScreen';

const App = createStackNavigator({
  Home: { screen: MemoListScreen },
});

export default createAppContainer(App);