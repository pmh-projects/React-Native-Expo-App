import { useState} from 'react';
import * as ReactNative from 'react-native';
import { TextInput, View, Button } from 'react-native';
//import { Picker } from '@react-native-community/picker';
import { collection, addDoc } from 'firebase/firestore';
import { firebaseData } from '../../configFirebase/firebase';
import { useNavigation } from '@react-navigation/native';
import { Text } from 'react-native-svg';
import RNPickerSelect from 'react-native-picker-select';

export default function NoweZadanie() {
    
    const navApp = useNavigation();
  
    const [newTask, setnewTask] = useState({
        taskname: 'Nie wprowadzono nazwy zadania',
        priority: 'Nie wybrano priorytetu',
        status: false,
        createdAt: new Date(),
    });

    const selectedItem = {
        title: 'Wybierz',

    };

    const addTask = async () => {
       
        const docTask = await addDoc(collection(firebaseData, 'tasks'), newTask);
        navApp.goBack();
      
      }



    return(
        <View style={styles.containerZadanieView}>
        <View style={styles.containerZadanie}>
            <Text style={styles.addTaskStyle}>Dodaj nowe Zadanie</Text>
                
                <Text style={styles.priorStyle}>Ustal priorytet zadania:</Text>
                <TextInput 

                   onChangeText={(text) => setnewTask({...newTask, taskname: text})}

                    style={styles.inputWindow} 
                    placeholder='Nazwa nowego zadania' 

                />
                <Text style={styles.priorStyle}>Ustal priorytet zadania:</Text>

                <RNPickerSelect
                               onValueChange={(value) => setnewTask({...newTask, priority: value})}
                               style={styles.inputWindow} 
                               label='Ustal priorytet' 

            items={[
                {label:"Niski", value:"* Niski *" },
                {label:"Średni", value:"** Średni **"}, 
                {label:"Wysoki", value:"*** Wysoki ***"} 
            ]}
            placeholder={{ label: "Wybierz priorytet zadania ", value: "" }}
        />
            <Button color="blue" style={styles.btn} title='Dodaj' onPress={addTask}/>
        </View>
        </View>
    )
}

const styles = ReactNative.StyleSheet.create({
    containerZadanie: {
        flex: 1,
        backgroundColor: '#c4e4ff',
        alignItems: 'center',
        margin: 35,
        justifyContent:'center',
        borderWidth:  3,
        borderRadius: 35,
        borderColor: '#023fa1',
    },
    containerZadanieView: {
        flex: 1,
        backgroundColor: '#78acff',
        borderColor: '#023fa1',
       
    },
    addTaskStyle: {
        fontSize: 25,
        fontWeight: '500',
        padding: 7,
        borderRadius: 30,
    },
    priorStyle: {
        fontSize: 15,
    },
    btn: {
        borderRadius: 29,
        padding: 15,
        overflow: 'hidden',
        fontSize: 16,
    },
    inputWindow: {
        width: '68%',
        padding: 13,
        marginVertical: 8,
        borderWidth: 1,
        backgroundColor: '#e6f1fa',
        borderColor: '#e6f1fa',
        borderRadius: 6,
        color:'black'
      }
});