import assert from 'assert';
import getOdd from '../src/getOdd';

describe('Babel usage suite', () => {
  it('should return an empty array', () => {
    const o = getOdd([]);
    assert(o.length === 0);
  });

  it('should return an array of length 1', () => {
    const o = getOdd([1, 2]);
    assert(o.length === 1);
  });
});
