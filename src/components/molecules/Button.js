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
import { FormButton } from "../../Style/StyleSheet";
import { TextButton } from "../../Style/StyleSheet";
const Button = props => {
  return (
    <View>
      <TouchableOpacity
        onPress={()=>{props.navigation.navigate(props.onpress)}}
        style={FormButton.SumbitButton}
      >
        <Text style={TextButton.SubmitText}>
          {props.name}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default Button;
