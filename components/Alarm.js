import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, View, Switch, Animated } from 'react-native';
import { colors } from '../config';
import IconButton from './IconButton';
import Days from './Days';

const Alarm = ({ id, hour, onDelete }) => {
  const [enabled, setEnabled] = useState(false);
  const [toggled, setToggled] = useState(false);
  const [days, setDays] = useState([]);

  const onSelect = day => {
    if (days.indexOf(day) > -1) {
      setDays(days.filter(d => d != day));
    } else {
      setDays([day, ...days].sort());
    }
  }

  const rotateAnimValue = useRef(new Animated.Value(0)).current;
  const rotateAnim = rotateAnimValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg']
  });

  const rotateUp = () => {
    Animated.timing(rotateAnimValue, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true
    }).start();
  };

  const rotateDown = () => {
    Animated.timing(rotateAnimValue, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true
    }).start();
  };

  useEffect(() => {
    if (toggled) rotateUp();
    else rotateDown();
  }, [toggled]);

  return (
    <View style={styles.container}>
      <View style={styles.panels}>
        <View style={styles.right}>
          <Text style={styles.hour}>{hour}</Text>
          <IconButton
            onPress={() => onDelete(id)}
            style={styles.trashContainer}
            iconStyle={styles.trash}
            name="trash"
          />
        </View>
        <View style={styles.left}>
          <Switch
            trackColor={{ false: 'gray', true: colors.primaryLight }}
            thumbColor={'white'}
            value={enabled}
            onValueChange={val => setEnabled(val)}
          />
          <IconButton
            onPress={() => setToggled(!toggled)}
            name="chevron-down"
            style={styles.chevronContainer}
            iconStyle={styles.chevron}
            animStyle={{ transform: [{ rotateX: rotateAnim }] }}
          />
        </View>
      </View>
      <Days visible={toggled} enabledDays={days} onSelect={onSelect} />
    </View>
  );
};

export default Alarm;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    paddingVertical: 20,
    borderBottomWidth: 2,
    borderBottomColor: colors.primary,
  },
  panels: {
    flexDirection: 'row'
  },
  hour: {
    fontSize: 54,
    fontFamily: 'font',
    color: 'white'
  },
  trashContainer: {
    width: 50,
    height: 50,
    marginLeft: 10
  },
  trash: {
    fontSize: 25,
    color: 'white'
  },
  right: {
    justifyContent: 'space-between'
  },
  left: {
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    flex: 1
  },
  chevronContainer: {
    width: 50,
    height: 50,
    marginTop: 50,
    marginRight: 15
  },
  chevron: {
    color: 'white',
    fontSize: 30
  }
});
