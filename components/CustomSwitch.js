import React from 'react';
import {View, Text, TouchableWithoutFeedback, StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../constants';

export const CustomSwitch = ({value, onChange}) => {
  return (
    <TouchableWithoutFeedback onPress={() => onChange(!value)}>
      <View style={{flexDirection: 'row'}}>
        {/* Switch */}
        <View
          style={value ? styles.switchOnContainer : styles.switchOffContainer}>
          <View
            style={{
              ...styles.dot,
              backgroundColor: value ? COLORS.white : COLORS.gray,
            }}></View>
        </View>

        {/* Text */}
        <Text
          style={{
            color: value ? COLORS.primary : COLORS.gray,
            marginLeft: SIZES.base,
            ...FONTS.body4,
          }}>
          Save me
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  switchOnContainer: {
    width: 40,
    height: 20,
    paddingRight: 4,
    justifyContent: 'center',
    alignItems: 'flex-end',
    borderRadius: 10,
    backgroundColor: COLORS.primary,
  },
  switchOffContainer: {
    width: 40,
    height: 20,
    paddingLeft: 4,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: COLORS.gray,
    borderRadius: 10,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
});
