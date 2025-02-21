import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import HomeIconO from "react-native-heroicons/outline/HomeIcon";
import PlusIconO from "react-native-heroicons/outline/PlusIcon";
import ShoppingCartIconO from "react-native-heroicons/outline/ShoppingCartIcon";
import ShoppingCartIconS from "react-native-heroicons/solid/ShoppingCartIcon";
import HomeIconS from "react-native-heroicons/solid/HomeIcon";
import MagnifyingGlassIconO from "react-native-heroicons/outline/MagnifyingGlassIcon";
import MagnifyingGlassIconS from "react-native-heroicons/solid/MagnifyingGlassIcon";
import UserIconO from "react-native-heroicons/outline/UserIcon";
import UserIconS from "react-native-heroicons/solid/UserIcon";
import tw from 'twrnc';

import Home from '../Pages/Home'
import { Text, View } from 'react-native';
import { Color } from '../GlobalStyles';
import Search from '../Pages/Search';
import Cart from '../Pages/Cart';
import Profile from '../Pages/Profile';
const BottomNavigator = () => {

    const Tab = createBottomTabNavigator()

    return (
        <Tab.Navigator  screenOptions={{
            tabBarStyle: {
                backgroundColor: 'rgba(255,255,255,1)',
                // position:'absolute',
                elevation: 5,
                borderTopWidth: 0,
                marginHorizontal: 0,
                padding: 0,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                height: 70

            },
            tabBarHideOnKeyboard:true
        }}>
            <Tab.Screen name='Home' component={Home}
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarLabelStyle: { color: 'white' },
                    tabBarIcon: ({ focused }) => focused ? (
                        <HomeIconS size={25} color={Color.background} />
                    ) : (
                        <HomeIconO size={25} color={Color.black} />
                    )
                }} />
            <Tab.Screen name='Search' component={Search}
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarLabelStyle: { color: 'white' },
                    tabBarIcon: ({ focused }) => focused ? (
                        <MagnifyingGlassIconS size={25} color={Color.background} />
                    ) : (
                        <MagnifyingGlassIconO size={25} color={Color.black} />
                    )
                }} />
            <Tab.Screen name='Add' component={Home}
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarLabelStyle: { color: 'white' },
                    tabBarIcon: ({ focused }) => focused ? (
                        <View style={[tw`p-4 rounded-full`, { backgroundColor: Color.background }]}>
                            <PlusIconO size={25} color={Color.white} />
                        </View>
                    ) : (
                        <View style={[tw`p-4 rounded-full`, { backgroundColor: Color.background }]}>
                            <PlusIconO size={25} color={Color.white} />
                        </View>
                    )
                }} />

            <Tab.Screen name='Cart' component={Cart}
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarLabelStyle: { color: 'white' },
                    tabBarIcon: ({ focused }) => focused ? (
                        <ShoppingCartIconS size={25} color={Color.background} />
                    ) : (
                        <ShoppingCartIconO size={25} color={Color.black} />
                    )
                }} />

            <Tab.Screen name='User' component={Profile}
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarLabelStyle: { color: 'white' },
                    tabBarIcon: ({ focused }) => focused ? (
                        <UserIconS size={25} color={Color.background} />
                    ) : (
                        <UserIconO size={25} color={Color.black} />
                    )
                }} />



        </Tab.Navigator>
    )
}

export default BottomNavigator
