const SET_PRIZE = 'SET_PRIZE';

export const setPrize = prize => ({ type: SET_PRIZE, prize });

export const getPrize = state => state.prize;

const initialState = {
  prize: 0,
};

const prizeReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_PRIZE:
      return {
        ...state,
        prize: action.prize,
      };

    default:
      return state;
  }
}

export default prizeReducer;
