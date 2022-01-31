import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View
} from "react-native";

const Container = StyleSheet.create({
  textinputview: {
    borderBottomWidth: 2,
    borderBottomColor: "white",
    width: "60%",
    alignSelf: "center",
    paddingBottom:10
    
  },
  BackgroundView: {
      flex:1,
    backgroundColor: "#40475F",    
  },
  Iconview:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignSelf:"center",
  


  }
});
export { Container };

const FormButton = StyleSheet.create({
    SumbitButton:{
        
        backgroundColor:"white",
        width:"60%",
        alignSelf:"center",
        alignItems:"center",
        height:50,
        borderRadius:10,
        marginTop:30

    }
});
export {FormButton};
 
 const TextButton= StyleSheet.create({
     SubmitText:{
         marginTop:10,
        
     }
 });
 export {TextButton};

 const Logoimage = StyleSheet.create({
     headerimg:{
        resizeMode:"contain",
      marginTop:50,
        height:80,
         alignSelf:"center",    
     },
     iconimg:{
       resizeMode:"contain",
       height:50,
       width:100,
       marginTop:20
     }

 });
 export {Logoimage};

 const text = StyleSheet.create({
   headertext:{
     color:"white",
     alignSelf:"center",
     marginTop:30

   },
   text2:{
     color:"white",
     marginTop:15,
     alignSelf:"center"
   }
 })
 export {text};
