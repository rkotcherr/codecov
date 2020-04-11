import assert from 'assert';
import isPrime from '../src/isPrime';

describe('Babel usage suite', () => {
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
