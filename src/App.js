import React, { useState } from 'react';
import {
  Button,
  StyleSheet,
  Linking,
  Text,
  View,
  ScrollView,
  RefreshControl,
  FlatList,
  SectionList,
  TextInput,
  TouchableOpacity,
  Pressable,
  Alert,
  ToastAndroid,
  Modal,
  Image,
  ImageBackground,
  navigation,

} from 'react-native';
// import { CreateStackNavigator, CreateAppContainer, } from 'react-navigation' ;
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ScreenA from './ScreenA';
import ScreenB from './ScreenB';

const stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName='Screen_A'>
        <stack.Screen
          name="Screen_A"
          component={ScreenA}
        options={{
          header: ()=> null
        }}
        />
        <stack.Screen
          name="Screen_B"
          component={ScreenB}
        />
      </stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
