import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Router,Scene } from 'react-native-router-flux';
import Home from './components/home.js';
import Chat from './components/chat.js';
import {Provider} from "react-redux";
import allReducers from "./components/reducers/index.js";
const store = allReducers;
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
      <Router>

          <Scene key="root">
              <Scene key='home' component={Home}  navTransparent={true}/>
              <Scene key='chat' component={Chat} title='Chat'/>
          </Scene>

      </Router>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
