import getValue from '../src/task-1';

const str1 = 'pets.cats.begemot.color';

const obj = {
  pets: {
    cats: {
      sophia: {
        sex: 'female',
        color: 'red',
      },
      begemot: {
        sex: 'male',
        color: 'grey',
      },
    },
    dogs: {
      nika: {
        sex: 'female',
        color: 'white',
      },
    },
  },
};

test('value from pets.cats.begemot.color is grey', () => {
  const result = getValue(str1, obj);
  expect(result).toBe('grey');
});
