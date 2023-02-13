import { StyleSheet } from 'react-native';

import { THEME } from '../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 10,
    height: 130,
    backgroundColor: THEME.colors.primary,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: 'Bitter-Medium',
    fontSize: 16,
    color: THEME.colors.white,
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  price: {
    fontFamily: 'Bitter-SemiBold',
    fontSize: 16,
    color: THEME.colors.white,
  },
  weight: {
    fontFamily: 'Bitter-Medium',
    fontSize: 14,
    color: THEME.colors.white,
  },
});
