import React from 'react';
import { Text, StyleSheet,View, Button, TouchableOpacity } from 'react-native';

const Constructions = props => {
  return <View>
    <Text style={styles.text}>Constructions</Text>
    <Button 
      onPress={() => props.navigation.navigate('Welcome')}
    title="Login directly for now">
    </Button>
    </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
    alignItems: 'center'
  }
});

export default Constructions;
