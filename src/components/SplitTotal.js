import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  textHeader: {
    fontSize: 18,
    color: '#ffffff',
    fontWeight: '700',
    letterSpacing: 1.5,
  },
  textOutput: {
    fontSize: 30,
    color: '#ffffff',
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
