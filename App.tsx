
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Custom Imports
import screens from './src/utils/screens';
import SplashScreen from './src/screens/splash/splash';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={screens.SPLASH_SCREEN}>
        <Stack.Screen options={{headerShown: false}} name={screens.SPLASH_SCREEN} component={SplashScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;