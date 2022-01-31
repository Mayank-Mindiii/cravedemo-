import React from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  Button
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const AuthContext = React.createContext();

function HomeScreen({navigation}) {
  const { signOut } = React.useContext(AuthContext);
  return (
    <View>
      <Text style={{ fontSize: 50, margin: 20 }}>Welcome User </Text>

      <TouchableOpacity onPress={()=>{ navigation.navigate('News')}} >
        <Text style={{ fontSize: 20, margin: 20 , color:"blue"}}>Welcome News </Text>
      </TouchableOpacity>
      <Button title="Sign out" onPress={signOut} />
    </View>
  );
}

function News() {

  return (
    <View>
      <Text style={{ fontSize: 50, margin: 20 }}>Welcome news </Text>
    </View>
  );
}

  
function SignInScreen({navigation}) {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const { signIn } = React.useContext(AuthContext);

  return (
    <View>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Sign in" onPress={() => signIn({ username, password })} />
     
    </View>
  );
}

const Stack = createNativeStackNavigator();
const Nav = () => {
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case "RESTORE_TOKEN":
          return {
            ...prevState,
            userToken: action.token,
            isSignout: true
          };
        case "SIGN_IN":
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token
          };
        case "SIGN_OUT":
          return {
            ...prevState,
            isSignout: true,
            userToken: null
          };
      }
    },
    {
      isSignout: true,
      userToken: null
    }
  );
  React.useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken;
      try {
        userToken = await SecureStore.getItemAsync('userToken');
      } catch (e) {}
      dispatch({ type: "RESTORE_TOKEN", token: userToken });
    };

    bootstrapAsync();
  }, []);
  const authContext = React.useMemo(
    () => ({
      signIn: async data => {
        dispatch({ type: "SIGN_IN", token: "dummy-auth-token" });
      },
      signOut: () => dispatch({ type: "SIGN_OUT" }),

      signUp: async data => {
        dispatch({ type: "SIGN_IN", token: "dummy-auth-token" });
      }
    }),
    []
  );

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <Stack.Navigator >
          {state.userToken == null
            ?(
                <>
            <Stack.Screen
                name="SignIn"
                component={SignInScreen}
                options={{
                  title: "Sign in",

                }}
              />
             </> )  : (
                  <>
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="News" component={News} />
              </>
              ) }
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
};
export default Nav;
