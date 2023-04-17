import { React } from 'react';
import { Text, TextInput, View } from 'react-native';

export default function MyApp() {
  return (
      <View>
      <Text>
        {"\n\n\n\n\n\n"}
        Hello! I am a student in CIS-340. {"\n"}
      </Text>
      <TextInput 
      style = {{
        height: 40,
        borderColor: "blue",
        borderWidth: 1 
      }}
      defaultValue = "Enter your input."/>
        
      </View>
  );
}

