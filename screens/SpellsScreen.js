import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Alert
} from 'react-native';
import Spells from '../assets/spells'
import SpellItem from '../components/SpellItem'

export default class SpellsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterSpells: Spells
    }
  }

  static navigationOptions = {
    title: 'Spells',
  };

  render() {
    const spellUl = this.state.filterSpells.map((spell) => {
      return (
        <SpellItem
          key={spell['name']}
          spellInfo={spell}
          navCall={(n) => {
            this.props.navigation.navigate("HomeStack");
          }}
        />
      )
    });
    return (
      <ScrollView style={styles.container}>
        {spellUl}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
