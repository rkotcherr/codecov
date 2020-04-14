import assert from 'assert';
import getOdd from '../src/getOdd';

describe('Babel usage suite', () => {
  it('should return an empty array', () => {
    const o = getOdd([]);
    assert(o.length === 0);
  });
});
