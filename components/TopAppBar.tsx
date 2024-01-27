import * as React from 'react';
import { Appbar } from 'react-native-paper';

const TopAppBar = () => (
  <Appbar.Header>
    <Appbar.BackAction onPress={() => {}} />
    <Appbar.Content title="Sahayak" />
  </Appbar.Header>
);

export default TopAppBar;