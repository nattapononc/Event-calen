import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';

export default class Note extends React.Component {
  render() {
    return (

      <View key={this.props.keyval} style={styles.noteBox}>
        <Text style={styles.noteTextIndex} >{this.props.keyval+1}</Text>

        <View style={styles.note}>
          <Text style={styles.noteTextDate} >{this.props.val.date}</Text>
          <Text style={styles.noteText} >Note: {this.props.val.note}</Text>
    
        </View>
        <TouchableOpacity onPress={this.props.deleteMethod} style={styles.noteDelete}>
          <Text style={styles.noteDeleteText}>Delete</Text>
        </TouchableOpacity>    
      </View>

    );
  }
}

const styles = StyleSheet.create({
  noteBox: {
    position: 'relative',
    paddingTop: 10,
    paddingRight: 50,
    paddingBottom: 10,
    paddingLeft: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#EDEDED',
    flexDirection: 'row',
  },
  note: {
    marginLeft: 10,
    marginRight: 50,
  },
  noteTextIndex: {
    alignSelf: 'flex-start', 
    padding: 10,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: '#E91E63',
    fontSize: 24,
    color: 'white',
  },
  noteTextDate: {
    marginTop: -3,
    color: 'red',
    fontSize: 16,
  },
  noteText: {
    fontSize: 16,
  },
  noteDelete: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2980B9',
    padding: 10,
    top: 10,
    bottom: 10,
    right: 10,
  },
  noteDeleteText: {
    color: 'white',
  },
});
