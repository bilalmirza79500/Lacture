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
} from 'react-native';

const App = () => {
  const [name, Setname] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const onPressHandler = () => {
    setSubmitted(!submitted);
  }

  return (
    <View style={styles.body}>
      <Text styles={styles.text}>
        Please write your Name :
      </Text>
      <TextInput style={styles.input}
        placeholder='e.g Bilal'
        onChangeText={(Value) => Setname(Value)}
      // secureTextEntry
      // keyboardType='numeric'
      // editable={false}
      />
      {/* <Button
        title={submitted ? 'Clrae' : 'submit'}
        onPress={onPressHandler}
        disabled={submitted}
      /> */}
      {/* <TouchableOpacity
        style={styles.button}
        onPress={onPressHandler}
        activeOpacity={0.1}
      >
        <Text style={styles.text}>
          {submitted ? 'Clear' : 'Submit'}
        </Text>
      </TouchableOpacity> */}
      <Pressable
        onPress={onPressHandler}
        hitSlop={{top:150,bottom:150,left:150,right:150}}
        android_ripple={{color:'#00f'}}
        style={({pressed})=>[
          {backgroundColor: pressed? 'white':'green'},
          styles.button]}
      >
        <Text style={styles.text}>
          {submitted ? 'Clear' : 'Submit'}
        </Text>
      </Pressable>
      {submitted ?
        <Text styles={styles.text}>
          Your are registered as : {name}
        </Text>
        :
        null
      }

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
    marginBottom: 10,
    // marginTop:10

  },
  text: {
    color: '#000000',
    fontSize: 20,
    margin: 10,
    // textTransform: 'uppercase',
  },
  button: {
    height: 50,
    width: 150,
    // backgroundColor: 'green',
    alignItems: 'center',
  },
})

export default App;
