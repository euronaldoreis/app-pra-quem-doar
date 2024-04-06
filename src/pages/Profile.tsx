import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header';
import colors from '../styles/colors';
import { MaterialIcons } from '@expo/vector-icons';
import fonts from '../styles/fonts';
import { Button } from '../components/Button';
import { useNavigation } from '@react-navigation/core';

const Profile = () => {

  const navigation = useNavigation();

  function handleLogout() {
    navigation.navigate('Signin');
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Header />
      </View>
      <View style={styles.separator}></View>
      <View style={styles.containerActions}>
        <View style={styles.containerActionsItems}>
          <View style={styles.icon}>
            <MaterialIcons
                name="security"
                size={30}
                color={colors.primary}
            />
          </View>
          <View style={styles.containerActionsItemsText}>
            <Text style={styles.containerActionsItemsTitle}>Política de privacidade</Text>
          </View>
        </View>
        <View style={styles.containerActionsItems}>
          <View style={styles.icon}>
            <MaterialIcons
                name="category"
                size={30}
                color={colors.primary}
            />
          </View>
          <View style={styles.containerActionsItemsText}>
            <Text style={styles.containerActionsItemsTitle}>Termos de uso </Text>
          </View>
        </View>
        <View style={styles.containerActionsItems}>
          <View style={styles.icon}>
            <MaterialIcons
                name="support"
                size={30}
                color={colors.primary}
            />
          </View>
          <View style={styles.containerActionsItemsText}>
            <Text style={styles.containerActionsItemsTitle}>Suporte</Text>
          </View>
        </View>
      </View>
      <View style={styles.separator}></View>
      <View style={styles.containerActions}>
        <View style={styles.buttonLogout}>
          <Button
            title="Sair"
            onPress={handleLogout}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  separator: {
    borderTopWidth: 0.2,
    color: colors.shape,
    opacity: 0.2,
    marginBottom: 30,
  },
  containerActions: {
    flex: 1,
    height: '100%',
    marginTop: 10,
    paddingHorizontal: 20,
  },
  containerActionsItems: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  icon: {
    width: 60,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerActionsItemsText: {
    width: '70%',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft: 20,
  },
  containerActionsItemsTitle: {
    fontFamily: fonts.heading,
    fontSize: 16,
  },
  about: {
    textAlign: 'left',
    color: colors.heading,
    fontFamily: fonts.text,
    fontSize: 16,
  },
  buttonLogout: {
    marginTop: '20%',
  },
});

export default Profile;
