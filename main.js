import Expo, { Constants } from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';

import AuthScreen from './src/screens/AuthScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';

import PatientScreen from './src/screens/PatientScreen';
import NutritionOrderScreen from './src/screens/NutritionOrderScreen';


class App extends React.Component {
  render() {
    const MainNavigator = TabNavigator({
      auth: { screen: AuthScreen },
      welcome: { screen: WelcomeScreen },
      main: { 
        screen: TabNavigator({
          patient: { screen: PatientScreen },
          nutritionOrder: { screen: NutritionOrderScreen }          

        })
      }     
    }, 
    { tabBarOptions: {
        style: {
          width: 300,
        },
      }
    });

    return (
      <View style={styles.container}>
        <MainNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#bbb',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

Expo.registerRootComponent(App);
