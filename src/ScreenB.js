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
import { useNavigation } from '@react-navigation/core';



export default function ScreenB({}) {
    const Navigation = useNavigation();
    // const onPressHandler = () => {
        // navigation.navigate('Screen_A');
        // navigation.goBack();
        
    // }

    return (
        <View style={style.body}>
            <Text style={style.text}>
                Screen B
            </Text>
            <Pressable
                onPress={()=>{Navigation.navigate('Screen_A')}}
                style={({ pressed }) => ({ backgroundColor: pressed ? 'red' : '#0f0' })}
            >
                <Text style={style.text}>
                    Back To Screen A
                </Text>
            </Pressable>
        </View>
    )
}

const style = StyleSheet.create({
    body: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 40,
      fontWeight: 'bold',
      margin: 10,
    },
  })