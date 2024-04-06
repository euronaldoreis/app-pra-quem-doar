import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps
} from 'react-native';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface CauseButtonProps extends TouchableOpacityProps {
  title: string;
  active?: boolean;
}

export function CauseButton({
  title,
  active = false,
  ...rest
} : CauseButtonProps) {
  return (
    <TouchableOpacity
        style={[
            styles.container,
            active && styles.containerActive
        ]}
        {...rest}
    >
        <Text style={[
            styles.text,
            active && styles.textActive
        ]}>
            {title}
        </Text>
    </TouchableOpacity>
)
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.shape,
    minWidth: 76,
    paddingRight: 10,
    paddingLeft: 10,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginHorizontal: 5,
  },
  containerActive: {
    backgroundColor: colors.primary,
  },
  text: {
    color: colors.heading,
    fontFamily: fonts.text
  },
  textActive: {
    color: colors.white,
    fontFamily: fonts.heading,
  }
})
