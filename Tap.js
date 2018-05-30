import React from 'react';
import { StyleSheet, Text, View, Platform, TextInput,Button} from 'react-native';
import axios from 'axios';

export default class Tap extends React.Component {

  componentDidMount(){
    axios.get('http://192.168.40.165:2403/users')
    .then(res => {const name = res.data
    this.setState({name})
    })
  }

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      name: '',
      text: '',
    }
  }


    handleSubmit() {


        const user = {
            name: this.state.name
        };

        axios.post('http://192.168.40.165:2403/users', user)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
            .catch(error => console.log(error))

        axios.get('http://192.168.40.165:2403/users', user)
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
      <View>
        <View style = {{alignSelf: 'flex-end', }}/>
        <Button onPress={this.handleSubmit.bind(this)} title="Edit" />  
        
        <Text> Note :</Text>
        <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1, margin: 20}}
          onChangeText={(text) => this.handleChange(text)}
          value={this.state.text}/>
        <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1, margin: 20}}
          onChangeText={(text) => this.handleChange(text)}
          value={this.state.text}/>
        <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1, margin: 20}}
          onChangeText={(text) => this.handleChange(text)}
          value={this.state.text}/>
        <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1, margin: 20}}
          onChangeText={(text) => this.handleChange(text)}
          value={this.state.text}/>
        <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1, margin: 20}}
          onChangeText={(text) => this.handleChange(text)}
          value={this.state.text}/>
        <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1, margin: 20}}
          onChangeText={(text) => this.handleChange(text)}
          value={this.state.text}/>
      </View>
      )
    }
  
}

const styles = StyleSheet.create({
  container: {
    
    
  },
});
