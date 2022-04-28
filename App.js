import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { Alert } from "react-native";
import { registerRootComponent } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen, HomeScreen, RegistrationScreen, ChatScreen, HousesScreen } from './src/screens';
import {decode, encode} from 'base-64';
import { db, auth } from './src/firebase/config.js';
import { collection, doc, getDoc } from 'firebase/firestore';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
if (!global.btoa) {  global.btoa = encode }
if (!global.atob) { global.atob = decode }

const Stack = createStackNavigator();

// View -> UIView
export default function App() {
  const [loading, setLoading] = useState(/*true*/false)
  const [user, setUser] = useState(null)

  if (loading) {	
    console.log("loading")
    return (	
      <></>	
    )	
  }
  console.log("not loading")

  // Persist login puts logged in user data into 'user' variable above using setUser
  useEffect(() => {
    const usersRef = collection(db, 'users');
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const docRef = doc(db, 'users', user.uid)
        getDoc(docRef)
          .then((document) => {
            const userData = document.data()
            console.log("user data:", userData)
            setLoading(false)
            setUser(userData)
          })
          .catch((error) => {
            setLoading(false)
          });
      } else {
        console.log("else in App.js useEffect")
        setLoading(false)
        setUser(null)
      }
    });
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        { user ? (
          <>
            <Stack.Screen name="Home" options={{
                title: "Home Screen",
                headerRight: () => (
                  <TouchableOpacity style={{marginRight: 20}} 
                  onPress={() => {
                    Alert.alert(
                      "Log Out?",
                      "Are you sure you want to log out?",
                      [
                        { text: "Cancel" },
                        { 
                          text: "Yes",
                          onPress: () => {
                            alert("You have been logged out.");
                            signOut(auth);
                          }  
                        }
                      ]
                    );
                    }}>
                    <AntDesign name="logout" size={24} color="black"/>
                  </TouchableOpacity>
            )}}>
              {props => <HomeScreen {...props} extraData={user} />}
            </Stack.Screen>

            <Stack.Screen name="Chat" options={{
                title: "Chat", // Find how to display current house in the title
                headerRight: () => (
                  <TouchableOpacity style={{marginRight: 20}} 
                  onPress={() => {
                    Alert.alert(
                      "Log Out?",
                      "Are you sure you want to log out?",
                      [
                        { text: "Cancel" },
                        { 
                          text: "Yes",
                          onPress: () => {
                            alert("You have been logged out.");
                            signOut(auth);
                          }  
                        }
                      ]
                    );
                    }}>
                    <AntDesign name="logout" size={24} color="black"/>
                  </TouchableOpacity>
            )}}>
              {props => <ChatScreen {...props} extraData={user} />}
            </Stack.Screen>

            <Stack.Screen name="Houses" options={{
                title: "Houses", // Find how to display current house in the title
                headerRight: () => (
                  <TouchableOpacity style={{marginRight: 20}} 
                  onPress={() => {
                    Alert.alert(
                      "Log Out?",
                      "Are you sure you want to log out?",
                      [
                        { text: "Cancel" },
                        { 
                          text: "Yes",
                          onPress: () => {
                            alert("You have been logged out.");
                            signOut(auth);
                          }  
                        }
                      ]
                    );
                    }}>
                    <AntDesign name="logout" size={24} color="black"/>
                  </TouchableOpacity>
            )}}>
              {props => <HousesScreen {...props} extraData={user} />}
            </Stack.Screen>
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Registration" component={RegistrationScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

registerRootComponent(App);