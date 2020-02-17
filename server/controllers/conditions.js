const axios = require('axios');

const getConditions = async () => {
  return axios
    .get('http://www.mocky.io/v2/5e4a981f2f0000290097d361')
    .then(({ data }) => {
      return data.conditions.reduce(
        (acc, curr) => {
          acc.conditions = [
            ...acc.conditions,
            {
              label: curr.label,
              snippet: curr.snippet,
              image: curr.image
            }
          ];
          return acc;
        },
        { conditions: [] }
      );
    });
};

module.exports = getConditions;
