import React from 'react';
import { StyleSheet, Text, View, ToastAndroid } from 'react-native';
import AddButton from '../components/AddButton';
import { colors } from '../config';
import DB from '../utils/DB';

const AddAlarm = () => {
  const addAlarm = () => {
    DB.addAlarm('00:00');
    ToastAndroid.show('Alarm added', ToastAndroid.SHORT);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>"+" Dodaje godzine 00:00</Text>
      <AddButton name="plus" onPress={addAlarm} />
    </View>
  );
};

export default AddAlarm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryDark,
    alignItems: 'center'
  },
  h1: {
    marginTop: 200,
    color: colors.text,
    fontSize: 32,
    fontFamily: 'font'
  }
});
