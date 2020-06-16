import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Main from './pages/main';
import Article from './pages/article';

import {ArticleProvider} from './contexts/articleContext';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          options={{
            title: 'Home',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
          }}>
          {(props) => (
            <ArticleProvider value={props}>
              <Main />
            </ArticleProvider>
          )}
        </Stack.Screen>
        <Stack.Screen
          name="Article"
          options={{
            title: 'Article',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
          }}>
          {(props) => (
            <ArticleProvider value={props}>
              <Article />
            </ArticleProvider>
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
