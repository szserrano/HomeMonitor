import React, { useEffect, useState } from 'react'
import { FlatList, Keyboard, Text, TextInput, TouchableOpacity, View } from 'react-native'
import styles from './styles';
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { collection, query, where, getDocs, addDoc, onSnapshot } from 'firebase/firestore';
import { db, auth } from '../../firebase/config'
import { NavigationContainer, StackActions, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator();

export default function HomeScreen(props) {
    const [entityText, setEntityText] = useState('')
    const [entities, setEntities] = useState([])

    const entityRef = collection(db, 'entrances')
    const userID = props.extraData.id

    const navigation = useNavigation()

    useEffect(() => {
        console.log("in useEffect HomeScreen")
        console.log(userID)
        const q = query(entityRef, where("ownerID", "==", userID))
        //let newEntities = []
        /*getDocs(q)
            .then((snapshot) => {
                snapshot.forEach((doc) => {
                    const entity = doc.data()
                    entity.id = doc.id
                    newEntities.push(entity)
            })*/
        onSnapshot(entityRef, (snapshot) => {
            let newEntities = []
            snapshot.forEach((doc) => {
                const entity = doc.data()
                entity.id = doc.id
                newEntities.push(entity)
            })
            setEntities(newEntities)
        });
        //setEntities(newEntities)
    }, [])

    const onAddButtonPress = () => {
        if (entityText && entityText.length > 0) {
            //const timestamp = firebase.firestore.FieldValue.serverTimestamp();
            const data = {
                title: entityText,
                ownerID: userID,
                openBool: false
                //createdAt: timestamp,
            };
            addDoc(entityRef, data)
                .then(_doc => {
                    setEntityText('')
                    Keyboard.dismiss()
                })
                .catch((error) => {
                    alert(error)
                });
        }
    }

    const onChatButtonPress = () => {
        return( // Creating a new stack navigator
            navigation.navigate('Chat')
        )
    }

    const onLogoutButtonPress = () => {
        signOut(auth)
            .then(() => {
                //navigation.goBack()
                alert("You have been logged out")
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const renderEntity = ({item, index}) => {
        return (
            <View style={styles.entityContainer}>
                <Text style={styles.entityText}>
                    {index}. {item.title} | Open Status: {item.openBool.toString()}
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
                    placeholder='Add new entity'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setEntityText(text)}
                    value={entityText}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TouchableOpacity style={styles.button} onPress={onAddButtonPress}>
                    <Text style={styles.buttonText}>Add</Text>
                </TouchableOpacity>
            </View>
            { entities && (
                <View style={styles.listContainer}>
                    <FlatList
                        data={entities}
                        //extraData={entities}
                        renderItem={renderEntity}
                        keyExtractor={(item) => item.id}
                        removeClippedSubviews={true}
                    />
                </View>
            )}
        </View>
    )
}