import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//Custom Imports
import color from '../../utils/color';
import YourLibrary from './yourLibrary';
import screens from '../../utils/screens';
import fontFamily from '../../utils/fonts';
import { NavigationDrawerStructure } from '../../utils/navigation/drawerNavigator';

interface Props {
    route: any;
    navigation: any;
}

const Stack = createStackNavigator();

const YourLibraryStack = (props: Props) => {
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
                name={screens.YOUR_LIBRARY_SCREEN}
                component={YourLibrary}
                options={{
                    title: 'YourLibrary',
                }}
            />
        </Stack.Navigator>
    );
}

export default YourLibraryStack;