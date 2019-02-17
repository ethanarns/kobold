import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text
} from 'react-native';

export default class SpellsScreen extends React.Component {
  static navigationOptions = {
    title: 'Spells',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>ASdf</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
