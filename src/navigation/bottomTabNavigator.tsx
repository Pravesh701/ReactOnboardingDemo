import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Custom Imports
import colors from '../utils/color';
import images from '../utils/images';
import screens from '../utils/screens';
import HomeStack from '../screens/home';
import SearchStack from '../screens/search';
import PremiumStack from '../screens/premium';
import YourLibraryStack from '../screens/yourLibrary';

interface Props {
    route: any;
    navigation: any;
}

const Tab = createBottomTabNavigator();

const MainBottomTabStack = (props: Props) => {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconNameSource;
                if (route.name === screens.HOME_STACK) {
                    iconNameSource = focused ? images.inactiveHomeTab : images.inactiveHomeTab;
                } else if (route.name === screens.SEARCH_STACK) {
                    iconNameSource = focused ? images.inactiveProfile : images.inactiveProfile;
                } else if (route.name === screens.YOUR_LIBRARY_STACK) {
                    iconNameSource = focused ? images.inactiveLibrary : images.inactiveLibrary;
                } else if (route.name === screens.PREMIUM_STACK) {
                    iconNameSource = focused ? images.inactivePremium : images.inactivePremium;
                }
                return <Image style={{ tintColor: focused ? colors.startGradientBtn : colors.cloudBlue }} source={iconNameSource} />;
            },
        })}
            tabBarOptions={{
                activeTintColor: colors.startGradientBtn,
                inactiveTintColor: colors.black,
            }}
        >
            <Tab.Screen options={{ title: 'Home' }} name={screens.HOME_STACK} component={HomeStack} />
            <Tab.Screen options={{ title: 'Search' }} name={screens.SEARCH_STACK} component={SearchStack} />
            <Tab.Screen options={{ title: 'Your Library' }} name={screens.YOUR_LIBRARY_STACK} component={YourLibraryStack} />
            <Tab.Screen options={{ title: 'Premium' }} name={screens.PREMIUM_STACK} component={PremiumStack} />
        </Tab.Navigator>
    );
}

export default MainBottomTabStack;
