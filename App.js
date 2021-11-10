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
} from 'react-native';

const App = () => {
  const [name, Setname] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [showWarning, SetshowWarning] = useState(false);
  const onPressHandler = () => {
    if (name.length > 3) {
      setSubmitted(!submitted);
    } else {
      SetshowWarning(true);
    }
  }

  return (
    <View style={styles.body}>
      <Modal
        visible={showWarning}
        transparent
        onRequestClose={() =>
          SetshowWarning(false)
        }
        animationType='slide'
        hardwareAccelerated
      >
        <View style={styles.centred_view}>
          <View style={styles.warnig_modle}>
            <View style={styles.warning_tital}>
              <Text style={styles.text}>WARING!</Text>
            </View>
            <View style={styles.warning_body}>
              <Text style={styles.text}>The name must be loger the 2 chereters</Text>
            </View>
            <Pressable
            onPress={()=>SetshowWarning(false)}
            style={styles.warning_button}
            android_ripple={{color:'#fff'}}
            >
              <Text style={styles.text}>ok</Text>
            </Pressable>
          </View>
        </View>

      </Modal>
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
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        android_ripple={{ color: '#00f' }}
        style={({ pressed }) => [
          { backgroundColor: pressed ? 'white' : 'green' },
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
    textAlign:'center'
    // textTransform: 'uppercase',
  },
  button: {
    height: 50,
    width: 150,
    // backgroundColor: 'green',
    alignItems: 'center',
  },
  warning_tital: {
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    borderTopLeftRadius: 19,
    borderTopRightRadius: 19
  },
  centred_view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00000099'
  },
  warnig_modle: {
    height: 300,
    width: 300,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#000009',
    borderRadius: 20,
  },
  warning_body:{
    height:200,
    alignItems:'center',
    justifyContent:'center',
  },
  warning_button:{
    backgroundColor:'#00ffff',
    borderBottomLeftRadius:19,
    borderBottomRightRadius:19,
  }
})

export default App;
