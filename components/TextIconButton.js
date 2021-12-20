import React from 'react';
import {Text, Image, TouchableOpacity} from 'react-native';
import {FONTS, COLORS} from '../constants';

export const TextIconButton = ({
  containerStyle,
  label,
  labelStyle,
  icon,
  iconStyle,
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
      <Text style={{...FONTS.body3, ...labelStyle}}>{label}</Text>
      <Image
        source={icon}
        style={{
          marginLeft: 5,
          width: 15,
          height: 15,
          tintColor: COLORS.black,
          ...iconStyle,
        }}
      />
    </TouchableOpacity>
  );
};
