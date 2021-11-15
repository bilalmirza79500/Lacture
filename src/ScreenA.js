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



export default function ScreenA({ navigation }) {

    
    const onPressHandler = () => {
        navigation.replace("Screen_B");
    }


    return (
        <View style={style.body}>
            <Text style={style.text}>
                Screen A
            </Text>
            <Pressable
                onPress={onPressHandler}
                style={({ pressed }) => ({ backgroundColor: pressed ? 'red' : '#0f0' })}
            >
                <Text style={style.text}>
                    Go To Screen B
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