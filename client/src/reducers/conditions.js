const defaultState = {
  conditions: [],
  isLoading: true
};

const conditions = (state = defaultState, { type, conditions, isLoading }) => {
  switch (type) {
    case 'CONDITIONS_LOADED':
      return { ...state, conditions, isLoading };

    default:
      return state;
  }
};

export default conditions;
