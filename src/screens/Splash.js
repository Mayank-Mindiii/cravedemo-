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
import { Logoimage } from "../Style/StyleSheet";
const Splash = ({ navigation }) => {
  setTimeout(() => {
    navigation.replace("Login");
  }, 1000);
  let splashView = (
    <SafeAreaView>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#40475F",
          height: "100%"
        }}
      >
        <Image
          style={Logoimage.headerimg}
          source={require("../assets/image/header_img.png")}
        />
      </View>
    </SafeAreaView>
  );

  return splashView;
};
export default Splash;
