/* @flow */
import * as React from 'react';
import { View } from 'react-native';

type Props = {
  children: React.Node,
  style: Object,
};

const CardSection = (props: Props) => (
  <View style={[styles.containerStyle, props.style]}>
    {props.children}
  </View>
);

const styles = {
  containerStyle: {
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
    borderColor: '#ddd',
    padding: 5,
    borderBottomWidth: 1,
  },
};

export default CardSection;
