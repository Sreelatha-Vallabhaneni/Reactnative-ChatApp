import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from './screens/loginScreen';
import ChatScreen from './screens/chatScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: "Wel" }}
        />
        <Stack.Screen
          name="Chat"
          component={ChatScreen}
          options={{ title: "hello" }}
        />
        {/* <Stack.Screen name="Profile" component={} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

