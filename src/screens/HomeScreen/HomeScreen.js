import React, { useEffect, useState } from 'react'
import { FlatList, Keyboard, Text, TextInput, TouchableOpacity, View } from 'react-native'
import styles from './styles';
//import Tabletop from "tabletop";
import Papa from 'papaparse';
import { signOut } from 'firebase/auth'
import { collection, query, where, doc, getDoc, getDocs, addDoc, onSnapshot, setDoc } from 'firebase/firestore';
import { db, auth } from '../../firebase/config'
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator();

export default function HomeScreen(props) {
    const [entityTextAdd, setEntityTextAdd] = useState('')
    const [entityTextLeave, setEntityTextLeave] = useState('')
    const [entities, setEntities] = useState([])
    const [sheetData, setSheetData] = useState([])

    // Populate entityRef (houses collection reference for house entities with matching houseIDs)
    const userID = props.extraData.id
    const userEmail = props.extraData.email
    const userName = props.extraData.fullName

    const userRef = doc(db, 'users', `${userID}`)
    const colRef = collection(db, 'users', `${userID}`, 'houseIDs')
    

    const navigation = useNavigation()

    const getSheetData = () => {
        // Grabbing data from the google sheet 
        var url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTDvPSiYgoRATrRF3nr0GXL1I37gZb9nd7GlUhUXU_Dteh08f7t6rF7BOJsKzVjrYz7mIxWYvw8pNhq/pub?output=csv'
        var xhr = new XMLHttpRequest()
        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4 && xhr.status == 200){
                var data = Papa.parse(xhr.responseText)
                var contents = data.data
                // Can iterate through contents of the array if multiple cells are populated, but webhooks only overwrites first cell
                //   so we use contents[i][0] (i iterates through the only thing in contents array, 0 index gives us what's in the cell)
                for(var i in contents){
                    console.log("The first cell of the sheet: ",contents[i][0])
                }
            }
        }
        xhr.open("GET", url, true)
        xhr.send()
    }

    useEffect(() => {
        console.log("in useEffect HomeScreen")
        console.log("About to find google sheet")

        // setInterval calls getSheetData every 300000 milliseconds (every 5 minutes)
        update = setInterval(getSheetData, 60000)

        getDoc(userRef)
        .then((docSnap) => {
            console.log(docSnap.data().fullName)
        })
        
        onSnapshot(colRef, (snapshot) => {
            let newEntities = []
            snapshot.forEach(async (document) => { // For each houseID that a user has
                
                // Get the doc from houses that match the current houseID we have using a query and getDocs
                const docRef = doc(db, 'houses', `${document.data().houseID}`)
                const docSnap = await getDoc(docRef)
                if(docSnap.exists()) {
                    let entity = docSnap.data()
                    entity.id = doc.id
                    newEntities.push(entity)
                } 
                else {
                    alert("House doesn't exist")
                } 
            })
            console.log(newEntities)
            setEntities(newEntities)
        });
    }, [])

    const onAddButtonPress = () => {
        // Adding a new house
        if(entityTextAdd && entityTextAdd.length > 0) {
            const houseRef = query(collection(db, 'houses'), where('houseID', '==', `${entityTextAdd}`))
            console.log(houseRef)
            if(houseRef) { // If the house reference exists, set the user doc to have the houseID
                const data = {
                    houseID: entityTextAdd
                }
                const houseIDsDocRef = doc(db, 'users', `${userID}`, 'houseIDs', `${entityTextAdd}`)
                setDoc(houseIDsDocRef, data)
                    .then(_doc => {
                        setEntityTextAdd('')
                        Keyboard.dismiss()
                        alert("Joined existing house")
                    })
                    .catch((error) => {
                        alert(error)
                    });
            }
            else {
                alert("No existing house")
            }
        }

        /*
        // Adding an entrance 
        if (entityText && entityText.length > 0) {
            const data = {
                title: entityText,
                ownerID: userID,
                openBool: false
            };
            addDoc(entityRef, data)
                .then(_doc => {
                    setEntityText('')
                    Keyboard.dismiss()
                })
                .catch((error) => {
                    alert(error)
                });
        } */
    }

    const onLeaveButtonPress = () => {
        /*if (entityTextLeave && entityTextLeave.length > 0) {
            const data = {
                title: entityText,
                ownerID: userID,
                openBool: false
            };
            addDoc(entityRef, data)
                .then(_doc => {
                    setEntityText('')
                    Keyboard.dismiss()
                })
                .catch((error) => {
                    alert(error)
                });
        }*/
        console.log("Implement")
    }

    const onChatButtonPress = () => {
        return( // Creating a new stack navigator
            navigation.navigate('Chat')
        )
    }

    const onLogoutButtonPress = () => {
        signOut(auth)
            .then(() => {
                alert("You have been logged out")
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const renderEntity = ({item, index}) => {
        return (
            <View style={styles.entityContainer}>
                <Text style={styles.entityTextAdd}>
                    {index+1}. {"\t"} {item.name} {"\n"} HouseID: {item.houseID}
                </Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={onLogoutButtonPress}>
                <Text style={styles.buttonText}>Logout</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.button} onPress={onChatButtonPress}>
                <Text style={styles.buttonText}>Chat</Text>
            </TouchableOpacity>

            <View style={styles.formContainer}>
                <TextInput
                    style={styles.input}
                    placeholder='Join/create a new house'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setEntityTextAdd(text)}
                    value={entityTextAdd}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TouchableOpacity style={styles.button} onPress={onAddButtonPress}>
                    <Text style={styles.buttonText}>Add</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.formContainer}>
                <TextInput
                    style={styles.input}
                    placeholder='Leave a house'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setEntityTextLeave(text)}
                    value={entityTextLeave}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TouchableOpacity style={styles.button} onPress={onLeaveButtonPress}>
                    <Text style={styles.buttonText}>Leave</Text>
                </TouchableOpacity>
            </View>
            { entities && (
                <View style={styles.listContainer}>
                    <FlatList
                        data={entities}
                        renderItem={renderEntity}
                        keyExtractor={(item) => item.id}
                        removeClippedSubviews={true}
                    />
                </View>
            )}
        </View>
    )
}