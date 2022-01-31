import React from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";



const Gallery = () => {

  return (
    <View>
      <TouchableOpacity>
        <Image
          style={{ height: 100, width: 100, alignSelf:"center" }}
          source={require("../assets/icon/profile.png")}
        />
      </TouchableOpacity>
    </View>
  );
};
export default Gallery;
