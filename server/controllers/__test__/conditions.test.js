const axios = require('axios');

const getConditions = require('../conditions');
const mockConditions = require('../../mocks/conditions.json');

jest.mock('axios');

test('the conditions controllers returns the correct format', async () => {
  const expected = {
    conditions: [
      {
        label: 'A condition',
        image:
          'https://via.placeholder.com/640x360.png?text=placeholder%20image',
        snippet: 'An unpleasant condition'
      }
    ]
  };

  axios.get.mockImplementation(() =>
    Promise.resolve({
      data: mockConditions
    })
  );
  await expect(getConditions()).resolves.toEqual(expected);
});
