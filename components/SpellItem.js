import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class SpellItem extends React.Component {
  render() {
    const spellData = {};
    if (this.props.spellInfo.level <= 0) {
      spellData.subtitle = "Cantrip " + this.props.spellInfo.school;
    } else {
      spellData.subtitle = "Level " + this.props.spellInfo.level + " " + this.props.spellInfo.school;
    }
    return (
      <View style={styles.fullbox}>
        <Text style={{margin: 0, color: 'rgba(0,0,0,0.9)'}}>{this.props.spellInfo.name}</Text>
        <Text style={{margin: 0, color: 'rgba(0,0,0,0.5)'}}>{spellData.subtitle}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  fullbox: {
    height: 45,
    borderTopColor: 'rgba(0,0,0,0.2)',
    borderTopWidth: 1,
    padding: 3
  }
});