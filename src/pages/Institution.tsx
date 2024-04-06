import React from 'react'
import { 
  SafeAreaView, 
  ScrollView, 
  Text, 
  View, 
  Image, 
  StyleSheet, 
  FlatList, 
  TouchableOpacity, 
  Linking,
  Share
} from 'react-native';
import { CauseButton } from '../components/CauseButton';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';

const baseURL = "http://localhost:19000/src/assets";

const Institution = ({ route } : any) => {
  const { data } = route.params;

  const navigation = useNavigation();

  function handleBackButtonClick() {
    navigation.goBack();
    return true;
  }

  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          `Pra quem doar | Conheça a Instituição ${data.name}`,
        url: data.photo,
      });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.containerHeader}>
          <View style={styles.containerHeaderIcons}>
            <MaterialIcons 
              name="arrow-back"
              size={30}
              color={colors.white}
              onPress={() => handleBackButtonClick()}
              style={styles.iconBack}
            />
            <MaterialIcons 
              name="share"
              size={30}
              color={colors.primary}
              onPress={() => onShare()}
              style={styles.iconShare}
            />
          </View>
          <Image 
            source={{ uri: `${baseURL}` + data.photo }} 
            style={styles.image}
          />
          <View style={styles.containerTitle}>
          </View>
            <Text style={styles.title}>{data.name}</Text>
        </View>
        <View style={styles.containerAbout}>
          <Text style={styles.titleSection}>Sobre a instituição</Text>
          <Text style={styles.about}>{data.about}</Text>
        </View>
        <View style={styles.containerSection}>
          <Text style={styles.titleSection}>Estão precisando</Text>
          <FlatList
            data={data.necessities}
            keyExtractor={(item) => String(item)}
            renderItem={({ item }) => (
              <CauseButton
                title={item}
              />
            )}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.necessitiesList}
          />
        </View>
        <View style={styles.containerSection}>
          <Text style={styles.titleSection}>Contato</Text>
          <View style={styles.containerContact}>
            <View style={styles.iconCircle}>
              <MaterialIcons
                  name="location-pin"
                  size={30}
                  color={colors.primary}
              />
            </View>
            <View style={styles.containerContactText}>
              <Text style={styles.containerContactTitle}>Endereço</Text>
              <Text style={styles.about}>{data.contact.address}</Text>
            </View>
          </View>
          <View style={styles.containerContact}>
            <View style={styles.iconCircle}>
              <MaterialIcons
                  name="email"
                  size={30}
                  color={colors.primary}
              />
            </View>
            <View style={styles.containerContactText}>
              <Text style={styles.containerContactTitle}>E-mail</Text>
              <Text style={styles.about}>{data.contact.email}</Text>
            </View>
          </View>
          <View style={styles.containerContact}>
            <View style={styles.iconCircle}>
              <MaterialIcons
                  name="phone"
                  size={30}
                  color={colors.primary}
              />
            </View>
            <View style={styles.containerContactText}>
              <Text style={styles.containerContactTitle}>Contato</Text>
              <Text style={styles.about}>{data.contact.phone}</Text>
            </View>
          </View>
          <View style={styles.containerContact}>
            <View style={styles.iconCircle}>
              <MaterialIcons
                  name="public"
                  size={30}
                  color={colors.primary}
              />
            </View>
            <View style={styles.containerContactText}>
              <Text style={styles.containerContactTitle}>Website</Text>
              <Text style={styles.about}>{data.contact.website}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.buttonContact}
        onPress={()=>{Linking.openURL(`tel:${data.contact.phone}`);}}
      >
        <Text style={styles.buttonContactTitle}>Entrar em contato</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  containerHeader: {
    width: '100%',
    height: 200,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  containerTitle: {
    backgroundColor: colors.shape,
    opacity: 0.5,
    marginTop: -50,
    height: 50,
    width: '100%',
  },
  containerHeaderIcons: {
    width: '100%',
    zIndex: 999,
    marginTop: 20,
    paddingHorizontal: 10,
    position: 'absolute',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between'
  },
  iconBack: {
  },
  iconShare: {
  },
  title: {
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -40,
    color: colors.heading,
    fontFamily: fonts.heading,
    fontSize: 24,
  },
  necessitiesList: {
    height: 60,
    justifyContent: 'center',
    paddingBottom: 5,
    marginVertical: 12,
  },
  titleSection: {
    color: colors.heading,
    fontFamily: fonts.heading,
    fontSize: 22,
    marginBottom: 20,
  },
  containerAbout: {
    flex: 1,
    height: '100%',
    paddingHorizontal: 20,
    paddingVertical: 20, 
  },
  about: {
    textAlign: 'left',
    color: colors.heading,
    fontFamily: fonts.text,
    fontSize: 16,
  },
  containerSection: {
    flex: 1,
    height: '100%',
    paddingHorizontal: 20,
  },
  containerContact: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  iconCircle: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: colors.shape,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerContactText: {
    width: '70%',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft: 20,
  },
  containerContactTitle: {
    fontFamily: fonts.heading,
    fontSize: 16,
  },
  buttonContact: {
    width: '100%',
    height: 60,
    backgroundColor: colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContactTitle: {
    fontFamily: fonts.heading,
    color: colors.white,
    fontSize: 16,
  }
})

export default Institution
