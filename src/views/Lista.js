import * as React from 'react';
import * as ReactNative from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { firebaseData } from '../../configFirebase/firebase';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import Task from '../TaskDesign/Task';
import { auth } from '../../configFirebase/firebase';

export default function Lista() {

    const [tasks, setTasks] = React.useState([]);
    const navApp = useNavigation();

    const logoutButton = () => {
        auth
          .signOut()
          .then(() => {
              navApp.navigate('Logowanie')
          })
          .catch(error => alert(error.message))
      }

    React.useEffect(() => {
        const collectionData = collection(firebaseData, 'tasks');
        const queryCollection = query(collectionData, orderBy('createdAt', 'desc'));

    const unsub = onSnapshot(queryCollection, querySnapshot => {
        
          setTasks(
            querySnapshot.docs.map(doc => ({
                id: doc.id,
                taskname: doc.data().taskname,
                priority: doc.data().priority,
                status: doc.data().status,
                createdAt: doc.data().createdAt,
            }))
          );
        });
      return unsub;
      },[]
    )

    return(
      
       <ReactNative.View style={styles.container}>
            <ReactNative.ScrollView contentContainerStyle={{paddingBottom: 45}}>
            <ReactNative.Text style={styles.title}>Lista zadań</ReactNative.Text>
                {tasks.map(task => <Task key={task.id} {...task} />)}
            </ReactNative.ScrollView>
            <ReactNative.Button color="#01016e" title='Utwórz' onPress={() => navApp.navigate('Nowe zadanie')} />
            <ReactNative.Button color="#cf0d00" title='Wyloguj' onPress={() => logoutButton()} />
        </ReactNative.View>    
        
    )
}

const styles = ReactNative.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#99ccff',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        margin: 16,
        textAlign: 'center',
    },
      text: {
        fontSize: 30,
    },
      button: {
        backgroundColor: '#99ccff',
        width: '100%',
        padding: 16,
        borderRadius: 9,
        alignItems: 'center',
        overflow: 'hidden',
        textoverflow: 'ellipsis',
        whitespace: 'nowrap',
    },
});