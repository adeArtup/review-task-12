import axios from 'axios';

export const incrementAction = () => {
  return {
    type: "INCREMENT",
    payload: 1
  };
};

export const decrementAction = () => {
  return {
    type: "DECREMENT",
    payload: 1
  };
};

export const changeName = name => {
  return {
    type: "CHANGENAME",
    payload: name
  };
};

export const fetchSwapi = () => ({
  type: 'swap_fetch'
})

export const fetchSwapiAction = () => {
  return (dispatch) => {
    dispatch(fetchSwapi())
    axios.get('https://swapi.co/api/people')
    .then(res =>{
      dispatch({
        type: 'swap_fetch_succ',
        payload: res.data.results
      })
    })
    .catch(err =>{
      dispatch({
        type: 'swap_fetch_err'
      })
      throw err
    })
  }
}

export const fetchProfileData = (params) => {
  return dispatch => {
    dispatch({
      type: 'FETCH_SWAPI_DETAIL'
    })
    axios.get(params)
    .then(res => {
      console.log(res, `<=================== res ==================`);
      dispatch({
        type: 'FETCH_SWAPI_DETAIL_SUCCESS',
        payload: res.data
      }) 
    })
    .catch(err => {
      dispatch({
        type: 'FETCH_SWAPI_DETAIL_FAILED'
      })  
      throw err
    })
  }
}

export const updateUrlDetailAction = urlDetail => ({
  type: 'UPDATE_URL_DETAIL',
  payload: urlDetail
})

export const clearSwapiAction = () => ({
  type: 'CLEAR_SWAPI_DATA'
})
