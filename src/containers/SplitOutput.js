import React from 'react';
import { StyleSheet, View } from 'react-native';

import SplitCount from '../components/SplitCount';
import SplitTotal from '../components/SplitTotal';

const styles = StyleSheet.create({
  sectionOutput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#efeffa',
    borderRadius: 10,
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
});

const SplitOutput = ({
  split,
  handleSplitAdd,
  handleSplitRemove,
  splitTotal,
}) => {
  return (
    <View style={styles.sectionOutput}>
      <SplitCount
        split={split}
        handleSplitAdd={handleSplitAdd}
        handleSplitRemove={handleSplitRemove}
      />
      <SplitTotal splitTotal={splitTotal} />
    </View>
  );
};

export default SplitOutput;
