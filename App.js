import React, { useState } from 'react';
import {
  Button,
  StyleSheet,
  Linking,
  Text,
  View,
  ScrollView,
} from 'react-native';

const App = () => {
  // 6th lacture
  // const [name, setNmane] = useState('Bilal')
  // const [seccion, setSeccion] = useState({ number: 6, title: 'old state' })
  // const [current, setCurrent] = useState(true)
  // 7th
  const [name, setNmane] = useState('Style Test')



  const onClickHandler = () => {
    // 7 lac
    setNmane('Styke Test is Done! ')
    // 6 lac
    // setNmane('Programing with Bilal ')
    // setSeccion({ number: 7, title: 'new state' })
    // setCurrent(false)

  }

  return (
    // <ScrollView>
    <View style={styles.body1}>
      {/* <View> */}
      {/* <Text style={styles.text}>
            {name}
          </Text>
          <Text style={styles.text}>
            This is seccion {seccion.number} and about {seccion.title}
          </Text>
          <Text style={styles.text}>
            {current ? 'current seccion' : 'next seccion'}
          </Text>
          {/* <Button title = 'youtube channel' onPress={()=>{Linking.openURL('https://www.youtube.com/channel/UCSZgowEvaE3KBW3vmc643ow')}}></Button> */}
      {/* <Button title='Update State' onPress={onClickHandler}></Button> */}
      {/* <Text>end the 6 lacture</Text> */}
      {/* </View> */}
        <View style={styles.View1}>
          <Text style={styles.text}>1</Text>
        </View>
        <View style={styles.View2}>
          <Text style={styles.text}>2</Text>
        </View>
        <View style={styles.View3}>
          <Text style={styles.text}>3</Text>
        </View>
      
    </View>

    // </ScrollView>
  );
};
const styles = StyleSheet.create({
  body1: {
    flex: 1,

    flexDirection: 'column',    backgroundColor: '#f00fffff',
    alignItems: 'stretch',
    justifyContent: 'center',
    // borderWidth: 10,

  },
  // body: {
  //   flex: 1,
  //   backgroundColor: 'white',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   borderWidth: 10,
  //   flexDirection: 'row'
  // },
  text: {
    color: '#000000',
    fontSize: 20,
    fontStyle: 'italic',
    margin: 10,
    textTransform: 'uppercase',
  },
  View1: {
    flex:1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  View2: {
    flex:1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  View3: {
    flex:1,
    backgroundColor: '#00ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default App;
