import alignText from '../src/task-2';

const strings = [
  'I love cats/n',
  'I dislike dogs/n',
  '/n',
  'I/n',
];

const sep = '/n';

const text = ['I love cats   /n', 'I dislike dogs/n', '              /n', 'I             /n'];

test('task2 - align text 1', () => {
  expect(alignText(strings, sep)).toStrictEqual(text);
});

test('task2 - align text 2', () => {
  const result = alignText(strings, sep).map(i => i.length);
  expect(result).toStrictEqual([16, 16, 16, 16]);
});
