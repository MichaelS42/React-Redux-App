import axios from "axios";

export const ActionTypes = {
    FETCH_START : 'FETCH_START',
    FETCH_SUCCESS : 'FETCH_SUCCESS',
    FETCH_FAIL : 'FETCH_FAIL'
};

export const fetchAll = () => dispatch => {
    dispatch({ type: ActionTypes.FETCH_START });
    axios
        .get("https://cat-fact.herokuapp.com/facts")
        .then(res => {
            dispatch({
                type: ActionTypes.FETCH_SUCCESS,
                payload: res.data.all
            })
        })
        .catch(err => {
            console.error("fetch failed", err.message);
            dispatch({ 
                type: ActionTypes.FETCH_FAIL, 
                payload: err.message 
            });
        })
}
      