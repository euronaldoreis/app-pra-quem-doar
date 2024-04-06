import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { Feather } from '@expo/vector-icons';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import powerful from '../assets/powerful.png';

const Onboarding: React.FC = () => {
  const navigation = useNavigation();

  function handleStart() {
    navigation.navigate('Signin');
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Faça a diferença no mundo!</Text>
      <Image source={powerful} style={styles.image}/>
      <Text style={styles.subTitle}>Encontre uma causa para ajudar e faça a diferença para quem mais precisa</Text>
      <TouchableOpacity style={styles.button} onPress={handleStart}>
        <Text style={styles.titleButton}>Avançar</Text>
        <Feather 
          style={styles.iconChevron}
          name="chevron-right" 
        />
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 28,
    fontFamily: fonts.heading,
    textAlign: 'center',
    color: colors.heading,
    marginTop: 38,
    lineHeight: 34,
  },
  subTitle: {
    textAlign: 'center',
    fontSize: 18,
    paddingLeft: 20,
    paddingRight: 20,
    color: colors.heading,
    fontFamily: fonts.text,
  },
  button: {
    backgroundColor: colors.primary,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginRight: 10,
    padding: 20,
  },
  titleButton: {
    fontSize: 14,
    color: colors.white,
  },
  iconChevron: {
    color: colors.white,
    marginLeft: 10,
    fontSize: 22,
  },
  image: {
    resizeMode: 'cover',
    width: 300,
    height: Dimensions.get('window').width * 0.7,
  }
})

export default Onboarding;
