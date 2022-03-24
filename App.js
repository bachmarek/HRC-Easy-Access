import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Linking, ScrollView } from 'react-native';
import {Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function MenuScreen({ navigation }) {
  return (
    <View style={styles.container}>
    <Image source={require('./logo.png')}
    style={{width: 349, height: 111}} />
    <Text style={styles.titleText}>rehabilitation center</Text>
    <Text style={styles.titleText}>easy access app</Text>
    <View style={styles.space} />
    <View style={styles.space} />
    <View style={styles.space} />
    <TouchableOpacity onPress={() => {Linking.openURL('https://hope.org.pk/')}} style={styles.button}>
        <Text style={styles.buttonText}>website</Text>
    </TouchableOpacity>
    <View style={styles.space} />
    <TouchableOpacity onPress={() => {Linking.openURL('http://tstdrv2579020.shop.netsuite.com/s.nl/c.TSTDRV2579020/n.2/it.A/id.1311/.f')}} style={styles.button}>
        <Text style={styles.buttonText}>shop</Text>
    </TouchableOpacity>
    <View style={styles.space} />
    <TouchableOpacity onPress={() => navigation.navigate('About')} style={styles.button}>
        <Text style={styles.buttonText}>about</Text>
    </TouchableOpacity>
  </View>
  );
}

function AboutScreen({ navigation }) {
  return (
    <ScrollView>
        <View style={styles.containerTwo}>
            <View style={styles.space} />
            <Image source={require('./hack.png')}
            style={{paddingTop: 10, width: 300, height: 300}} />
            <View style={styles.space} />
            <Text>This app was created by the Platform Writers team </Text>
            <Text>as a part of Global Hackathon 4Good 2022 solution.</Text>
            <Text>The app serves as a quick and easy access point</Text>
            <Text>to Hope Rehab website and shop.</Text>
            <View style={styles.space} />
            <Image source={require('./team.png')}
            style={{paddingTop: 10, width: 300, height: 300}} />
            <View style={styles.space} />
        </View>
    </ScrollView>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: "sans-serif",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerTwo: {
    flex: 1,
    fontFamily: "sans-serif",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  button: {
    backgroundColor: '#FF9900',
    marginBottom: 10,
    width: 160,
    paddingTop: 5,
    paddingBottom: 6,
  },
  titleText: {
    fontSize: 26,
    color: "#315c9d",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
  buttonText: {
    fontSize: 18,
    color: "#45403C",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
  space: {
    width: 20,
    height: 20,
  },
});
