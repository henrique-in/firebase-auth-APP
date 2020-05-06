import React, {Component} from 'react';
import {
  Platform,
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';

import {Button} from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';
import {YellowBox} from 'react-native';
import firebase from '../firebase/firebaseConnection';
import {NavigationActions, StackActions} from 'react-navigation';
YellowBox.ignoreWarnings(['Warning: Async Storage has been extracted from react-native core']);

export default class App extends Component {

  static navigationOptions = {
    title: "Home",
    headerShown: false
  }
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
        alert('Bem-vindo!');
        this.props.navigation.dispatch(StackActions.reset({
          index: 0,
          actions:[
            NavigationActions.navigate({routeName:'Home'})
          ]
        }))
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
        <Image source={require('../img/logo.png')}/>
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
          secureTextEntry= {true}
          onChangeText={(senha) => {
            this.setState({senha});
          }}
        />

        
        <View style={styles.ViewButton}>
        <Button
          onPress={this.logar}
          title="Entrar"
          titleStyle={{
            fontSize: 20
          }}
          buttonStyle={{
            backgroundColor: '#483D8b',
            width: 250,
            borderRadius:50,
            margin:10
          }}
        />

        <Button
          type="outline"
          title="Cadastre-se"
          titleStyle={{
            fontSize: 20,
            color:'#836FFF'
          }}
          buttonStyle={{
            width: 200,
            height: 40,
            borderRadius:50,
            margin: 5,
          
            borderColor: '#836FFF'
          }}
        />
         

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
    margin: 7,
    borderRadius: 50,
    textAlign:'center',
    color:'purple'

  },
  ViewButton:{
    marginTop: 20,
    justifyContent:'center',
    alignItems: 'center'
  },
  texto:{
    textAlign: 'center',
    color:'#FFF',
    fontWeight: 'bold',
    fontSize:20
   
  },
  textoCadastro:{
    textAlign: 'center',
    color:'#A020F0',
    fontSize:17
   
  }
  
});
