import updateGoodList from './good-list';
import updateshoppingCart from './shopping-cart';

const reducer = (state,action) => {
           return {
                goodList : updateGoodList(state ,action),
                shoppingCart : updateshoppingCart(state ,action)
    };
  };

export default reducer;
