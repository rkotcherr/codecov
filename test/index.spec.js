import assert from 'assert';
import getOdd from '../src/getOdd';

describe('Babel usage suite', () => {
  it('should return empty array for empty array', () => {
    assert(getOdd([]), [])
  });
});
