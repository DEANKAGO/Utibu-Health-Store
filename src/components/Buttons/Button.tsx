import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export type ButtonProps = {
  title: string;
  onPress: () => void;
  labelColor: string;
};

export const Button = ({title, onPress, labelColor}: ButtonProps) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={{color: labelColor}}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    marginTop: 15,
    paddingVertical: 15,
    borderRadius: 25,
    width: '80%',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontWeight: '700',
    fontSize: 18,
  },
});
