import React, { Component } from 'react';
import Spiner from '../../components/spinner';
import ErrorIndicator from '../../components/error-indicator';
import { connect } from 'react-redux';
import { getGoodstoreService } from '../../components/hoc';
import { fetchGoods,goodsAddedToCart } from '../../actions';
import GoodList from '../../components/good-list';


class GoodListContainer extends Component {

componentDidMount(){
  this.props.fetchGoods();
  }

  render(){
      const { goods, loading, error, onAddedToCart } = this.props;

    if (loading) {
      return <Spiner />
    }

    if (error) {
      return <ErrorIndicator />
    }

      return <GoodList goods={goods} onAddedToCart={onAddedToCart} />
  }
};

const mapStateToProps = ({ goodList:{ goods, loading, error, filter }}) => {
  return {
  goods,  loading,   error,  filter
};
};

const mapDispatchToProps = (dispatch, { goodstoreService }) => {
    return{
    fetchGoods: fetchGoods(goodstoreService, dispatch),
    onAddedToCart: (id) => dispatch(goodsAddedToCart(id))
  };
};

export default getGoodstoreService()(
  connect(mapStateToProps,mapDispatchToProps)(GoodListContainer)
);
