/* @flow */
import React from 'react';
import { Text } from 'react-native';
import { CardSection } from './common';

type Props = {
  employee: Object,
};

const ListItem = (props: Props) => {
  const { name } = props.employee;

  return (
    <CardSection>
      <Text style={styles.titleStyle}>
        {name}
      </Text>
    </CardSection>
  );
};

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
  },
};

export default ListItem;
