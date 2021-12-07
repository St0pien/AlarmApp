import React from 'react';
import { StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native';
import { colors } from '../config';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: colors.primary }}>
        <TouchableNativeFeedback
          background={TouchableNativeFeedback.Ripple('#fff', true)}
          onPress={() => navigation.navigate('AlarmList')}
        >
          <View>
            <Text style={styles.h1}>Sqlite App</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
      <Text style={styles.p}>manage sqlite</Text>
      <Text style={styles.p}>use animation</Text>
      <Text style={styles.p}>use ring</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary
  },
  h1: {
    fontSize: 56,
    color: colors.text,
    fontFamily: 'font-bold',
    margin: 15
  },
  p: {
    fontFamily: 'font',
    fontSize: 24,
    color: colors.text
  }
});
