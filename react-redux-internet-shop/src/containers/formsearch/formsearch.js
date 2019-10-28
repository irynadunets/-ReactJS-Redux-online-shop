import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as ActionFilter from '../../actions/filter';
import FormSearch from '../../components/formsearch';

const mapStateToProps = ({ goodList:{ goods, loading, error, filter, search }}) => {
  return { goods, loading, error, filter, search }
  };

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(ActionFilter,dispatch)
  });

export default connect(mapStateToProps, mapDispatchToProps)(FormSearch);
