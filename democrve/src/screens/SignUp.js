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
import Button from "../components/molecules/Button";
import LogoImage, { Icon } from "../components/molecules/Image";
import LoginForm from "../components/molecules/TextInput";
import { Container, text } from "../Style/StyleSheet";
const SignUp = ({ navigation })=>{
    return(
        <ScrollView style={Container.BackgroundView}>
             <View>
        <LogoImage />
        <Text style={text.headertext}> Create Account </Text>
      </View>
      <View>
          <LoginForm name={"Email"}/><LoginForm name={"Password"}/>
          <LoginForm name={"Confirm Password"}/>
      </View>
      <View>
          <Button name ={"SIGN UP"} onpress={"Login"} navigation={navigation}/>
      </View>
      <View style={Container.Iconview}>
        <Text style={text.text2}> Already onboard ? </Text>
        <TouchableOpacity onPress={()=>{navigation.navigate("Login")}}>
          <Text style={text.text2}> Login</Text>
        </TouchableOpacity>
       
      </View>
       <View>
            <TouchableOpacity><Text style={text.text2}>Forget your password?</Text></TouchableOpacity>
        </View>

        </ScrollView>
    )
};
export default SignUp;