// src/containers/FilterContainer.js
import { connect } from 'react-redux';
import Filter from '../components/Filter';
import { setFilter } from '../actions';

const mapStateToProps = (state) => ({
  filter: state.filter,
});

const mapDispatchToProps = (dispatch) => ({
  setFilter: (filter) => dispatch(setFilter(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
