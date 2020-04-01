import assert from 'assert';
import getOdd from '../src/getOdd';
import isPrime from '../src/isPrime';

describe('Babel usage suite', () => {

  // getOdd

  it('should return an empty array', () => {
    const o = getOdd([]);
    assert(o.length === 0);
  });

  it('should return an array of length 1', () => {
    const o = getOdd([1, 2]);
    assert(o.length === 1);
  });

  // isPrime

  it('should return false for 1', () => {
    const p = isPrime(1);
    assert(p === false);
  })

  it('should return true for 2', () => {
    const p = isPrime(2);
    assert(p === true);
  });

  it('should return true for 3', () => {
    const p = isPrime(3);
    assert(p === true);
  });

  it('should return false for 4', () => {
    const p = isPrime(4);
    assert(p === false);
  });
});
