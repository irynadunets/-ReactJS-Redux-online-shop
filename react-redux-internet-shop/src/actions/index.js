const goodsLoaded = (newGoods) => {
  return {
    type: 'FETCH_GOODS_SUCCESS',
    payload: newGoods
  };
};

const goodsRequested = () => {
  return {
    type: 'FETCH_GOODS_REQUESTED'
    };
};

const goodsError = (error) => {
  return {
    type: 'FETCH_GOODS_FAILURE',
    payload: error
    };
};


const goodsAddedToCart = (goodId) => {
  return {
    type: 'GOODS_ADDED_TO_CART',
    payload: goodId
    };
};

const goodsRemovedFromCart = (goodId) => {
  return {
    type: 'GOODS_REMOVED_FROM_CART',
    payload: goodId
    };
};

const allgoodsRemovedFromCart = (goodId) => {
  return {
    type: 'ALL_GOODS_REMOVED_FROM_CART',
    payload: goodId
    };
};

const fetchGoods = (goodstoreService, dispatch) => () => {
  dispatch(goodsRequested());
  goodstoreService.getGoods()
  .then((data) => dispatch(goodsLoaded(data)))
  .catch((err)=> dispatch(goodsError(err)));
}

export {
  goodsLoaded,
  goodsRequested,
  goodsError,
  goodsAddedToCart,
  goodsRemovedFromCart,
  allgoodsRemovedFromCart,
  fetchGoods,
  };
