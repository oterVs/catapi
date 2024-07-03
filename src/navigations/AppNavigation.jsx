import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {HomeScreen} from '../screens/HomeScreen';
import {Breads} from '../screens/Breads'
//import WelcomeScreen from '../screens/WelcomeScreen';


const Stack = createNativeStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Breads" component={Breads} />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;