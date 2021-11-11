import { react } from "@babel/types";
import React from "react";
import {
    Pressable,
    Text,
    StyleSheet,

} from 'react-native';


const BilalBUtton = (props) => {
    return (
        <Pressable
            onPress={props.onPressFunction}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            android_ripple={{ color: '#00f' }}
            style={({ pressed }) => [
                { backgroundColor: pressed ? 'white' : props.color },
                styles.button,
                {...props.style}
            ]}
        >
            <Text style={styles.text}>
                {props.title}
            </Text>
        </Pressable>

    )
}

const styles = StyleSheet.create({
    text: {
        color: '#000000',
        fontSize: 20,
        margin: 10,
        textAlign: 'center'
        // textTransform: 'uppercase',
    },
    button: {
        height: 50,
        width: 150,
        // backgroundColor: 'green',
        alignItems: 'center',
    },
})

export default BilalBUtton;