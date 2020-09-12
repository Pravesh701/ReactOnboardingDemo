import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Custom Imports
import Login from './screens/login';
import screens from './utils/screens';
import SplashScreen from './screens/splash/splash';
import color from './utils/color';
import fontFamily from './utils/fonts';

const Stack = createStackNavigator();

function OnboardingScreen() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: true }} initialRouteName={screens.LOGIN}>
            <Stack.Screen options={{
                headerLeft: () => null,
                headerStyle: {
                    backgroundColor: color.headerBack,
                },
                headerTintColor: color.white,
                headerTitleStyle: {
                    fontFamily: fontFamily.muliBold
                },
            }} name={screens.LOGIN} component={Login} />
        </Stack.Navigator>
    );
}

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={screens.SPLASH_SCREEN}>
                <Stack.Screen name={screens.SPLASH_SCREEN} component={SplashScreen} />
                <Stack.Screen name={screens.ONBOARDING_SCREENS} component={OnboardingScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;