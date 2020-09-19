import React, { useEffect, useState } from 'react';
import {
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

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
  const [bill, setBill] = useState('0.00');
  const [tip, setTip] = useState('10');
  const [split, setSplit] = useState('2');
  const [splitTotal, setSplitTotal] = useState('0.00');

  useEffect(() => {
    const defaultValue = 0;
    const total = parseFloat(bill) || defaultValue;
    const tipPercentage = parseInt(tip) || defaultValue;
    const splitCount = parseInt(split) || defaultValue;

    const splitTotal = (
      (total + (tipPercentage / 100) * total) /
      splitCount
    ).toFixed(2);

    setSplitTotal(splitTotal.toString());
  }, [bill, tip, split]);

  const handleBillChange = (value) => {
    setBill(value);
  };

  const handleTipChange = (value) => {
    setTip(value);
  };

  const handleSplitAdd = () => {
    setSplit((split) => {
      const total = parseInt(split) + 1;
      return total.toString();
    });
  };

  const handleSplitRemove = () => {
    setSplit((split) => {
      const total = parseInt(split) - 1;
      return total.toString();
    });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
    </TouchableWithoutFeedback>
  );
};

export default Home;
