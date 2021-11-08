import React from 'react';
// @ts-ignore
import seal from './assets/Wordmark.png';
// @ts-ignore
import roofImg from './assets/Roof.jpeg';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomePage from "./pages/HomePage";
import {NavigationContainer} from "@react-navigation/native";
import {Foundation} from "@expo/vector-icons";
import {colors} from "./styles/GlobalTheme";

const Tab = createBottomTabNavigator()

export default () => {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={({route}) => ({
                tabBarActiveTintColor: colors.regisRed,
                tabBarInactiveTintColor: colors.grey,
                headerShown: false,
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    if(route.name == 'Home') iconName = 'home';
                    // @ts-ignore
                    return <Foundation name={iconName} size={size} color={color}/>
                },
                tabBarStyle: {
                    backgroundColor: colors.darkGrey,
                    shadowOpacity: 0,
                    borderTopWidth: 0,
                    elevation: 0
                }
            })}>
                <Tab.Screen name = "Home" component = {HomePage}/>
            </Tab.Navigator>
        </NavigationContainer>

    );
}
