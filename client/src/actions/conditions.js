import axios from 'axios';

const conditions = data => ({
  type: 'CONDITIONS_LOADED',
  conditions: data.conditions,
  isLoading: false
});

const fetchConditions = () => dispatch => {
  axios
    .get('/api/conditions')
    .then(({ data }) => dispatch(conditions(data)))
    .catch(err => console.log(err));
};

export { fetchConditions };
