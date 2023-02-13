import { StyleSheet, StatusBar } from 'react-native';

import { THEME } from '../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.colors.background,
  },
  title: {
    fontSize: 18,
    fontFamily: 'Bitter-SemiBold',
    color: THEME.colors.title,
    padding: 10,
  },
  containerList: {
    flex: 1,
  },
  contentContainerList: {
    paddingBottom: 30,
  },
});
