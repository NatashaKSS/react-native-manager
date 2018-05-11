// @flow
import React from 'react';
import { View, ActivityIndicator } from 'react-native';

type Props = {
  spinnerSize: number,
};

const Spinner = ({ spinnerSize }: Props) => (
  <View style={styles.spinnerContainerStyle}>
    <ActivityIndicator
      size={spinnerSize || 'large'}
    />
  </View>
);

const styles = {
  spinnerContainerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default Spinner;
