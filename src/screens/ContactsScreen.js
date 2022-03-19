import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { TouchableHighlight, Alert, Image, Modal, Pressable, StyleSheet, Text, View, SafeAreaView, Button, Dimensions } from 'react-native';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import TonyMessageScreen from './TonyMessageScreen';

function ContactsScreen(props) {
    return (
        <SafeAreaView style={{
            backgroundColor: "dodgerblue",
            flex: 1,
            flexDirection: "row",     // main axis: horizontal
            justifyContent: "center", // justifies all content in tag along main axis: horizontal
            alignItems: "center",     // align along secondary axis within each line: vertical
            flexWrap: "wrap"
        }}>
            <View style={{                // "Home Monitor App Version Alpha" Top Bar
              backgroundColor: "white",
              width: '5%',
              height: 75,
            }}>
                <TouchableHighlight onPress={() => alert('Return to home page.')}>
                    <Image 
                        source={{uri: "https://www.pinclipart.com/picdir/middle/110-1105746_label-back-normal-comments-ios-back-arrow-png.png"}}
                        style={{
                            width: 10,
                            height: 20,
                            top: 25,
                            left: 10
                            }}/>
                </TouchableHighlight>
            </View>
            <View style={{                // "Home Monitor App Version Alpha" Top Bar
              backgroundColor: "white",
              width: '95%',
              height: 75,
            }}>
              <Text style={{
                alignSelf: "center",
                top: 25,                  // moves Home Monitor App 25 independent pixels from the top
                fontSize: 20,
              }}>Home Monitor App</Text>
              <Text style={{
                alignSelf: "center",
                top: 25,                  // moves Version Alpha 25 independent pixels from the top
                fontSize: 15
              }}>Version Alpha</Text>
            </View>
      
            <View style={{                  // Contacts View
                //backgroundColor: "purple",  // Helps with seeing View size
                width: '100%',
                height: 70
                }}>
                <Text style={{
                    fontFamily: 'AppleSDGothicNeo-Bold',
                    alignSelf: "center",
                    fontSize: 40,
                    top: 20,
                    color: "white"
                }}>Contacts</Text>
            </View>

            <View style={{                          // Spacing View for Contact Images
                flexDirection: "column",
                justifyContent: "space-evenly",
                height: '80%',
            }}>
                <View style={{                      // Tony Contact
                //backgroundColor: "tomato",          // Helps with seeing view size
                justifyContent: "space-evenly",
                width: '100%',
                height: 150,
                }}>
                    <TouchableHighlight onPress={() => <TonyMessageScreen/>}>
                        <Image 
                            source={{uri: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"}}
                            style={{
                                alignSelf: "center",
                                width: 120,
                                height: 120,
                                borderRadius: 400}}/>
                    </TouchableHighlight>
                    <Text style={styles.contactName}>Tony</Text>
                </View>

                <View style={{                      // Steve Contact
                //backgroundColor: "gold",            // Helps with seeing view size
                justifyContent: "space-evenly",
                width: '100%',
                height: 150,
                }}>
                    <TouchableHighlight onPress={() => alert('Open Messaging Page With Steve.')}>
                        <Image 
                            source={{uri: "https://avatarfiles.alphacoders.com/765/thumb-76569.jpg"}}
                            style={{
                                alignSelf: "center",
                                width: 120,
                                height: 120,
                                borderRadius: 400}}/>
                    </TouchableHighlight>
                    <Text style={styles.contactName}>Steve</Text>
                </View>

                <View style={{                      // Tyson Contact
                //backgroundColor: "orange",          // Helps with seeing view size
                justifyContent: "space-evenly",
                width: '100%',
                height: 150,
                }}>
                    <TouchableHighlight onPress={() => alert('Open Messaging Page With Tyson.')}>
                        <Image 
                            source={{uri: "https://www.csuchico.edu/csci/_assets/images/tyson-henry.jpg"}}
                            style={{
                                alignSelf: "center",
                                width: 120,
                                height: 120,
                                borderRadius: 400}}/>
                    </TouchableHighlight>
                    <Text style={styles.contactName}>Tyson</Text>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "dodgerblue",
      justifyContent: "center",
      alignItems: "center",
    },
    contactName: {
        alignSelf: "center",
        color: "white",
        fontSize: 20,
        fontFamily: "AppleSDGothicNeo-SemiBold"
    }
});

export default ContactsScreen;