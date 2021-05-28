import * as React from 'react';
import { Provider } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

//Custom Imports
import { store } from './store';
import screens from './utils/screens';
import SplashScreen from './screens/splash/splash';

const Stack = createStackNavigator();

function MainAppContainer() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={screens.SPLASH_SCREEN}>
                <Stack.Screen name={screens.SPLASH_SCREEN} component={SplashScreen} />
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