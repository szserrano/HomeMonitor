import React, { useEffect, useCallback, useState, useLayoutEffect } from 'react'
import styles from './styles';
import { collection, query, where, orderBy, getDocs, doc, setDoc, onSnapshot } from 'firebase/firestore';
import { db, auth } from '../../firebase/config'
import { GiftedChat } from 'react-native-gifted-chat'

export default function ChatScreen(props){
  const [messages, setMessages] = useState([]);
  const userID = props.extraData.id
  const userName = props.extraData.fullName
  const email = props.extraData.email
  /*useEffect(() => {
      collection(db, 'chat')
      orderBy('createdAt', 'desc')
    setMessages([
      {
        _id: 1,
        text: 'Hello!',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ])
  }, [])*/

  useLayoutEffect(() => {
    const docRef = getDocs(db, 'chat')
    const q = query(collection(db, 'chat'), orderBy('createdAt', 'desc'))
    /*const unsub = onSnapshot(q, snapshot=>setMessages(
        //console.log("snapshot:", snapshot),
        //console.log("snapshot.docs:",snapshot.docs),
        snapshot.docs.map(doc=>({
            _id: doc.data()._id,
            createdAt: doc.data().createdAt.toDate(),
            text: doc.data().txt,
            user: doc.data().user
        }))
    ))*/
    //const q = getDocs(collection(db, 'chat'))
    /*const unsub = onSnapshot(q, (querySnapshot) => {
        const chats = [];
        querySnapshot.forEach((doc) => {
            const d = doc.data()
            chats.push({d})
        })
        console.log("Current data: ", doc.data());
    });*/
    const unsub = onSnapshot(docRef, (doc) => {
        console.log("Current data: ", doc.data());
    });  
    return unsub
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    const {
        _id,
        createdAt,
        text,
        user
    }=messages[0]
    //const chatColRef = collection(db, 'chat')
    setDoc(doc(db, 'chat', userID), {
        _id,
        createdAt,
        text,
        user
    })
  }, [])

  return (
    <GiftedChat
      messages={messages}
      showAvatarForEveryMessage={true}
      onSend={messages => onSend(messages)}
      user={{
        id: userID,
        name: userName
      }}
    />
  )
}
