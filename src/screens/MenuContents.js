import React from 'react';
import {StyleSheet,TouchableOpacity,Image,Text,View} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

const MenuContents =(props) =>{
    return <View style = {styles.viewStyle}>

    <View style = {styles.container}>
    <Image style={styles.image1} source={require('../../assets/Doodle.jpeg')} />
    
    <Text style={styles.text1}>
       Mr. A
    </Text>
    <TouchableOpacity onPress={()=>props.navigation.navigate('Profile')}
    style ={styles.touch}>
         
         <Text>ViewProfile</Text>

         </TouchableOpacity>
    </View>
    
   
         <Icon.Button name="home" >
    <Text style={{  fontSize: 28 }}>
     Home
    </Text>
  </Icon.Button>

  <Icon.Button name="home" >
    <Text style={{  fontSize: 28 }}>
     Home2
    </Text>
  </Icon.Button>

  <Icon.Button name="back-in-time" >
    <Text style={{  fontSize: 28 }}>
     Latest Update
    </Text>
  </Icon.Button>
  <Icon.Button name="document" >
    <Text style={{  fontSize: 28 }}>
     Terms & Condition
    </Text>
  </Icon.Button>
  <Icon.Button name="documents" >
    <Text style={{  fontSize: 28 }}>
     FAQs
    </Text>
  </Icon.Button>
  <Icon.Button name="arrow-long-left" >
    <Text style={{  fontSize: 28 }}>
     Feedback
    </Text>
  </Icon.Button>
  <Icon.Button name="youtube" >
    <Text style={{  fontSize: 28 }}>
     Tutorials
    </Text>
  </Icon.Button>
  <Icon.Button name="attachment">
    <Text style={{  fontSize: 28}}>
     Flash Screen
    </Text>
  </Icon.Button>
  <Icon.Button name="tools" >
    <Text style={{  fontSize: 28 }}>
     Overview
    </Text>
  </Icon.Button>

    </View>
}
const styles=StyleSheet.create({
    container:{
        marginTop:20,
        marginHorizontal:20,
        marginVertical: 20
    },
    touch:{
        justifyContent:'center',
    },
    text1:{
        marginHorizontal:100,
        marginTop:-30, 
        
        fontSize:20,
      },
      image1:{
        alignItems:'center',
    
        width: 50, height: 50, 
        borderRadius: 400/ 2,      
      },
    viewStyle:{
        backgroundColor:"#3B5998",
    }
}
)

export default MenuContents;