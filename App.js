import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { AppRegistry } from 'react-native';

import Constructions from './src/screens/Constructions';;
import WelcomeBack from './src/screens/WelcomeBack';
import MenuContents from './src/screens/MenuContents';

const navigator = createStackNavigator(
  { 
    Constr: Constructions,
    Welcome: WelcomeBack,
    Men:MenuContents
  },
  {
    initialRouteName: 'Constr',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
);

export default createAppContainer(navigator);
  
AppRegistry.registerComponent('Point', () => Point) 