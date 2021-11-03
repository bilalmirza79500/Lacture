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
} from 'react-native';

const App = () => {
  const [Items, setItems] = useState([
    { name: 'Item 1' },
    { name: 'Item 2' },
    { name: 'Item 3' },
    { name: 'Item 4' },
    { name: 'Item 5' },
    { name: 'Item 6' },
    { name: 'Item 7' },
    { name: 'Item 8' },
    { name: 'Item 9' },
    { name: 'Item 27' },
    { name: 'Item 78' },
  ]);
  const DATA = [
    {
      tital: 'Tital 1',
      data: ['Item 1-1', 'Item 1-2', 'Item 1-3'],
    },
    {
      tital: 'Tital 2',
      data: ['Item 2-1', 'Item 2-2', 'Item 2-3'],
    },
    {
      tital: 'Tital 3',
      data: ['Item 3-1'],
    },
    {
      tital: 'Tital 4',
      data: ['Item 4-1', 'Item 4-2'],
    },
  ]

  const [Refreshing, setRefreshing] = useState(false)

  const onReresh = () => {
    setRefreshing(true);
    setItems([...Items, { name: 'item 69', }]);
    setRefreshing(false);
  }
  return (
    <SectionList
      keyExtractor={(item, index) => index.toString()}
      sections={DATA}
      renderItem={({ item }) => (
          <Text style={styles.text}>{item}</Text>
      )}
      renderSectionHeader={({section }) => (
        <View style={styles.item}>
          <Text style={styles.text}>{section.tital}</Text>
        </View>
      )}
    // />
    // <FlatList
    //   horizontal
    //   keyExtractor={(item, index) => index.toString()}
    //   data={Items}
    //   renderItem={({ item }) => (
    //     <View style={styles.item}>
    //       <Text style={styles.text}>{item.name}</Text>
    //     </View>
    //   )}
    //   refreshControl={
    //     <RefreshControl
    //       refreshing={Refreshing}
    //       onRefresh={onReresh}
    //       colors={['blue']}
    //     />
    //   }
    />
    // <ScrollView
    //   style={styles.body}
    //   refreshControl={
    //     <RefreshControl
    //       refreshing={Refreshing}
    //       onRefresh={onReresh}
    //       colors={['blue']}
    //     />
    //   }
    // >
    //   {
    //     Items.map((object) => {
    //       return (
    //         
    //       )
    //     })
    //   }
    // </ScrollView>
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
    margin: 10,
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
