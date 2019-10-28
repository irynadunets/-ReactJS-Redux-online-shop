import orderBy from 'lodash/orderBy';
const updateGoodList = (state ,action) => {

   if(state === undefined){
     return {
       goods: [],
       loading: true,
       error: null,
       filter:'all',
       search:''
     };
   }

   const sortBy = (goods, filter) => {
     switch (filter){
       case 'all':
               return goods;
       case 'price_high':
               return orderBy(goods,'price','desc');
       case 'price_low':
               return orderBy(goods,'price','asc');
       case 'name':
               return orderBy(goods,'name','asc');
       default:
            return goods;
     }
   };

   const filterGoods = (goods, search, filter) => {
     return sortBy(goods.filter(o => o.name.toLowerCase().indexOf(search.toLowerCase())>= 0), filter);

     }


  switch (action.type) {
    case 'FETCH_GOODS_REQUESTED':
      return {
        goods: [],
        loading: true,
        error: null,
        filter:'all'
      };

    case 'FETCH_GOODS_SUCCESS':
      return {
        goods: action.payload,
        loading: false,
        error: null,
        filter:'all'
      };

      case 'FETCH_GOODS_FAILURE':
        return {
          goods: [],
          loading: false,
          error: action.payload,
          filter:'all'
        }

        case 'SET_FILTER':
          return {
            goods: sortBy(state.goodList.goods, action.payload),
            loading: false,
            error: null,
            filter: action.payload
          }

          case 'SET_QUERY':
            return {
              goods: filterGoods(state.goodList.goods, action.payload, action.filter),
              loading: false,
              error: null,
              search: action.payload
            }


      default:
          return state.goodList;
}
};
export default updateGoodList;
