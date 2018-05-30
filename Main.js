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
    .then(res => {const note = res.data;
    this.setState({note})
    })
  }
  
   constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this)
        this.state = {
            noteArray: [],
            noteText: '',
            note: '',
            text: '',
            id: '',
            
        }
      }
    
      
      handleSubmit() {


        const note = {
            note: this.state.text
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
      this.setState({note:text})
    }    
    
    handleDelete = event => {
      this.setState({ id: event.target.value });
    }

    handleOut = event => {
      event.preventDefault();
  
      axios.delete(`http://localhost:2403/test/${this.state.id}`)
        .then(res => {
          console.log(res);
          console.log(res.data);
      })
    }


  render() {
    
    let notes=this.state.noteArray.map((val,key) => {
     return <Note prueba={'Note : '} key={key} keyval={key} val={val} deleteMethod={()=>this.deleteNote(key)} />;
    });
    
    return (
  
      <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerText}>
              NOTE
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
              placeholderTextColor='#b2b2b2'
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
  	flex:1,
  },
  header: {
    borderRadius:5,
  	backgroundColor: '#3498db',
  	alignItems: 'center',
  	justifyContent: 'center',
  	borderBottomWidth: 0,
  },
  headerText: {
  	color: 'white',
  	fontSize: 18,
  	padding: 26,
  },
  scrollContainer: {
  	flex: 1,
  	paddingTop: 50,
  	paddingBottom: 100,
  },
  footer: {
  	position: 'absolute',
  	top: 70,
  	left: 0,
  	right: 0,
  	zIndex: 10,
  },
  textInput: {
    borderRadius:10,
    flex:1,
    flexDirection: 'column',
    alignItems: 'flex-start',
  	alignSelf: 'stretch',
  	color: '#000000',
  	fontSize: 16,
  	padding: 20,
  	paddingLeft: 20,
  	backgroundColor: '#FFFFFF',
  	borderTopWidth: 0,
  	borderRightColor: '#EDEDED',
  },
  addButton: {
  	position: 'absolute',
  	zIndex: 20,
  	right: 20,
  	bottom: 25,
  	backgroundColor: '#3498db',
  	width: 70,
  	height: 70,
  	borderRadius: 50,
  	alignItems: 'center',
  	justifyContent: 'center',
  	elevation: 8,  
  },
  addButtonText: {
  	color: '#FFF',
  	fontSize: 30,
  },
});