/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Alert} from 'react-native';
import { Button, ThemeProvider, Header, Icon } from 'react-native-elements';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';





const instructions = Platform.select({
  // ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  // android:
  //   'Double tap R on your keyboard to reload,\n' +
  //   'Shake or press menu button for dev menu',
});

const theme = {
  Button: {
    raised: true,
  },
};

type Props = {};
export default class App extends Component<Props> {

  addButton=()=>{
    Alert.alert("add contact")
  }

  render() {
    return (

      <View >
      <Header backgroundColor={'red'}

        leftComponent={{ icon: 'menu', stylecolor: '#fff' }}
        centerComponent={{ text: 'Re-Connect', style: { color: '#fff', fontSize:30 } }}
        rightComponent={{ icon: 'notifications', color: '#fff' }}
      />
      <Calendar
      markedDates={{
        '2019-02-16': {selected: true, marked: true, selectedColor: 'blue'},
        '2019-02-17': {marked: true},
        '2092-02-18': {marked: true, dotColor: 'red', activeOpacity: 0},
        '2019-02-19': {disabled: true, disableTouchEvent: true}
      }}
      />
      <Icon name = 'plus' style={styles.Icon} onPress={this.addButton}

        reverse
        name='ios-add'
        type='ionicon'
        color='red'



      />
      {/*<ThemeProvider theme={theme}>
      <Button buttonStyle={{backgroundColor: 'red'}} titleStyle={{fontSize:50}} title="Hey!" />
      <Button style={styles.button} title="Ho!" />

    </ThemeProvider>
        <Text style={styles.header}>Welcome to ReConnect!</Text>
      <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>*/}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  header: {
    textAlign: 'center',
    color:'#f4f7fc',
    backgroundColor: '#0f5ddb',
    marginTop: 0,
    fontSize:30,
  },
  button: {
    textAlign: 'center',
    color:'#f4f7fc',
    backgroundColor: '#000000',
  },
  Icon: {
    alignSelf: 'flex-end',
    position: 'absolute',
    bottom: 35,
    backgroundColor: 'blue',
  },
});
