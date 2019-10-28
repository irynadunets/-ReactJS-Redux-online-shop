import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as ActionFilter from '../../actions/filter';
import Filter from '../../components/filter';


const mapStateToProps = ({ goodList:{ goods, loading, error, filter }}) => {
  return { goods, loading, error, filter }
  };

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(ActionFilter,dispatch)
  });

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
