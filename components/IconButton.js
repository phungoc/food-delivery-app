import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {COLORS} from '../constants';

export const IconButton = ({containerStyle, icon, iconStyle, onPress}) => {
  return (
    <TouchableOpacity style={{...containerStyle}} onPress={onPress}>
      <Image
        style={{width: 30, height: 30, tintColor: COLORS.gray2, ...iconStyle}}
        source={icon}
      />
    </TouchableOpacity>
  );
};
