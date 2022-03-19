import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { TouchableHighlight, Alert, Image, Modal, Pressable, StyleSheet, Text, View, SafeAreaView, Button, Dimensions } from 'react-native';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

function TonyMessageScreen(props) {
    return (
        <SafeAreaView style={{
            backgroundColor: "red",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap"
        }}>
            <View>
                <Text>Implement the message screen for Tony.</Text>
            </View>
        </SafeAreaView>
    );
}

export default TonyMessageScreen;