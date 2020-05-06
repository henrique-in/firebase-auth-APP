import React, {Component} from 'react';
import {
  Platform,
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
} from 'react-native';

import {RectButton} from 'react-native-gesture-handler';

import firebase from './src/firebase/firebaseConnection';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      senha: '',
    };

    this.logar = this.logar.bind(this);
    this.sair = this.sair.bind(this);

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        alert('Usuario Logado com sucesso!');
      }
    });
  }
  sair() {
    firebase.auth().signOut();
    alert('Deslogado com sucesso!');
  }

  logar() {
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.senha)
      .catch((error) => {
        if (error.code == 'auth/wrong-password') {
          alert('Senha incorreta');
        } else {
          alert('Ops, tente novamente mais tarde!');
        }
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{alignItems: "center", margin: 50}}>
        <Image source={require('./src/img/logo.png')}/>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Email"
          underlineColorAndroid="transparent"
          onChangeText={(email) => {
            this.setState({email});
          }}
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          underlineColorAndroid="transparent"
          onChangeText={(senha) => {
            this.setState({senha});
          }}
        />

        <RectButton> OI </RectButton>
        <View style={{margin:10}}>
        <Button  color={'#483D8B'} title="Entrar" onPress={this.logar} />
        </View>
        <View style={{margin:20}}>
        <Button color={'#B22222'}title="Logout" onPress={this.sair} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor:'#fff'
  },
  input: {
    width: 350,
    height: 50,
    backgroundColor: '#ccc',
    fontSize: 22,
    padding: 5,
    margin: 5,

  },
  
});
