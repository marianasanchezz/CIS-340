
import React from 'react';
import { Text, Image, ScrollView } from 'react-native';

const dog = {
  uri: 'https://raw.githubusercontent.com/AbdunabiRamadan/CIS340-Images/main/images/mydog.jpg',
  width: 64,
  height: 54
}

export default MyScrollViewApp = () => (

    <ScrollView style = {{padding: 40}}>
      <Text style = {{fontSize: 80}}> Try to scroll down.</Text>
      <Image source = {require('./assets/download.jpg')} style = {{width: 80, height: 80}} />
      <Image source = {dog} />
      <Image source = {dog} />
      <Image source = {dog} />
      <Image source = {dog} />
      <Image source = {dog} />
      <Image source = {dog} />
      <Image source = {dog} />
      <Text style = {{fontSize: 80}}> Try to scroll down again.</Text>
      <Image source = {dog} />
      <Image source = {dog} />
      <Image source = {dog} />
      <Image source = {dog} />
      <Image source = {dog} />
      <Image source = {dog} />
      <Image source = {dog} />
      <Image source = {dog} />
      <Text style = {{fontSize: 80}}> Try to scroll down again.</Text>
      <Image source = {dog} />
      <Image source = {dog} />
      <Image source = {dog} />
      <Image source = {dog} />
      <Image source = {dog} />
      <Image source = {dog} />
      <Image source = {dog} />
      <Image source = {dog} />
      <Text style = {{fontSize: 80}}> Try to scroll down again.</Text>
      <Image source = {dog} />
      <Image source = {dog} />
      <Image source = {dog} />
      <Image source = {dog} />
      <Image source = {dog} />
      <Image source = {dog} />
      <Image source = {dog} />
      <Image source = {dog} />
      <Text style = {{fontSize: 80}}> Try to scroll down again.</Text>
      <Image source = {dog} />
      <Image source = {dog} />
      <Image source = {dog} />
      <Image source = {dog} />
      <Image source = {dog} />
      <Image source = {dog} />
      <Image source = {dog} />
      <Image source = {dog} />
      <Text style = {{fontSize: 80}}> React Native Components!</Text>
      <Image source = {dog} />
      <Image source = {dog} />
      <Image source = {dog} />
      <Image source = {dog} />
      <Image source = {dog} />
      <Image source = {dog} />
      <Image source = {dog} />
      <Image source = {dog} />
    </ScrollView>
  );

