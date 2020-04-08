import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';

export default class EventScreen extends Component {
  render() {
      return (
        <View style={styles.container}>
          <ScrollView style={styles.tescht}>
            <Text>1</Text>
            <Text>2</Text>
            <Text>3</Text>
            <Text>4</Text>
            <Text>5</Text>
            <Text>6</Text>
            <Text>7</Text>
            <Text>8</Text>
            <Text>9</Text>
            <Text>10</Text>
            <Text>11</Text>
            <Text>12</Text>
            <Text>13</Text>
            <Text>14</Text>
            <Text>15</Text>
            <Text>16</Text>
            <Text>17</Text>
            <Text>18</Text>
            <Text>19</Text>
            <Text>20</Text>
            <Text>21</Text>
          </ScrollView>
        </View>

    );
  }
}

module.exports.EventScreen     = EventScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  tescht: {
    marginTop: 0,
    backgroundColor: 'red',
    width: '100%',
    height: 350
  }
});