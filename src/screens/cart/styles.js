import { StyleSheet } from 'react-native';

import { THEME } from '../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.colors.background,
  },
  listContainer: {
    flex: 1,
    backgroundColor: THEME.colors.background,
    borderRadius: 5,
    margin: 10,
  },
  footer: {
    borderTopColor: THEME.colors.primary,
    borderTopWidth: 1,
    paddingVertical: 10,
    marginBottom: 10,
    marginHorizontal: 10,
  },
  buttonConfirm: {
    backgroundColor: THEME.colors.secondary,
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonConfirmText: {
    color: THEME.colors.white,
    fontSize: 14,
    fontFamily: 'Bitter-Medium',
  },
  totalContainer: {
    flex: 0.4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  totalText: {
    color: THEME.colors.white,
    fontSize: 14,
    fontFamily: 'Bitter-Medium',
  },
  totalPrice: {
    color: THEME.colors.white,
    fontSize: 16,
    fontFamily: 'Bitter-SemiBold',
  },
});
