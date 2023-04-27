import React, { useState } from 'react';
import { StyleSheet, ScrollView, Text, View } from 'react-native';

import SearchBar from '../components/SearchBar';
import useYelp from '../hooks/useYelp';

const HomeScreen = () => {
  const [term, setTerm] = useState('');
  const [yelpSearch, results, errorMessage] = useYelp();

  return (
    <View style={{ flex: 1 }}>
      <SearchBar term={term}
        onTermChange={newTerm => setTerm(newTerm)}
        onTermSubmit={() => yelpSearch(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <Text>Home Screen</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;