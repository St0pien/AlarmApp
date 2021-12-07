import React from 'react';
import {
  StyleSheet,
  View,
  TouchableNativeFeedback,
  Animated
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { colors } from '../config';

const IconButton = ({ name, onPress, style, iconStyle, animStyle }) => {
  return (
    <View style={style}>
      <TouchableNativeFeedback
        onPress={onPress}
        background={TouchableNativeFeedback.Ripple(colors.primaryLight, true)}
      >
        <View style={styles.iconInner}>
          <Animated.View style={animStyle}>
            <FontAwesome5 style={iconStyle} name={name} />
          </Animated.View>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  iconInner: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
