import Tabbar from 'react-native-tabbar-bottom'
import React, { Component } from 'react';
import { 
  Text,
  View, 
  StyleSheet,
  } from 'react-native';
import EventsView from './event2';


export default class Event extends Component {
  constructor() {
    super()
    this.state = {
      page: "Event P",
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {
          // if you are using react-navigation just pass the navigation object in your components like this:
          // {this.state.page === "HomeScreen" && <MyComp navigation={this.props.navigation}>Screen1</MyComp>}
        }
        {this.state.page === "Event P" && <View style={[ styles.container]}><EventsView/></View>}
        {this.state.page === "Event N" && <View style={[ styles.container]}><Text> page2</Text></View>}


        <Tabbar
          stateFunc={(tab) => {
            this.setState({page: tab.page})
            //this.props.navigation.setParams({tabTitle: tab.title})
          }}
          activePage={this.state.page}
          tabs={[
            {
              page: "Event P",
              icon: "ios-calendar",
            },

            {
              page: "Event N",
              icon: "ios-contact",
            },
          ]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});