import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//Custom Imports
import Followed from '../followed';
import color from '../../utils/color';
import screens from '../../utils/screens';
import SearchScreen from './searchScreen';
import fontFamily from '../../utils/fonts';
import { NavigationDrawerStructure } from '../../utils/navigation/drawerNavigator';


interface Props {
    route: any;
    navigation: any;
}

const Stack = createStackNavigator();

const SearchStack = (props: Props) => {
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
                name={screens.SEARCH_SCREEN}
                component={SearchScreen}
                options={{
                    title: 'Search'
                }}
            />
            <Stack.Screen
                name="Followed"
                component={Followed}
                options={{ title: 'Groups' }}
            />
        </Stack.Navigator>
    );
}

export default SearchStack;