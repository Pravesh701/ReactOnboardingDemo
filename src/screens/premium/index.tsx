import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//Custom Imports
import color from '../../utils/color';
import PremiumScreen from './premium';
import screens from '../../utils/screens';
import fontFamily from '../../utils/fonts';
import { NavigationDrawerStructure } from '../../utils/navigation/drawerNavigator';

interface Props {
    route: any;
    navigation: any;
}

const Stack = createStackNavigator();

const PremiumStack = (props: Props) => {
    return (
        <Stack.Navigator screenOptions={{
            headerLeft: () => <NavigationDrawerStructure navigationProps={props.navigation} />,
            headerStyle: {
                backgroundColor: color.startGradientBtn
            },
            headerTintColor: color.white,
            headerTitleStyle: {
                fontFamily: fontFamily.muliBold
            }
        }}>
            <Stack.Screen
                name={screens.PREMIUM_SCREEN}
                component={PremiumScreen}
                options={{
                    title: 'Premium',
                }}
            />
        </Stack.Navigator>
    );
}

export default PremiumStack;
