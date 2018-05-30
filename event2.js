import React, { Component } from 'react';
import axios from 'axios';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Alert,
  Image,
  ListView,
  TouchableOpacity
} from 'react-native';

export default class EventsView extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    list=[
      {day:1, month: 'Sep', time: ' 9.00 am - 10.00 am', text: 'If you like me or love me just say Yes Yes Yes'}, 
      {day:2, month: 'Jan', time: '11.00 am - 12.30 am', text: 'football'}, 
      {day:3, month: 'Aug', time: '12.00 am -  1.00 pm', text: 'breakfast buffe'}, 
      {day:4, month: 'Dec', time: '13.30 pm -  2.30 pm', text: 'tennis'}, 
      {day:5, month: 'Jul', time: '14.00 pm -  4.00 pm', text: 'beef 🙂'}, 
      {day:6, month: 'Oct', time: '15.00 pm -  4.00 pm', text: 'boombayah'}, 
      {day:7, month: 'Sep', time: '17.00 pm -  7.00 pm', text: 'Movie'},
      {day:8, month: 'Jan', time: '18.00 pm -  8.30 pm', text: 'Bad Boy'},
      {day:9, month: 'May', time: '21.00 pm - 12.00 pm', text: 'Im so cool!'},
      {day:10, month: 'Kuy', time: ' 1.00 am - 7.00 am', text: 'boy in luv'}, 
    ];
    this.state = { 
      day:'',
      month:'',
      time:'',
      dataSource: ds.cloneWithRows(list),
    };
  }
  

  eventClickListener = (day,month,time,text) => {
    console.log(day+month+time)
    this.setState({day})
    this.setState({month})
    this.setState({time})
    this.setState({text})
    Alert.alert(
      'Want to join this event?',
      'Answer',
      [
        {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'OK', onPress: () => this.handleSubmit()},
      ],
        { cancelable: false }
      );
  }

  handleSubmit() {


    const note = {
        day: this.state.day,
        month:this.state.month,
        time:this.state.time,
        text:this.state.text,
        
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
    return (
      <View style={styles.container}>
        <ListView enableEmptySections={true}
          style={styles.eventList}
          dataSource={this.state.dataSource}
          renderRow={(event) => {
            return (
              <TouchableOpacity onPress={() => this.eventClickListener(event.day,event.month,event.time,event.text)}>
                <View style={styles.eventBox}>
                  <View style={styles.eventDate}>
                     <Text  style={styles.eventDay}>{event.day}</Text>
                     <Text  style={styles.eventMonth}>{event.month}</Text>
                  </View>
                  <View style={styles.eventContent}>
                    <Text  style={styles.eventTime}>{event.time}</Text>
                    <Text  style={styles.userName}>Event: </Text>
                    <Text  style={styles.description}>{event.text}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )
          }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: "#DCDCDC",
  },
  eventList:{
    marginTop:20,
  },
  eventBox: {
    padding:10,
    marginTop:5,
    marginBottom:5,
    flexDirection: 'row',
  },
  eventDate:{
    flexDirection: 'column',
  },
  eventDay:{
    fontSize:50,
    color: "#0099FF",
    fontWeight: "600",
  },
  eventMonth:{
    fontSize:16,
    color: "#0099FF",
    fontWeight: "600",
  },
  eventContent: {
    flex:1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft:10,
    backgroundColor: '#FFFFFF',
    padding:10,
    borderRadius:10
  },
  description:{
    fontSize:15,
    color: "#646464",
  },
  eventTime:{
    fontSize:18,
    color:"#151515",
  },
  userName:{
    fontSize:16,
    color:"#151515",
  },
});