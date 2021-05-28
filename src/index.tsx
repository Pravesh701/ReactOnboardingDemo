import * as React from 'react';
import { Provider } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

//Custom Imports
import { store } from './store';
import color from './utils/color';
import screens from './utils/screens';
import SheMaid from './screens/sheMaid';
import SplashScreen from './screens/splash/splash';

const Stack = createStackNavigator();

function MainAppContainer() {

    const headerOption = {
        headerShown: true,
        gestureEnabled: false,
        headerTitle: '',
        headerBackTitleVisible: false,
        headerTintColor: color.textColor,
        headerStyle: {
          backgroundColor: color.startGradientBtn,
          elevation: 0,
          shadowOffset: { height: 0, width: 0 },
        },
      };

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: true }} initialRouteName={screens.SPLASH_SCREEN}>
                <Stack.Screen options={{ headerShown: false }} name={screens.SPLASH_SCREEN} component={SplashScreen} />
                <Stack.Screen options = {headerOption} name={screens.SHE_MAID_SCREENS} component={SheMaid} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

function App() {

    return (
        <Provider store={store}>
            <MainAppContainer />
        </Provider>
    );
}

export default App;