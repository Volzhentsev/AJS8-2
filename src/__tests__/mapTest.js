import ErrorRepository from '../js/errorRepo';

test.each([
  [404, 'not found'],
  [502, 'bad gateway'],
  [200, 'ok'],
  [201, 'created'],
])('throw correct error', (error, expected) => {
  const repository = new ErrorRepository();
  expect(repository.translate(error)).toBe(expected);
});

test('throw or not unknown error ', () => {
  const repository = new ErrorRepository();
  expect(() => repository.translate(404)).not.toThrow();
  expect(() => repository.translate(40)).toThrow();
});
