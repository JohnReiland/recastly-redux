import { connect } from 'react-redux';
import Search from '../components/Search.js';
import handleVideoSearch from '../actions/search.js';

var mapStateToProps = () => ({})

var mapDispatchToProps = (dispatch) => ({
  handleInputChange: (query) => {
    dispatch(handleVideoSearch(query));
  }
})

var SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);

//TODO: define a SearchContainer component
//which will hook up your action dispatchers - handleVideoSearch
// with your search component props.         - Search


//HINT: use react-redux 'connect' method to generate a container component from
//state and dispatch mappings.

export default SearchContainer;



// var mapDispatchToProps = (dispatch) => ({
//   handleInputChange: (query) => {
//     dispatch(handleVideoSearch(query));
//   }
// })