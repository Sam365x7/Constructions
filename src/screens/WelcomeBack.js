import React from 'react';
import { Text, StyleSheet,View,Image,Button,TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

const WelcomeBack = props => {
  return <View style={{ backgroundColor:'#4682b4',height:1000, paddingBottom:300}}>
    
  <View style = {styles.container}>
  <TouchableHighlight onPress={() => props.navigation.navigate('Men') }>
    <View>
      <Image source={require('../../assets/menu.png')}
        style={styles.menuIcon}
      />
     </View>
  </TouchableHighlight>
    
    
    <Text style={styles.text1}>
      Welcome Back, Mr. A
    </Text>
    </View>
    
    <Image style={styles.image1} source={require('../../assets/Doodle.jpeg')} />
    
    <View style={{height:200,width:350,paddingBottom:260,backgroundColor:'#778899'}}>
      
        <Image style={styles.image2} source={require('../../assets/Property.jpeg')} />
        
        <View stle={styles.container2}>
          <Text style={styles.text2}>Test Location</Text>
          <Text style={styles.text2}>South Tower</Text>
          <Text style={styles.text2}>Address</Text>
          <Text style={styles.text2}>Values</Text>
        </View>
    </View>
  
    <View style={styles.button1}>
     <View style={styles.buttonContainer}>
     <Button title="Outstanding as on date"/>
      </View>
    
    <View style={styles.buttonContainer}>
      <Button title="₹37,00,000"/>
      </View>
      <View style={styles.buttonContainer}>
      <Button title="Pay Now" color="red"/>
    </View>
  </View>

  <View style={{ flexDirection: 'row' }}>
  <View style={styles.button2}>
    <Button
      title="My Payments"
      onPress={() => {
        
      }}
   />
   </View>
   <View style={styles.button2}>
     <Button
       title="My Invoices"
       onPress={() => {}}
     />
   </View>
   <View style={styles.button2}>
     <Button
       title="Construction Updates"
       onPress={() => {}}
     />
   </View>
 </View>
      
</View>
};

const styles = StyleSheet.create({
  
  container:{
    marginTop:5,
    marginHorizontal:10,
  },
  container2:{
    backgroundColor:'#66cdaa',
    },
  text1:{
    justifyContent:'center',
    color:'#fff5ee',
    fontSize:20,
  },
  image1:{
    alignSelf:'flex-end',
    width: 50, height: 50, 
    borderRadius: 400/ 2,
    marginHorizontal:60,
    marginTop:-30,  
    marginVertical: 15
    
  },
  image2:{
    width:320,
    height:170,
    alignSelf: 'center',
  },
  text2:{
    marginLeft:30,
    color:'#fff5ee',
    marginLeft: 50,
    fontSize:15,
  }, 
   menuIcon:{
    height:50,
    width:50,
    zIndex:9,
    top:0,
    right:-300,
   },
   button1: {
    flex: 1,
    marginTop:-180,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:20,
    
  },
  buttonContainer: {
    flex: 1,
  },
  button2: {
    flex: 1,
    marginTop:-270,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:20,
  }
},

);

export default WelcomeBack;
