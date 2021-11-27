import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Text} from '../Text';

export const TextButton = (props: any) => {
  const {text, onPress} = props;

  return (
    <TouchableOpacity testID={'textBtn'} {...props} onPress={onPress}>
      <Text testID={'textBtnText'} style={{textDecorationLine: 'underline'}}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};
