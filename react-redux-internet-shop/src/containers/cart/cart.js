import { connect } from 'react-redux';
import {
  goodsAddedToCart,
  goodsRemovedFromCart,
  allgoodsRemovedFromCart
} from '../../actions/index';
import Cart from '../../components/cart';


const mapStateToProps = ({ shoppingCart :{ cartItems, orderTotal }}) => {
  return {
    items: cartItems,
    total: orderTotal
  };
};

const mapDispatchToProps = {
        onIncrease: goodsAddedToCart,
        onDecrease: goodsRemovedFromCart,
        onDelete: allgoodsRemovedFromCart
  };


export default connect(mapStateToProps,mapDispatchToProps)(Cart);
