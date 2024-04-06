import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Image, FlatList, ActivityIndicator } from 'react-native';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

import api from '../services/api';
import { CauseButton } from '../components/CauseButton';
import { InstitutionProps } from '../interfaces/Institution';
import { CausesProps } from '../interfaces/Causes';
import { InstitutionCard } from '../components/InstitutionCard';
import { mockData } from '../../db';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
import { useNavigation } from '@react-navigation/core';

const Home = () => {
  const [causes, setCauses] = useState<CausesProps[]>([]);
  const [causeSelected, setCauseSelected] = useState('all');
  const [institutions, setInstitutions] = useState<InstitutionProps[]>([]);
  const [filteredInstitutions, setFilteredInstitutions] = useState<InstitutionProps[]>([]);

  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);

  const navigation = useNavigation();

  async function fetchInstitutions() {
    try {
      // TBD
      // const { data } = await api.get('/causas?_sort=title&_order=asc');
      // console.log(data);
      setInstitutions(mockData.institutions);
      setFilteredInstitutions(mockData.institutions);
     } catch (err) {
       console.error(err);
     }
  }

  async function fetchCausas() {
    try {
      // TBD
      // const { data } = await api.get('/causas?_sort=title&_order=asc');
      // console.log(data);
      setCauses([
        {
          key: 'all',
          title: 'Todas',
        },
        ...mockData.causes
      ])
    } catch (err) {
       console.error(err);
    }
  }

  function handleCauseSelected(cause: string){
    setCauseSelected(cause);

    if(cause === 'all')
      return setFilteredInstitutions(institutions);
    const filtered = institutions.filter(item =>
      item.causes.includes(cause)
    );

    setFilteredInstitutions(filtered);
  }

  // TBD
  function handleInstitution(institution: InstitutionProps){
    navigation.navigate('Institution', {
      data: institution
    });
  }

  // TBD
  function handleFetchMore(distance: number){

  }

  useEffect(() => {
    fetchCausas();
    fetchInstitutions();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Header />

        <Text style={styles.title}>
          Escolha uma causa para apoiar
        </Text>
      </View>
      <View>
        <FlatList 
          data={causes}
          keyExtractor={(item) => String(item.key)}
          renderItem={({ item }) => (
            <CauseButton 
              title={item.title}
              active={item.key === causeSelected}
              onPress={() => handleCauseSelected(item.key)}
            />
          )}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.causesList}
        />
      </View>
      <View style={styles.header}>
        <Text style={styles.title}>
          Escolha uma instituição para doar
        </Text>
      </View>
      <View>
        <FlatList
          data={filteredInstitutions}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <InstitutionCard
              data={item}
              onPress={() => handleInstitution(item)}
            />
          )}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          onEndReachedThreshold={0.1}
          onEndReached={({distanceFromEnd}) => handleFetchMore(distanceFromEnd)}
          ListFooterComponent={
            loadingMore ? <ActivityIndicator color={colors.primary} /> : <></>
          }
          contentContainerStyle={styles.institutionsList}
        />
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
    paddingHorizontal: 30,
  },
  headerContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
  },
  greeting: {
    fontSize: 32,
    color: colors.heading,
    fontFamily: fonts.text
  },
  userName: {
    fontSize: 32,
    fontFamily: fonts.heading,
    color: colors.heading,
    lineHeight: 40,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 40,
  },
  title: {
    fontSize: 17,
    color: colors.heading,
    fontFamily: fonts.heading,
    lineHeight: 20,
    marginTop: 15,
  },
  causesList: {
    height: 80,
    justifyContent: 'center',
    paddingBottom: 5,
    marginVertical: 24,
  },
  institutionsList: {
    marginVertical: 24,
    justifyContent: 'center',
    paddingBottom: 5,
  }
})

export default Home;
