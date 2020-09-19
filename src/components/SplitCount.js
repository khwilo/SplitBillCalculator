import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  textHeader: {
    fontSize: 18,
    color: '#ffffff',
    fontWeight: '700',
    letterSpacing: 1.5,
  },
  tipSplitContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    fontWeight: '400',
    backgroundColor: '#deddf2',
    borderRadius: 100,
  },
  splitInput: {
    paddingHorizontal: 10,
    fontSize: 30,
    color: '#ffffff',
  },
});

const SplitCount = ({ split, handleSplitAdd, handleSplitRemove }) => {
  return (
    <View>
      <Text style={styles.textHeader}>Split</Text>
      <View style={styles.tipSplitContainer}>
        <MaterialIcons
          style={styles.icon}
          name='add'
          size={24}
          onPress={handleSplitAdd}
        />

        <Text style={styles.splitInput}>{split}</Text>

        <MaterialIcons
          style={styles.icon}
          name='remove'
          size={24}
          onPress={handleSplitRemove}
          disabled={split < 2}
        />
      </View>
    </View>
  );
};

export default SplitCount;
