import React from 'react';
import { StyleSheet, View } from 'react-native';

import Input from '../components/Input';
import SplitOutput from '../containers/SplitOutput';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 30,
  },
});

const Home = () => {
  const bill = '0.00';
  const tip = '10';
  const split = '2';
  const splitTotal = '0.00';

  const handleBillChange = (value) => {
    console.log(value);
  };

  const handleTipChange = (value) => {
    console.log(value);
  };

  const handleSplitAdd = () => {};

  const handleSplitRemove = () => {};

  return (
    <View style={styles.container}>
      <Input
        label='Bill Total'
        amount={bill}
        placeHolderText='0.00'
        handleTextChange={handleBillChange}
      />
      <Input
        label='Tip'
        amount={tip}
        placeHolderText='10'
        handleTextChange={handleTipChange}
      />
      <SplitOutput
        split={split}
        splitTotal={splitTotal}
        handleSplitAdd={handleSplitAdd}
        handleSplitRemove={handleSplitRemove}
      />
    </View>
  );
};

export default Home;
