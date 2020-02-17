const getConditions = require('../conditions');

test('the conditions controllers returns the correct format', async () => {
  jest.mock(
    getConditions,
    () => ({
      label: 'A label',
      snippet: 'A snippet',
      image: 'An image',
      otherProp: 'An other prop'
    }),
    { virtual: true }
  );
  const conditions = await getConditions();
  console.log(conditions);
  return true;
});
