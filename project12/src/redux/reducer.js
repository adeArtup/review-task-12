const appStore = {
  user: {
    name: "Udin",
    old: "12"
  },
  count: 0,
  swapiD: {
    loading: false,
    data: []
  },
  selectedProfile: {
    loading: false,
    data: {},
    urlDetail : 'https://swapi.co/api/people/1'
  }
};

const app = (state = { ...appStore }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + action.payload
      };
    case "DECREMENT":
      return {
        ...state,
        count: state.count - action.payload
      };

    case "CHANGENAME":
      return {
        ...state,
        user: {
          ...state.user,
          name: action.payload,
          old: "12"
        }
      };
    case "swap_fetch":
      return {
        ...state,
        swapiD: {
          ...state.swapiD,
          loading: true
        }
      };

    case "swap_fetch_succ":
      // console.log(action);
      return {
        ...state,
        swapiD: {
          ...state.swapiD,
          loading: false,
          data: action.payload
        }
      };

    case "swap_fetch_err":
      return {
        ...state,
        swapiD: {
          ...state.swapiD,
          loading: false
        }
      };
    case "FETCH_SWAPI_DETAIL":
      return {
        ...state,
        selectedProfile: {
          ...state.selectedProfile,
          loading: true
        }
      };
    case "FETCH_SWAPI_DETAIL_SUCCESS":
      return {
        ...state,
        selectedProfile: {
          ...state.selectedProfile,
          loading: false,
          data: action.payload
        }
      };
    case "FETCH_SWAPI_DETAIL_FAILED":
      return {
        ...state,
        selectedProfile: {
          ...state.selectedProfile,
          loading: false
        }
      };
    case "UPDATE_URL_DETAIL": {
      return {
        ...state,
        selectedProfile: {
          ...state.selectedProfile,
          urlDetail: action.payload
        }
      };
    }

    case "CLEAR_SWAPI_DATA":
      return {
        ...state,
        selectedProfile: appStore.selectedProfile,
        swapiD: appStore.swapiD
      };
    default:
      return state;
  }
};

export default app;
