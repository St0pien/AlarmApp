import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import AlarmList from './screens/AlarmList';
import { colors } from './config';
import font from './fonts/Poppins-Regular.ttf';
import font_bold from './fonts/Poppins-Bold.ttf';
import { useFonts } from 'expo-font';
import AddAlarm from './screens/AddAlarm';
import DB from './utils/DB';

const Stack = createNativeStackNavigator();

export default function App() {
  useEffect(() => {
    DB.init();
  }, [])

  const [loaded] = useFonts({
    font,
    'font-bold': font_bold
  });

  return loaded ? (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: colors.text,
          headerStyle: {
            backgroundColor: colors.primary
          },
          headerTitleStyle: {
            fontFamily: 'font-bold'
          }
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AlarmList"
          options={{ title: 'alarms list' }}
          component={AlarmList}
        />
        <Stack.Screen
          name="AddAlarm"
          component={AddAlarm}
          options={{ title: 'add alarm' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  ) : null;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
