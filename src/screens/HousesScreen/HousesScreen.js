import React, { useEffect, useState } from 'react';
import { FlatList, Keyboard, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import axios from "axios";
import { signOut } from 'firebase/auth';
import { collection, query, where, doc, getDoc, getDocs, addDoc, onSnapshot, setDoc } from 'firebase/firestore';
import { db, auth } from '../../firebase/config';
import { useNavigation } from '@react-navigation/native';

export default function HousesScreen(props) {
    console.log(props);
    return(
        <View>
            <Text>Houses Screen</Text>
        </View>
    )
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