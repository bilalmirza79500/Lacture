import React, { useState } from 'react';
import {
  Button,
  StyleSheet,
  Linking,
  Text,
  View,
  ScrollView,
  RefreshControl,
} from 'react-native';

const App = () => {
  const [Items, setItems] = useState([
    { key: 1, Item: 'Item 1' },
    { key: 2, Item: 'Item 2' },
    { key: 3, Item: 'Item 3' },
    { key: 4, Item: 'Item 4' },
    { key: 5, Item: 'Item 5' },
    { key: 6, Item: 'Item 6' },
    { key: 7, Item: 'Item 7' },
    { key: 8, Item: 'Item 8' },
    { key: 44, Item: 'Item 9' },
    { key: 68, Item: 'Item 27' },
    { key: 0, Item: 'Item 78' },
  ]);
  const [Refreshing, setRefreshing] = useState(false)

  const onReresh =  () =>{
    setRefreshing(true);
    setItems([...Items, {key:69, Item: 'item 69',}])
    setRefreshing(false);
  }
  return (
    <ScrollView
      style={styles.body}
      refreshControl={
        <RefreshControl
          refreshing={Refreshing}
          onRefresh={onReresh}
          colors={['blue']}
        />
      }
    >
      {
        Items.map((object) => {
          return (
            <View style={styles.item} key={object.key}>
              <Text style={styles.text}>{object.Item}</Text>
            </View>
          )
        })
      }
    </ScrollView>
  )
};
const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#f00fffff',
    // alignItems: 'stretch',
    // justifyContent: 'center',
    // borderWidth: 10,
  },
  item: {
    margin: 15,
    backgroundColor: "#4ae",
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: '#000000',
    fontSize: 20,
    fontStyle: 'italic',
    margin: 10,
    // textTransform: 'uppercase',
  },
})

export default App;
