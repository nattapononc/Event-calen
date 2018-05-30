import React from 'react';
import { StyleSheet, Text, View, Platform, TextInput,Button} from 'react-native';
import axios from 'axios';

export default class Note extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      name: '',
      text: 'here',
    }
  }


    handleSubmit() {


        const user = {
            name: this.state.text
        };

        axios.post('http://192.168.40.165:2403/users', user)
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
    return (
      <View style={styles.container}>
      
        <Button onPress={this.handleSubmit.bind(this)} title="Edit" />
      </View>
      )
    }
  
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignSelf: "flex-end",
    flex: 1,
    
  },
});
