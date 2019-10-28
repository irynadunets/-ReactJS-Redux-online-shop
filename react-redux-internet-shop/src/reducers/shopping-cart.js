import * as _ from 'lodash';
const  updateCartItems = (cartItems, item, idx) => {
if(item.count === 0){
  return [
    ...cartItems.slice(0, idx ),
    ...cartItems.slice( idx + 1 )
  ];
  }

if(idx === -1) {
  return [
    ...cartItems,
    item
  ];
}
  return [
    ...cartItems.slice(0, idx ),
    item,
    ...cartItems.slice( idx + 1 )
  ];
};

const  updateCartItem = (good, item = {}, quant) => {
    const {
      id = good.id,
      name = good.name,
      count = 0,
      total = 0 } = item;
    return {
      id,
      name,
      count: count + quant,
      total: total + quant*good.price
    };
  };

const  updateOrder = (state, goodId, quant) => {
  const { goodList: { goods }, shoppingCart: { cartItems }, orderTotal } = state;
  const good = _.find(goods, {id:goodId});
  const itemIndex = _.findIndex(cartItems, {id:goodId});
  const item = cartItems[itemIndex];
  const newItem = updateCartItem(good, item, quant);
  const newItems=updateCartItems(cartItems, newItem, itemIndex);
    return {
      cartItems: newItems ,
      orderTotal: newItems.reduce(
      (orderTotal,newItems) => orderTotal + newItems.total,
    0,
  ),
    }
  };


const updateshoppingCart = (state ,action) => {


  if(state === undefined){
    return{
      cartItems: [],
      orderTotal: 0
    };
  }

  switch (action.type) {
      case 'GOODS_ADDED_TO_CART':
        return updateOrder(state, action.payload, 1);

      case 'GOODS_REMOVED_FROM_CART':
        return updateOrder(state, action.payload, -1);

      case 'ALL_GOODS_REMOVED_FROM_CART':
        const item =_.find(state.shoppingCart.cartItems, {id:action.payload});
        return updateOrder(state, action.payload, -item.count);

      default:
            return state.shoppingCart;
  }
};
export default updateshoppingCart;
