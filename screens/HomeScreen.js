import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

const HomeScreen = ({navigation}) =>{
  return(
      <View style={styles.container}>
          <Text>Home Screen</Text>
          <Button
            title="Click here"
            onPress={() => navigation.navigate('Button Clicked')}
          />
      </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
      flex:1,
      alignItems: 'center',
      justifyContent: 'center'
  },
});




