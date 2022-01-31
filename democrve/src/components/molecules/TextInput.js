import React, { forwardRef } from "react";
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
import { Container } from "../../Style/StyleSheet";
const LoginForm = (props, ref) => {
  return (
    <View style={Container.textinputview}>
      <TextInput
        style={{ color: "white" ,marginTop:10,}}
        ref={ref}
        placeholder={props.name}
        placeholderTextColor={"white"}
        returnKeyType={props.returnKeyType}
        autoFocus={props.autoFocus}
        onSubmitEditing={props.onSubmit}
      />
    </View>
  );
};
export default forwardRef(LoginForm);
