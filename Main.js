import React, { Component } from 'react';
import { 
Text, 
View,
StyleSheet,
TextInput,
ScrollView,
TouchableOpacity,
KeyboardAvoidingView,
} from 'react-native';

import Note from './Noter';
import axios from 'axios';


export default class Main extends Component {

  componentDidMount(){
    axios.get('http://192.168.40.165:2403/note')
    .then(res => {const name = res.data
    this.setState({name})
    })
  }
  
   constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this)
        this.state = {
            noteArray: [],
            noteText: '',
            name: '',
            text: '',
            
        }
      }
    
      
      handleSubmit() {


        const note = {
            name: this.state.text
        };

        axios.post('http://192.168.40.165:2403/note', note)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
            .catch(error => console.log(error))

        axios.get('http://192.168.40.165:2403/note', )
            .then(res => {
              console.log(res);
              console.log(res.data);
            })
            .catch(error => console.log(error))

    }

    handleChange = (text) => {
      this.setState({name:text})
    }    
    
  
  render() {
    
    let notes=this.state.noteArray.map((val,key) => {
     return <Note prueba={'Note : '} key={key} keyval={key} val={val} deleteMethod={()=>this.deleteNote(key)} />;
    });
    
    return (
  
      <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerText}>
              Note
            </Text>
         </View>
          <ScrollView style={styles.scrollContainer}>
           {notes}
         </ScrollView>
         
        <View style={styles.footer}>
            <TextInput style={styles.textInput}
              onChangeText={(text)=> this.setState({text})}
              value={this.state.text}
              placeholder='note'
              placeholderTextColor='white'
              underlineColorAndroid='transparent'>
            </TextInput>

         </View>
         
         <TouchableOpacity onPress={this.addNote.bind(this)} style={styles.addButton}>
           <Text style={styles.addButtonText}>+</Text>
         </TouchableOpacity>
         
      </View>
    );
  }
  addNote(){
    if(this.state.text){
      var d= new Date();
      this.state.noteArray.push({
        'date': d.getFullYear()+
        '/'+ (d.getMonth()+1) +
        '/'+ d.getDate(),
        'note': this.state.text
      });
      
      this.handleSubmit();
      this.setState({noteArray: this.state.noteArray});
      this.setState({text: ''});
     
    }
    
  }
  
  deleteNote(key){
    this.state.noteArray.splice(key,1);
    this.setState({noteArray: this.state.noteArray});
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#e91e63',
    alignItems: 'center',
    justifyContent: 'center',
  },
    headerText: {
     color: 'white',
     fontSize: 18,
     padding: 26,
  },
    scrollContainer: {
     flex: 1,
     marginBottom: 100,
  },
  footer: {
     position: 'absolute',
     bottom: 0,
     left: 0,
     right: 0,

  },
    textInput: {
     alignSelf: 'stretch',
     color: '#fff',
     padding: 20,
     backgroundColor:'#252525',
     borderTopWidth:2,
     borderTopColor: '#ededed',
  },
    addButton: {
     position: 'absolute',
     right: 20,
     bottom: 70,
     backgroundColor:'#e91e63',
     width: 70,
     height: 70,
     borderRadius: 50,
     alignItems: 'center',
     justifyContent: 'center',
  },
    addButtonText: {
     color: '#fff',
     fontSize: 24,
  },
});