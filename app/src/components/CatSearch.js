import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchAll } from '../actions';

const CatSearch = () => {
  const { error, loading } = useSelector(state => {
    return {
      loading: state.isFetching,
      error: state.error
    };
  });

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(fetchAll());
  }

  if (error) {
    console.error(error);
  }

  if (loading) {
    return <div>** fetching cat data **</div>
  };
  return <button onClick={handleClick}>fetch cats</button>
};

export default CatSearch;



// import React from 'react';
// import { connect } from 'react-redux';

// import { fetchAll } from '../actions';

// const CatSearch = props => {
//   const {loading, fetchAll, error} = props;

//   if (error) {
//     console.error(error);
//   }

//   if (loading) {
//     return <div>** fetching cat data **</div>
//   };
//   return <button onClick={fetchAll}>fetch cats</button>
// };


// const mapStateToProps = state => {
//   return {
//     loading: state.isFetching,
//     error: state.error
//   };
// }

// export default connect(
//   mapStateToProps,
//   { fetchAll }
// )(CatSearch);