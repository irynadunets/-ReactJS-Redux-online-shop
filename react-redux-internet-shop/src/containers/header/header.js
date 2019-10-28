import { connect } from 'react-redux';
import Header from '../../components/header';


const mapStateToProps = ({ shoppingCart :{ cartItems, orderTotal }}) => {
    return {
    addedCount: cartItems.reduce(
      (count,cartItems) => count + (cartItems.count>0 ? cartItems.count : 0),0),
    total: orderTotal
  };
};


export default  connect(mapStateToProps)(Header);
