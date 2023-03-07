import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { styles } from './styles';
import CartItem from '../../components/cart-item';
import { confirmOrder, removeFromCart } from '../../store/actions/index';

const Cart = ({ navigation }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);
  const total = useSelector((state) => state.cart.total);
  const onDelete = (id) => {
    dispatch(removeFromCart(id));
  };
  const onCreateOrder = () => {
    dispatch(confirmOrder(cart, total));
  };
  const renderItem = ({ item }) => <CartItem item={item} onDelete={onDelete} />;
  const keyExtractor = (item) => item.id.toString();
  const Header = () =>
    cart.length <= 0 && (
      <View style={styles.header}>
        <Text style={styles.headerTitle}> Cart is empty </Text>
      </View>
    );
  const Footer = () =>
    cart.length > 0 && (
      <View style={styles.footer}>
        <TouchableOpacity style={styles.buttonConfirm} onPress={onCreateOrder}>
          <Text style={styles.buttonConfirmText}>Confirm</Text>
          <View style={styles.totalContainer}>
            <Text style={styles.totalText}>Total:</Text>
            <Text style={styles.totalPrice}>${total}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.listContainer}>
        <FlatList
          data={cart}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          style={styles.listContainer}
        />
      </View>
      <Footer />
    </View>
  );
};

export default Cart;
