import { React } from 'react';
import { Text, TextInput, View } from 'react-native';

export default function MyApp() {
  function getFullName(fname, mname, lname) {
    return fname + " " + mname + " " + lname;
  }
  const pet = "dog";
  return (
      <Text>
        {"\n\n\n\n\n\n"}
        Hello! I am a student in CIS-340. {"\n"}
        My full name is {getFullName("Mariana", "", "Sanchez")} {"\n"}
        I have a {pet}!
      </Text>
  );
}

