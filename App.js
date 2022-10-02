import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, View, Image } from 'react-native';

const art = require('./Images/art.png');
const mile = require('./Images/mile.png');
const pier = require('./Images/pier.png');
const water = require('./Images/water.png');
const willis = require('./Images/willis.png');

function ArtScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={art} style={styles.picture}/>
      <StatusBar style="auto" />
    </View>
  );
}

function MileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={mile} style={styles.picture}/>
      <StatusBar style="auto" />
    </View>
  );
}

function PierScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={pier} style={styles.picture}/>
      <StatusBar style="auto" />
    </View>
  );
}

function WaterScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={water} style={styles.picture}/>
      <StatusBar style="auto" />
    </View>
  );
}

function WillisScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={willis} style={styles.picture}/>
      <StatusBar style="auto" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Drawer.Navigator screenOptions={{
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
          <Drawer.Screen name="Art Institute of Chicago" component={ArtScreen} />
          <Drawer.Screen name="Magnificent Mile" component={MileScreen} />
          <Drawer.Screen name="Navy Pier" component={PierScreen} />
          <Drawer.Screen name="Water Tower" component={WaterScreen} />
          <Drawer.Screen name="Willis Tower" component={WillisScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  picture: {
    width: 320,
    height: 480,
  },
});
