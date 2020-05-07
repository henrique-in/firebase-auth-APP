import React, {Component} from 'react';
import {
  Platform,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import firebase from '../firebase/firebaseConnection';
import {NavigationActions, StackActions} from 'react-navigation';
import {Button} from 'react-native-elements';


export default class App extends Component {

  static navigationOption={
    title: 'Home'
  }

  constructor(props) {
    super(props);
    this.state = {
      
    };
    this.sair = this.sair.bind(this);
   
  }
  sair() {
    firebase.auth().signOut();
    alert('Deslogado com sucesso!');
    this.props.navigation.dispatch(StackActions.reset({
      index: 0,
      actions:[
        NavigationActions.navigate({routeName:'Login'})
      ]
    }))
  }

  render() {
    return (
      <View style={styles.container}>

    
       <Button
          type="outline"
          title="Sair"
          onPress={this.sair}
          titleStyle={{
            fontSize: 20,
            color:'red'
          }}
          buttonStyle={{
            width: 200,
            height: 40,
            borderRadius:50,
            borderColor: '#000',
            borderWidth: 1
          }}
        />
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
  
});
