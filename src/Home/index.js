import React, {Component} from 'react';
import {
  Platform,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };

   
  }
  render() {
    return (
      <View style={styles.container}>
       <Text> HOME </Text>
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
  
});
