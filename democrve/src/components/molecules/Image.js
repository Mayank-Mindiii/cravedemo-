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
  View,
  Image
} from "react-native";
import { Container } from "../../Style/StyleSheet";
import { Logoimage } from "../../Style/StyleSheet";
const LogoImage = () => {
  return (
    <View>
      <Image
        style={Logoimage.headerimg}
        source={require("../../assets/image/header_img.png")}
      />
    </View>
  );
};
export default LogoImage;

function Icon() {
  return (
    <View style={Container.Iconview}>
      <TouchableOpacity>
        <Image
          style={Logoimage.iconimg}
          source={require("../../assets/icon/fb.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          style={Logoimage.iconimg}
          source={require("../../assets/icon/google.png")}
        />
      </TouchableOpacity>

      <TouchableOpacity>
        <Image
          style={Logoimage.iconimg}
          source={require("../../assets/icon/twitter.png")}
        />
      </TouchableOpacity>
    </View>
  );
}
export { Icon };
