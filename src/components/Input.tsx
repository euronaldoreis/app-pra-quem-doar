import React from 'react';
import { StyleSheet, TextInput, TextInputProps, TouchableOpacity, View } from 'react-native';

import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { MaterialIcons } from '@expo/vector-icons';


interface InputProps extends TextInputProps {
  placeholder: string;
  handleSubmit: any;
}

export function Input({ placeholder, handleSubmit, ...rest}: InputProps){
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        returnKeyType="search"
        {...rest}
      />
      <TouchableOpacity style={styles.icon} onPress={() => handleSubmit()}>
        <MaterialIcons name="search" size={25} color={colors.heading} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 20,
    borderWidth: 1,
    borderColor: colors.gray,
    borderRadius: 12,
  },
  input: {
    color: colors.heading,
    width: '85%',
    fontSize: 18,
    padding: 10,
    textAlign: 'left',
  },
  icon: {
    width: '15%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
