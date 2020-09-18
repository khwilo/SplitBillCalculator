import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  textHeader: {
    fontSize: 18,
    color: '#5a4db5',
  },
  textOutput: {
    fontSize: 30,
    fontWeight: '700',
    color: '#5a4db5',
  },
});

const SplitTotal = ({ splitTotal }) => {
  return (
    <View>
      <Text style={styles.textHeader}>Split total</Text>
      <Text style={styles.textOutput}>{splitTotal}</Text>
    </View>
  );
};

export default SplitTotal;
