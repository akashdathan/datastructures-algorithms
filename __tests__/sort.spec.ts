import * as algorithms from '../src';

test('Redis Init should create a redis client', async () => {
  const arr = [4, 5, 6, 2, 3, 6];

  console.log({ arr });

  algorithms.quickSort(arr);

  console.log({ arr });
});