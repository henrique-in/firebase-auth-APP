import React, {Component} from 'react';
import {
  Platform,
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';

import {Button} from 'react-native-elements';
import firebase from '../firebase/firebaseConnection';
import {NavigationActions, StackActions} from 'react-navigation';


export default class App extends Component {

  static navigationOptions = {
    title: "Cadastro",
  }
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      senha: '',
    };

    this.cadastrar = this.cadastrar.bind(this);

  }
  cadastrar(){
    firebase.auth().createUserWithEmailAndPassword(this.state.email , this.state.senha)
    .catch((error)=>{
      if(error.code == 'auth/weak-password'){
        alert('Sua senha deve conter no minimo 6 Caracteres.')
      }
      if(error.code=='auth/invalid-email'){
        alert('Email Invalido.');
      }
     }
    
    )

    alert('Conta criada com sucesso!');
    this.props.navigation.navigate('Login')
    //  this.props.navigation.dispatch(StackActions.reset({
    //    index: 0,
    //    actions:[
    //      NavigationActions.navigate({routeName:'Login'})
    //    ]
    //  }))

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
          onPress={this.cadastrar}
          title="Confirmar"
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
        </View>

        
        
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor:'#fff',
    justifyContent:'center',
    alignItems:'center'
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
