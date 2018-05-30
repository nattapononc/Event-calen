import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Note from './Noter';

export default class Main extends React.Component {

  constructor(props) {
    super(props);
  
    this.state = {
    	noteArray: [],
    	noteText: '',
    };
  }

  render() {

  	let notes = this.state.noteArray.map((val, key) => {
  		return <Note key={key} keyval={key} val={val}
  			   deleteMethod={ () => this.deleteNote(key) } />
  	});

    return (
      <View style={styles.container}>
      	<View style={styles.header}>
      	  <Text style={styles.headerText}>- NOTER -</Text>
      	</View>

      	<ScrollView style={styles.scrollContainer}>
      		{notes}
      	</ScrollView>

      	<View style={styles.footer}>
      		<TextInput 
      		  style={styles.textInput} 
      		  onChangeText={(noteText) => this.setState({noteText})}
      		  value={this.state.noteText}
      		  placeholder='>note' 
      		  placeholderTextColor='white' 
      		  underlineColorAndroid='transparent'>
      		</TextInput>
      	</View>

      	<TouchableOpacity onPress={ this.addNote.bind(this) } style={styles.addButton}>
      		<Text style={styles.addButtonText}>+</Text>
      	</TouchableOpacity>

      </View>
    );
  }

  addNote() {

  	if (this.state.noteText) {
  		var d = new Date();
  		this.state.noteArray.push({
  			'date': d.getFullYear() + 
  			"/" + (d.getMonth() + 1) +
  			"/" + d.getDate(),
  			'note': this.state.noteText
  		});
  		this.setState({ noteArray: this.state.noteArray })
  		this.setState({ noteText: '' });
  	}

  }

  deleteNote(key) {
  	this.state.noteArray.splice(key, 1);
  	this.setState({ noteArray: this.state.noteArray })
  }

}

const styles = StyleSheet.create({
  container: {
  	flex:1,
  },
  header: {
  	backgroundColor: '#0066ff',
  	alignItems: 'center',
  	justifyContent: 'center',
  	borderBottomWidth: 10,
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
  	alignSelf: 'stretch',
  	color: '#FFF',
  	fontSize: 16,
  	padding: 20,
  	paddingLeft: 20,
  	backgroundColor: '#252525',
  	borderTopWidth: 2,
  	borderRightColor: '#EDEDED',
  },
  addButton: {
  	position: 'absolute',
  	zIndex: 11,
  	right: 20,
  	bottom: 90,
  	backgroundColor: '#0066ff',
  	width: 90,
  	height: 90,
  	borderRadius: 50,
  	alignItems: 'center',
  	justifyContent: 'center',
  	elevation: 8,  
  },
  addButtonText: {
  	color: '#FFF',
  	fontSize: 24,
  },
});
