import React, { useRef, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity
} from "react-native";
 const Welcome =({navigation})=>{
     return(
         <View>
             <Text style={{fontSize:50}}>Wlecome user</Text>
             <TouchableOpacity onPress={()=>{navigation.navigate('Login')}}>
                 <Text style={{fontSize:25}}>Log out </Text>
             </TouchableOpacity>
         </View>
     )
 };
 export default Welcome;