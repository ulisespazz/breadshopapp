import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';
import { View, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { styles } from './styles';
import OrderItem from '../../components/oreder-item';
import { getOrders, deleteOrder } from '../../store/actions/index';

const orders = ({ navigation }) => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders.list);
  const onDelete = (id) => {
    dispatch(deleteOrder(id));
  };

  useFocusEffect(
    useCallback(() => {
      dispatch(getOrders());
    }, [dispatch])
  );

  const renderItem = ({ item }) => <OrderItem item={item} onDelete={onDelete} />;
  const keyExtractor = (item) => item.id.toString();
  return (
    <View style={styles.container}>
      <FlatList data={orders} renderItem={renderItem} keyExtractor={keyExtractor} />
    </View>
  );
};

export default orders;
