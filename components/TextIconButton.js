import React from 'react';
import {Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {FONTS, COLORS} from '../constants';

export const TextIconButton = ({
  containerStyle,
  label,
  labelStyle,
  icon,
  iconStyle,
  iconPosition = 'LEFT',
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        ...containerStyle,
      }}
      onPress={onPress}>
      {iconPosition === 'LEFT' && (
        <Image
          source={icon}
          style={{
            ...styles.image,
            ...iconStyle,
          }}
        />
      )}

      <Text style={{...FONTS.body3, ...labelStyle}}>{label}</Text>

      {iconPosition === 'RIGHT' && (
        <Image
          source={icon}
          style={{
            ...styles.image,
            ...iconStyle,
          }}
        />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    marginLeft: 5,
    width: 15,
    height: 15,
    tintColor: COLORS.black,
  },
});
