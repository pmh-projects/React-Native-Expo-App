//import * as React from 'react';
import * as ReactNative from 'react-native';
//mport { confirmAlert } from 'react-confirm-alert'; 
//import 'react-confirm-alert/src/react-confirm-alert.css';
import { firebaseData } from '../../configFirebase/firebase';
import { deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { Component, useState } from "react";
import { View, StyleSheet, Button, Alert, Text } from "react-native";


export default function Task({
    id,
    taskname,
    priority,
    status,
}) {

    const editConfirm = () =>
    Alert.alert(
      "Zakończ zadanie",
      "Czy napewno zadanie zostało wykonane?",
      [
        {
          text: "Cofnij",
          onPress: () => console.log("Cofnij."),
          style: "cancel"
        },
        { text: "TAK", onPress: () => editData() }
      ]
    );

    const deleteConfirm = () =>
    Alert.alert(
      "Usuń zadanie",
      "Czy napewno chcesz usunać zadanie?",
      [
        {
          text: "Nie, cofnij",
          onPress: () => console.log("Cofnij."),
          style: "cancel"
        },
        { text: "OK", onPress: () => deleteData() }
      ]
    );


    const deleteData = () =>{
        const document = doc(firebaseData, 'tasks', id);
        deleteDoc(document);
    }

    const editData = () => {
        const documentFirebaseRef = doc(firebaseData, 'tasks', id);
        updateDoc(documentFirebaseRef, {
            status: true,
        });
    }

    return(
        <View>
            
            <ReactNative.View style={styles.taskContainer}>
          
            {status ? (
                
                    <ReactNative.TouchableOpacity 
                        style={styles.btnProgressColorComplete}>
                        <Text style={styles.btnProgressTextComplete}>Wykonane</Text>
                    </ReactNative.TouchableOpacity>
                  )
                : (
                    <ReactNative.TouchableOpacity 
                        onPress={editConfirm}
                        style={styles.btnProgressColor}>
                        <Text style={styles.btnProgressText}>W trakcie</Text>
                    </ReactNative.TouchableOpacity>
                  )
                }
               
                <Text style={styles.taskStyle}>Nazwa: </Text> 
                <Text style={styles.taskname}>{taskname}</Text> 
                
                { 
                    priority == "*** Wysoki ***" ? (
                    <>
                        <Text style={styles.priorityM}>Priorytet: </Text>
                        <Text style={styles.priorityH}>{priority}</Text>
                    </>
                  )
                : (
                    <>
                        <Text style={styles.priorityM}>Priorytet: </Text>
                        <Text style={styles.priority}>{priority}</Text>
                    </>
                  )
                }

                        <ReactNative.TouchableOpacity 
                           style={styles.btnDelete} onPress={deleteConfirm}>
                         <Text style={styles.btnDeleteText}>Usuń</Text>
                       </ReactNative.TouchableOpacity>

            </ReactNative.View>
 
        </View>
    )
}

const styles = ReactNative.StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      },
    taskContainer: {
        backgroundColor: '#dcedfc',
        marginTop: '1%',
        borderWidth: 2,
        borderColor: '#023fa1',
    },
    taskname: {
        fontSize: 31,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    taskStyle: {
        fontSize: 17,
        marginBottom: 6,
        textAlign: 'center',
    },
    priority: {
        marginBottom: 7,
        fontSize: 29,
        fontWeight: 'bold',
        color: '#969696',
        textAlign: 'center',
    },
    priorityM: {
        fontSize: 17,
        marginBottom: 7,
        color: 'black',
        textAlign: 'center',
    },
    priorityH: {
        fontSize: 32,
        fontWeight: 'bold',
        color: 'red',
        textAlign: 'center',
    },
    btnDelete: {

        backgroundColor: 'red',
        borderRadius: 100,
        padding: 15,
        marginRight: '38%',
        marginLeft: '38%',
        marginTop: '2%',
        marginBottom: '2%',
        alignItems: 'center',
        overflow: 'hidden',
        borderColor: 'black',
        borderWidth: 1,
    },
    btnDeleteText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: 'white',
      overflow: 'hidden',
  },
    btnProgressColor: {
        backgroundColor: '#F1C40F',
        borderRadius: 80,
        padding: 17,
        marginRight: '25%',
        marginLeft: '25%',
        marginTop: '2%',
        alignItems: 'center',
        overflow: 'hidden',
        borderColor: 'black',
        borderWidth: 1,
   },
    btnProgressColorComplete: {
        backgroundColor: 'green',
        borderRadius: 80,
        padding: 14,
        marginRight: '29%',
        marginLeft: '29%',
        marginTop: '2%',
        alignItems: 'center',
        overflow: 'hidden',
        borderColor: 'black',
        borderWidth: 1,
    },
    btnProgressText: {
        fontSize: 22,
        color: 'black',
        fontWeight: 'bold',

    },
    btnProgressTextComplete: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
        overflow: 'hidden',
    }, 
  }
);