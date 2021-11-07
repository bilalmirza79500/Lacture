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
} from 'react-native';

const App = () => {
  const [name, Setname] = useState('')

  return (
    <View style={styles.body}>
      <Text styles={styles.text}>
        Please write your Name :
      </Text>
      <TextInput style={styles.input}
        placeholder='e.g Bilal'
        onChangeText={(Value)=>Setname(Value)}
        secureTextEntry
        // keyboardType='numeric'
        // editable={false}
      />
      <Text styles={styles.text}>
        Your Name is : {name}
      </Text>
    </View>
  )
};
const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#f00fffff',
    alignItems: 'center',
    // justifyContent: 'center',
    // borderWidth: 10,
  },

  input: {
    width: 200,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 10,
    textAlign: 'center',

  },
  text: {
    color: '#000000',
    fontSize: 20,
    margin: 10,
    // textTransform: 'uppercase',
  },
})

export default App;
