/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
//React Navigation helps in routing and navigation of your react native apps
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//createStackNavigator - Provides a way for your app to transition between screens where each new screen is placed on top of a stack.
//createAppContainer - Containers are responsible for managing your app state and linking your top-level navigator to the app environment. On Android, the app container uses the Linking API to handle the back button.
import { Provider } from 'react-redux';
//The <Provider /> makes the Redux store available to any nested components that have been wrapped in the connect() function.
//If you want to creat a react redux app use the command:npx react-native init AwesomeProject --template redux [I NEED TO TRY IT AND SEE IF IT WORKS]
import { createStore, applyMiddleware } from 'redux';
//createStore - Creates a Redux store that holds the complete state tree of your app. There should only be a single store in your app.
//applyMiddleware -> middleware lets you dispatch async actions in addition to normal actions by extending Redux with custom functionality.
// /Middleware extends the store's abilities, and lets you write async logic that interacts with the store.
import thunk from 'redux-thunk';
//Thunks are the recommended middleware for basic Redux side effects logic, including complex synchronous logic that needs access to the store, and simple async logic like AJAX requests.
import Container from './app/components/Container';
import VideoDetail from "./app/components/VideoDetail";
import reducers from './app/reducers';
import GLOBALS from "./app/utils/global";
import ActionBarImage from "./app/components/ActionBarImage";

const store = createStore(reducers, applyMiddleware(thunk));

const Stack = createStackNavigator();

const NavStack = () => (
  <Stack.Navigator>
    <Stack.Screen name={GLOBALS.TITLE} component={Container} options={{
      headerLeft: () => (
        <ActionBarImage />
      ),
      headerStyle: {
        backgroundColor: GLOBALS.BG_COLOR.BRAND
      },
      headerTitleStyle: {
        fontWeight: "bold",
        color: "#FFFFFF",
        fontSize: 16
      }
    }} />
    <Stack.Screen name="_details" options={{
      title: "Video Details", headerStyle: {
        backgroundColor: GLOBALS.BG_COLOR.BRAND
      },
   
      headerTitleStyle: {
        fontWeight: "bold",
        color: "#FFFFFF",
        fontSize: 16
      }
    }} component={VideoDetail} />
  </Stack.Navigator>
);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <NavStack />
        </NavigationContainer>
      </Provider>
    );
  }
}
