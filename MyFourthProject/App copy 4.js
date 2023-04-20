
import React from 'react';
import { Text, View, FlatList } from 'react-native';


export default StatesApp = () => {
  return (
    <View style={{flex:1, paddingTop: 22}}>
      <FlatList
      data={[
        {key: "Alabama"},
        {key: "Alaska"},
        {key: "Arizona"},
        {key: "Arkansas"},
        {key: "California"},
        {key: "Colroado"},
        {key: "Conneticut"},
        {key: "Delaware"},
        {key: "Florida"},
        {key: "Georgia"},
        {key: "Hawaii"},
        {key: "Idaho"},
        {key: "Illinois"},
        {key: "Indiana"},
        {key: "Iowa"},
        {key: "Kansas"},
        {key: "Kentucky"},
        {key: "Louisiana"},
        {key: "Maine"},
        {key: "Maryland"},
        {key: "Massachusetts"},
        {key: "Michigan"},
        {key: "Minesota"},
        {key: "Mississippi"},
        {key: "Misouri"},
        {key: "Montana"},
        {key: "Nebraska"},
        {key: "Nevada"},
      ]}

      renderItem={({item}) => <Text style={{padding:10, fontSize: 20, height: 44}} > {item.key} </Text>}
      
      />

    </View>
  ); // end of rturn
    }
  

