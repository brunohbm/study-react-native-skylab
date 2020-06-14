import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Main from './pages/main';

const ThemeContext = React.createContext('navigator');

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          options={{
            title: 'Overview',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
          }}>
          {(props) => (
            <ThemeContext.Provider stackScreen={props}>
              <Main />
            </ThemeContext.Provider>
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
