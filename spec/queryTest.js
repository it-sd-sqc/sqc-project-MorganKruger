import { query } from '../server.js'

describe('normalizeDate()', function () {
  // TODO: Implement the spec as tests here ////////////////
it('should correctly normalize return data', () => {
    expect(query(0,1)).toEqual(String);
});

it('should fail to return data', () => {
    expect(query(2,3)).toEqual(null);
});

  // End of implementation /////////////////////////////////
})
