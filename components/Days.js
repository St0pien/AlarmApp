import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback, useEffect, useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableNativeFeedback
} from 'react-native';
import { colors, week } from '../config';

const Days = ({ visible, enabledDays, onSelect }) => {
  const heightAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(heightAnim, {
      toValue: visible ? 50 : 0,
      duration: 300,
      useNativeDriver: false
    }).start();
  }, [visible]);

  const dayMap = week.map(() => false);
  enabledDays.forEach(d => (dayMap[d] = true));
  return (
    <View>
      <Text style={styles.daysText}>
        {!visible ? enabledDays.map(d => week[d].text).join(', ') : null}
      </Text>
      <Animated.View style={{ ...styles.btns, height: heightAnim }}>
        {week.map(({ short }, i) => (
          <View
            key={i}
            style={{
              backgroundColor: dayMap[i] ? colors.primary : colors.primaryDark,
              ...styles.btn
            }}
          >
            <TouchableNativeFeedback
              onPress={() => onSelect(i)}
              background={TouchableNativeFeedback.Ripple('#fff', true)}
            >
              <View style={styles.btnInner}>
                <Text style={styles.btnText}>{short}</Text>
              </View>
            </TouchableNativeFeedback>
          </View>
        ))}
      </Animated.View>
    </View>
  );
};

export default Days;

const styles = StyleSheet.create({
  daysText: {
    color: 'white',
    fontFamily: 'font',
    fontSize: 18
  },
  btnText: {
    color: 'white',
    fontFamily: 'font-bold',
    fontSize: 15
  },
  btns: {
    overflow: 'hidden',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    margin: 5
  },
  btn: {
    width: 40,
    height: 40,
    borderRadius: 40
  },
  btnInner: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
