import assert from 'assert';
import getOdd from '../src/getOdd';
import isPrime from '../src/isPrime';

describe('Babel usage suite', () => {

  // isOdd

  it('should return empty array for empty array', () => {
    const empty = getOdd([]);
    assert(empty.length === 0);
  });

  it('should return [1] for [1]', () => {
    const odd = getOdd([1]);
    assert(odd.length, 1);
    assert(odd[0] === 1);
  });

  it('should return [1] for [1, 2]', () => {
    const odd = getOdd([1, 2]);
    assert(odd.length, 1);
    assert(odd[0] === 1);
  });

  // isPrime

  it('should return false for 1', () => {
    const p = isPrime(1);
    assert(p === false);
  })
});
