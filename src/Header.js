import { react } from "@babel/types";
import React from "react";
import {
    StyleSheet,
    Text,
    View,

} from 'react-native';


const Herder = (props) => {
    return (
        <View style={styles.view}>
            <Text style={styles.text}>React Native Project</Text>
        </View>

    )
}

const styles = StyleSheet.create({
    view: {
        width:'100%',
        height: 50,
        backgroundColor: '#00f',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize:20,
        fontWeight:'bold',
        color:'#ffff'
    }
})

export default Herder;