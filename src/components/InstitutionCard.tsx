import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View
} from 'react-native';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface InstitutionCardProps extends TouchableOpacityProps {
  data: {
    name: string;
    photo: string;
  }
}

const baseURL = "http://localhost:19000/src/assets";

export function InstitutionCard({
  data,
  ...rest
} : InstitutionCardProps) {

  return (
    <TouchableOpacity
        style={styles.container}
        {...rest}
    >
      <View style={styles.containerHeader}>
        <Image 
          source={{ uri: `${baseURL}` + data.photo }} 
          style={styles.image}
        />
      </View>
        <View style={styles.containerFooter}>
          <Text style={styles.text}>
              {data.name}
          </Text>
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 200,
    // height: 200,
    backgroundColor: colors.shape,
    borderRadius: 20,
    // paddingVertical: 10,
    alignItems: 'center',
    margin: 10
  },
  containerHeader: {
    width: '100%',
    height: 100,
    // backgroundColor: 'red',
    // borderRadius: 20,
  },
  image: {
    // backgroundColor: 'green',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: '100%',
    height: 100,
  },
  containerFooter: {
    height: 50,
    width: '100%',
    alignItems: 'center',
  },
  text: {
    color: colors.heading,
    fontFamily: fonts.heading,
    marginTop: 10,
    // marginVertical: 16,
  },
})