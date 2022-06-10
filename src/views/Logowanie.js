import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { auth } from '../../configFirebase/firebase'
import { firebaseData } from '../../configFirebase/firebase';

const LoginView = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navApp = useNavigation()

  useEffect(() => {
    const autheff = auth.onAuthStateChanged(user => {
      if (user) {
        navApp.navigate("Lista");
        setEmail('');
        setPassword('');
      }
    })

    return autheff
  }, [])

  const registrationButton = () => {
    navApp.navigate("Rejestracja");
    setEmail('');
    setPassword('');
  }

  const loginButton = () => {
    
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        setEmail('');
        setPassword('');
        navApp.navigate('Lista');
      })
      .catch(error => alert(error.message))
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >
      <Text style={styles.addStyleText}>Wprowadź dane do logowania</Text>
      <View style={styles.authContainer}>

        <TextInput
          placeholder="Wpisz adres e-mail"
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.inputAuth}
        />

        <TextInput
        
          placeholder="Wpisz hasło"
         
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.inputAuth}
          secureTextEntry
        />
      </View>

      <View style={styles.btnContainer}>
        <TouchableOpacity
          onPress={loginButton}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Zaloguj</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={registrationButton}
          style={[styles.button, styles.btnOut]}
          
        >
          <Text style={styles.btnOutText}>Rejestracja</Text>
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
    marginBottom: 5,
    fontSize: 21,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  taskStyle: {
    fontSize: 17,
    marginBottom: 6,
    textAlign: 'center',
  },
  authContainer: {
    width: '80%',
    overflow: 'hidden',

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

  },
  button: {
    backgroundColor: '#0782F9',
    width: '70%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    overflow: 'hidden',

  },
  btnOut: {
    backgroundColor: 'white',
    marginTop: 5,
    width: '70%',
    borderColor: '#0782F9',
    borderWidth: 2,
    overflow: 'hidden',

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
