import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { Text, View } from 'react-native'
import BottomNavigator from './BottomNavigator'
import Slider from '../Pages/Slider'
import Replies from '../Pages/Replies'
import ViewProduct from '../Pages/ViewProduct'
import Sellers from '../Pages/Sellers'
import Splash from '../Splash'

const StackNavigator =()=>  {

    const Stack=createNativeStackNavigator()
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
            headerShown: false,
            statusBarStyle: 'light',
            animationTypeForReplace: 'push',
          }} initialRouteName={'Splash'}>
            <Stack.Screen name='Splash' component={Splash} options={{headerShown:false}} />
            <Stack.Screen name='Slider' component={Slider} options={{headerShown:false}} />
            <Stack.Screen name='Replies' component={Replies} options={{headerShown:false}} />
            <Stack.Screen name='ViewProduct' component={ViewProduct} options={{headerShown:false}} />
            <Stack.Screen name='Sellers' component={Sellers} options={{headerShown:false}} />
            <Stack.Screen name='Main' component={BottomNavigator} options={{headerShown:false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
}

export default StackNavigator
