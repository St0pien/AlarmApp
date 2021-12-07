import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import AddButton from '../components/AddButton';
import Alarm from '../components/Alarm';
import { colors } from '../config';
import DB from '../utils/DB';

const AlarmList = ({ navigation }) => {
  const [alarms, setAlarms] = useState([]);

  useFocusEffect(
    useCallback(() => {
      (async () => {
        const db = await DB.getAlarms();
        setAlarms(db);
      })();
    }, [])
  );

  const onDelete = id => {
    setAlarms(alarms.filter(a => a.id != id));
    DB.delete(id);
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.container}>
        {alarms.map(({ id, hour }, index) => (
          <Alarm key={id} id={id} hour={hour} onDelete={onDelete} />
        ))}
      </ScrollView>
      <AddButton name="plus" onPress={() => navigation.navigate('AddAlarm')} />
    </View>
  );
};

export default AlarmList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryDark
  }
});
