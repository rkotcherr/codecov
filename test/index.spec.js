import assert from 'assert';
import getOdd from '../src/getOdd';
import isPrime from '../src/isPrime';

describe('Babel usage suite', () => {

  // isPrime

  it('should return false for 1', () => {
    const p = isPrime(1);
    assert(p === false);
  })

  it('should return true for 2', () => {
    const p = isPrime(2);
    assert(p === true);
  });
});
