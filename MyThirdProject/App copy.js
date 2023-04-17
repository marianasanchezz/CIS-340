import { React } from 'react';
import { Text,TextInput, View } from 'react-native';

function Student(props) {
  return (
    <View>
      <Text>Hello! My name is {props.name} and I am a student in CIS-340.</Text>
    </View>
  );
}

export default function MultiComp() {
  return(
    <View style = {{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Text>
        Welcome to CIS-340!
      </Text>
      <Student name = "Mariana"/>
      <Student name = "Brandon"/>
      <Student name = "Mochi"/>
      <Student name = "Kimberly"/>
    </View>
  );
}