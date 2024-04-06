import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  Keyboard,
  TextInput,
  Text,
  Image,
  Dimensions,
  View,
  TouchableOpacity
} from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { Button } from '../components/Button';
import signup from '../assets/signup.png';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { Ionicons } from '@expo/vector-icons';

const Signup = () => {

  const [name, setName] = useState<string>();
  const [secure, setSecure] = useState(true);

  const navigation = useNavigation();

  const handleSubmit = () => {
    navigation.navigate('Home');
  }

  return (
    <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
              <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.content}>
                  <View style={styles.form}>
                    <View style={styles.header}>
                      <Image source={signup} style={styles.image}/>
                    </View>
                    <Text style={styles.title}>Cadastre-se</Text>
                    <TextInput 
                      style={styles.input}
                      placeholder="Digite o seu nome"
                    />
                    <TextInput 
                      style={styles.input}
                      placeholder="Digite o seu e-mail"
                      keyboardType="email-address"
                    />
                    <View style={styles.password}>
                      <TextInput 
                        style={styles.inputPassowrd}
                        placeholder="Digite uma senha"
                        secureTextEntry={secure}
                        returnKeyType="go"
                        autoCorrect={false}
                      />
                      <TouchableOpacity style={styles.icon} onPress={() => setSecure(!secure)}>
                        <Ionicons name={secure ? "eye" : 'eye-off'} size={25} color={colors.heading}/>
                      </TouchableOpacity>
                    </View>
                    <Text style={styles.textTerms}>
                      Ao se cadastrar, você concorda com os nossos Termos de uso e Política de Privacidade
                    </Text>
                    <View style={styles.footer}>
                      <Button 
                        title="Continuar"
                        onPress={handleSubmit}
                      />
                    </View>
                  </View>
                </View>
              </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: colors.white,
  },
  content: {
    flex: 1,
    width: '100%',
  },
  form: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 40,
    alignItems: 'center',
    width: '100%',
  },
  header: {
    alignItems: 'center',
  },
  image: {
    resizeMode: 'cover',
    width: 300,
    height: Dimensions.get('window').width * 0.7,
  },
  title: {
    marginTop: 6,
    fontSize: 28,
    fontFamily: fonts.heading,
    textAlign: 'center',
    color: colors.heading,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.gray,
    color: colors.heading,
    height: 55,
    width: '100%',
    fontSize: 18,
    marginTop: 20,
    padding: 10,
    textAlign: 'left',
    borderRadius: 12,
  },
  password: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 20,
    borderWidth: 1,
    borderColor: colors.gray,
    borderRadius: 12,
  },
  inputPassowrd: {
    fontSize: 18,
    padding: 10,
    color: colors.heading,
    width: '85%',
    textAlign: 'left',
  },
  icon: {
    width: '15%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textTerms: {
    width: '100%',
    textAlign: 'center',
    marginTop: 20,
    fontFamily: fonts.complement,
    color: colors.heading,
    fontSize: 14,
  },
  footer: {
    width: '100%',
    marginTop: 20,
    paddingHorizontal: 40
  },
})

export default Signup;
