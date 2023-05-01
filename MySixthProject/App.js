import { React } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default function App() {

  const csuLogo = {
    url:'https://media.istockphoto.com/vectors/ram-vector-id1003202434',
    width: 80,
    height: 80
  };

  return (
    <View style={styles.container}>
      

      <ImageBackground source={csuLogo}
      styles={styles.image}>
        <Text style={styles.text}>CSU Logo</Text>
  
    </ImageBackground>

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'row',
  },

  image: {
    flex:1,
    resizeMode: 'cover',
    justifyContent: 'center'
  },

  urlCSULogo: {
    width: 50,
    height: 50
  }
,

text: {
  color: ReactDOM,
  fontSize: 40,
  fontWeight: 'bold'
}
});
