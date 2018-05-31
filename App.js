import * as React from 'react';
import { View, StyleSheet, Dimensions,Platform } from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import  Tap  from './Tap';
import AgendaScreen from './agenda';
import EventsView from './event2';
import Main from './Main';
import Profile from './Profile';
import Event from './Event';


const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};

const FirstRoute = () => <View style={[ styles.container, { backgroundColor: '#DCDCDC' } ]} ><Main/></View>;
const SecondRoute = () => <View style={[ styles.container, { backgroundColor: '#DCDCDC' } ]}><Event/></View>;
const ThirdRoute = () => <View style={[ styles.container, { backgroundColor: '#DCDCDC'}]} ><Profile/></View>;
const FourRoute = () => <View style={[ styles.container, ]}> <AgendaScreen/></View>;

export default class TabViewExample extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    index: 0,
    routes: [
      { key: 'first', title: 'Note' },
      { key: 'second', title: 'Event' },
      { key: 'third', title: 'Me'},
      { key: 'four', title: '📅'},
    ],
  };
  }
  

  _handleIndexChange = index => this.setState({ index });

  _renderHeader = props => <TabBar {...props} />;

  _renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
    four: FourRoute,
  });

  render() {
    return (
      <View style={styles.container}>
      <TabViewAnimated
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onIndexChange={this._handleIndexChange}
        initialLayout={initialLayout}
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: Platform.OS === "ios" ? 25 : 0,
  },
});