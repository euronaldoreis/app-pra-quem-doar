import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, FlatList, ActivityIndicator, SafeAreaView, ScrollView } from 'react-native';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

import { InstitutionProps } from '../interfaces/Institution';
import { CausesProps } from '../interfaces/Causes';
import { InstitutionCard } from '../components/InstitutionCard';
import { mockData } from '../../db';
import { CauseButton } from '../components/CauseButton';
import { Input } from '../components/Input';
import { useNavigation } from '@react-navigation/core';

const Search = () => {
  const [causes, setCauses] = useState<CausesProps[]>([]);
  const [causeSelected, setCauseSelected] = useState('all');
  const [necessities, setNecessities] = useState<CausesProps[]>([]);
  const [necessitiesSelected, setNecessitiesSelected] = useState('Todas');
  const [institutions, setInstitutions] = useState<InstitutionProps[]>([]);
  const [filteredInstitutions, setFilteredInstitutions] = useState<InstitutionProps[]>([]);
  // const [inputText, setInputText] = useState("");

  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);

  const navigation = useNavigation();

  let searchText = "";


  async function fetchInstitutions() {
    try {
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

  async function fetchNecessities() {
    try {
      setNecessities([
        {
          key: 'all',
          title: 'Todas',
        },
        ...mockData.necessities
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

  function handleNecesstiesSelected(necessities: string){
    setNecessitiesSelected(necessities);

    if(necessities === 'Todas')
      return setFilteredInstitutions(institutions);
    const filtered = institutions.filter(item =>
      item.necessities.includes(necessities)
    );

    setFilteredInstitutions(filtered);
  }

  function handleInstitution(institution: InstitutionProps){
    navigation.navigate('Institution', {
      data: institution
    });
  }

  function handleFetchMore(distance: number){

  }

  function handleInputSearch(text: string){
    // setInputText(text);
    searchText = text;
  }

  function handleSubmit(){
    const filtered = institutions.filter(item =>
      item.name.toUpperCase().includes(searchText.toUpperCase())
    );

    setFilteredInstitutions(filtered);
  }

  useEffect(() => {
    fetchCausas();
    fetchNecessities();
    fetchInstitutions();
  }, []);

  const InputSearch = () => (
    <View style={styles.searchContainer}>
      <View style={styles.searchHeader}>
        <Text style={styles.title}>
          Pesquise por uma instituição
        </Text>
      </View>
      <Input 
        placeholder="Digite o nome da instituiçao..."
        onChangeText={handleInputSearch}
        handleSubmit={handleSubmit}
        onEndEditing={handleSubmit}
      />
    </View>
  )

  return (
    <SafeAreaView style={styles.container}>
      {/* <ScrollView> */}
        <InputSearch />
        <View style={styles.header}>
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
            Escolha por necessidade
          </Text>
        </View>
        <View>
          <FlatList 
            data={necessities}
            keyExtractor={(item) => String(item.key)}
            renderItem={({ item }) => (
              <CauseButton 
                title={item.title}
                active={item.title === necessitiesSelected}
                onPress={() => handleNecesstiesSelected(item.title)}
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
          <FlatList
            data={filteredInstitutions}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => (
              <InstitutionCard
                data={item}
                onPress={() => handleInstitution(item)}
              />
            )}
            showsHorizontalScrollIndicator={false}
            numColumns={2}
            onEndReachedThreshold={0.1}
            onEndReached={({distanceFromEnd}) => handleFetchMore(distanceFromEnd)}
            ListFooterComponent={
              loadingMore ? <ActivityIndicator color={colors.primary} /> : <></>
            }
            contentContainerStyle={styles.institutionsList}
          />
      {/* </ScrollView> */}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    marginTop: 20
  },
  header: {
    paddingHorizontal: 30,
    marginBottom: 10,
  },
  searchHeader: {
    paddingHorizontal: 20,
  },
  searchContainer: {
    width: '100%',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 17,
    color: colors.heading,
    fontFamily: fonts.heading,
    lineHeight: 20,
    marginTop: 15, 
  },
  causesList: {
    height: 60,
    justifyContent: 'center',
    paddingBottom: 5,
    marginVertical: 12,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 40,
  },
  institutionsList: {
    marginVertical: 12,
    justifyContent: 'center',
    paddingBottom: 5,
  }
})

export default Search;
