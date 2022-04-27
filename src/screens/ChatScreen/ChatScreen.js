import React, { useEffect, useCallback, useState, useLayoutEffect } from 'react'
import styles from './styles';
import { collection, query, where, orderBy, getDocs, getDoc, doc, addDoc, setDoc, onSnapshot } from 'firebase/firestore';
import { db, auth } from '../../firebase/config'
import { GiftedChat } from 'react-native-gifted-chat'

export default function ChatScreen(props){
  const [messages, setMessages] = useState([]);
  const userID = props.extraData.id
  const userName = props.extraData.fullName
  const email = props.extraData.email
  const houseID = props.extraData.houseID
  const chatID = "DOEidq74bBRSwZ5vYpJC58pux5r1tpuV5l3Pd8XXhRywl7JAm0iSpil1"
 
  useLayoutEffect(() => {
    const q = query(collection(db, 'chats', 'House A', chatID), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => setMessages(
        snapshot.docs.map(doc => ({
            _id: doc.data()._id,
            createdAt: doc.data().createdAt.toDate(),
            text: doc.data().text,
            user: doc.data().user,
        }))
    ));

    return () => {
      unsubscribe();
    };
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    const {
        _id,
        createdAt,
        text,
        user
    }=messages[0]

    // Can only call addDoc on collections. 
    // See https://stackoverflow.com/questions/47474522/firestore-difference-between-set-and-add 
    let houseName = ''
    const q = query(collection(db, 'houses'), where("houseID", "==", houseID))
    getDocs(q)
    .then(querySnapshot => {
      querySnapshot.forEach((doc) => {
        houseName = doc.data().name
        //console.log(houseName)
      })
      const colRef = collection(db, 'chats', `${houseName}`, `${chatID}`)
      addDoc(colRef, {
          _id,
          createdAt,
          text,
          user
      })
    })
  }, [])

  return (
    <GiftedChat
      messages={messages}
      showAvatarForEveryMessage={true}
      onSend={messages => onSend(messages)}
      user={{
        _id: userID, // GiftedChat _id value to display messages differently depending on logged in user
        id: userID, // userID used for collection (database) relations in firebase
        name: userName
      }}
    />
  )
}
