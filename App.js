import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react'
import { registerRootComponent } from 'expo';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { LoginScreen, HomeScreen, RegistrationScreen, ChatScreen } from './src/screens'
import {decode, encode} from 'base-64';
import { db, auth } from './src/firebase/config.js'
import { collection, doc, getDoc } from 'firebase/firestore'
import { onAuthStateChanged } from 'firebase/auth';
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
            <Stack.Screen name="Home">
              {props => <HomeScreen {...props} extraData={user} />}
            </Stack.Screen>

            <Stack.Screen name="Chat">
              {props => <ChatScreen {...props} extraData={user} />}
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