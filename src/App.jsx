import {StyleSheet} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Beranda from './screens/beranda/index';
import Splash from './screens/splash/index';

const Stack = createNativeStackNavigator();

const ScreenProject = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Beranda" component={Beranda} options={{headerShown:false}}/>
    </Stack.Navigator>
  );
};

const MainApp = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Splash" component={Splash} options={{headerShown:false}}/>
      <Stack.Screen name="ScreenProject" component={ScreenProject} options={{headerShown:false}}/>
    </Stack.Navigator>
  );
};

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MainApp"
          component={MainApp}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const style = StyleSheet.create({});