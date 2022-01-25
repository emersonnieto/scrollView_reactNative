import React, {Component} from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

class App extends Component{

  render(){
    return(
      
      <View style={styles.container}>

      <ScrollView horizontal={true}>
        <View style={styles.box1}>

        </View>
        <View style={styles.box2}>

        </View>
        <View style={styles.box3}>

        </View>
        <View style={styles.box4}>

        </View>
      </ScrollView>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.box5}>

        </View>
        <View style={styles.box6}>

        </View>
        <View style={styles.box7}>

        </View>
        <View style={styles.box8}>

        </View>
      </ScrollView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  box1:{
    backgroundColor: 'red',
    height: 250,
    width: 150,
  },
  box2:{
    backgroundColor: 'black',
    height: 250,
    width: 150
  },
  box3:{
    backgroundColor: 'green',
    height: 250,
    width: 150
  },
  box4:{
    backgroundColor: 'yellow',
    height: 250,
    width: 150
  },
  box5:{
    backgroundColor: 'yellow',
    height: 250,  
    marginTop: 30
  },
  box6:{
    backgroundColor: 'red',
    height: 250,
    
  },
  box7:{
    backgroundColor: 'green',
    height: 250,
    
  },
  box8:{
    backgroundColor: 'blue',
    height: 250,
    
  },

});

export default App;