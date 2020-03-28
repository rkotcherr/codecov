import assert from 'assert';
import getOdd from '../src/getOdd';

describe('Babel usage suite', () => {
  it('should return empty array for empty array', () => {
    assert(getOdd([]), [])
  });

  it('should return [1] for [1]', () => {
    const odd = getOdd([1]);
    assert(odd.length, 1);
    assert(odd[0], 1);
  });

  it('should return [1] for [1, 2]', () => {
    const odd = getOdd([1, 2]);
    assert(odd.length, 1);
    assert(odd[0], 1);
  });
});
