import GameSavingLoader from '../app';

jest.setTimeout(10000);
test('GameSavingLoader test', async (done) => {
    let result;
    let testObject = {"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}};

  GameSavingLoader.load().then((saving) => {
    result = saving;
    console.log(result);
  })

  expect(result).toEqual(testObject);
  done();
});
