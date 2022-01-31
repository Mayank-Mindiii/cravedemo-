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

import Button from "../components/molecules/Button";
import LogoImage, { Icon } from "../components/molecules/Image";
import LoginForm from "../components/molecules/TextInput";
import { Container, text } from "../Style/StyleSheet";
const Login = ({navigation}) => {
  const passwordRef = useRef();
  function Update() {
    passwordRef.current.focus();
  }

  return (
    <ScrollView style={Container.BackgroundView}>
      <View>
        <LogoImage />
        <Text style={text.headertext}> Continue With </Text>
      </View>
      <View>
        <Icon />
      </View>
      <View>
        <Text style={text.text2}> Or Login with Email </Text>
      </View>
      <View>
        <LoginForm
          name={"Email"}
          returnKeyType="next"
          ref={passwordRef}
          onSubmit={Update}
          autoFocus={true}
        />
        <LoginForm name={"Password"} returnKeyType="done" ref={passwordRef} />
      </View>
      <View>
        <Button onpress={"Welcome"} navigation={navigation} name={"LOGIN"} />
      </View>
      <View style={Container.Iconview}>
        <Text style={text.text2}> New Here ? </Text>
        <TouchableOpacity onPress={()=>{navigation.navigate("SignUp")}}>
          <Text style={text.text2}> Create Account</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
export default Login;
