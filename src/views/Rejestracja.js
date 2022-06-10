import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native'
import { auth } from '../../configFirebase/firebase'

const LoginView = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')

  const navApp = useNavigation()

  useEffect(() => {
    const unsub = auth.onAuthStateChanged(user => {
      if (user) {
        navApp.navigate("Lista")
      }
    })

    return unsub
  }, [])

  const registrationButton = () => {
    if(password===password2){
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        alert("Dodano nowego użytkownika");
        setEmail('');
        setPassword('');
        setPassword2('');
        navApp.navigate("Lista")
      })
      .catch(error => alert(error.message))
  }
  else{
    Alert.alert(
      "Hasła się nie zgadzają",
      "Spróbuj jeszcze raz.",
      [
    
        { text: "OK", onPress: () => console.log("Nie dodano nowego konta."), }
      ]
    );
  }
}

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >
        
      <View style={styles.authContainer}>
        <Text style={styles.addStyleText}>Dodaj nowego użytkownika</Text>
        <TextInput
          placeholder="Zarejestruj nowy e-mail"
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.inputAuth}
        />
        <TextInput
          placeholder="Wpisz hasło do konta"
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.inputAuth}
          secureTextEntry
        />
          <TextInput
          placeholder="Potwierdź hasło"
          value={password2}
          onChangeText={text => setPassword2(text)}
          style={styles.inputAuth}
          secureTextEntry
        />
      </View>

      <View style={styles.btnContainer}>

        <TouchableOpacity
          onPress={registrationButton}
          style={[styles.button, styles.btnOut]}
          
        >
          <Text style={styles.btnOutText}>Dodaj nowe konto</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

export default LoginView

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#87CEFA',
  },
  addStyleText: {
    marginBottom: 35,
    fontSize: 21,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  authContainer: {
    width: '80%',
    overflow: 'hidden',
//textoverflow: 'ellipsis',
   // whitespace: 'nowrap',
    borderColor: '#023fa1',
    margin: 15,
    borderWidth: 2,
    padding: 40,
    borderRadius: 30,
  },
  inputAuth: {
    backgroundColor: '#f2f8fb',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  btnContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    overflow: 'hidden',
   // textoverflow: 'ellipsis',
   // whitespace: 'nowrap',
  },
  button: {
    backgroundColor: '#0782F9',
    width: '70%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    overflow: 'hidden',
   // textoverflow: 'ellipsis',
//whitespace: 'nowrap',
  },
  btnOut: {
    backgroundColor: 'white',
    marginTop: 5,
    width: '70%',
    borderColor: '#0782F9',
    borderWidth: 2,
    overflow: 'hidden',
  //  textoverflow: 'ellipsis',
//whitespace: 'nowrap',
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  btnOutText: {
    color: '#0782F9',
    fontWeight: '700',
    fontSize: 16,
  },
})