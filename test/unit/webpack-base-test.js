const assert = require('assert');

describe('webpack.base.js test case', () => {
  const baseConfig = require('../../lib/webpack.base');
  it('entry', () => {
    assert.equal(
      baseConfig.entry.index.indexOf(
        'build-webpack/test/smoke/templete/src/index/index.js'
      ) > -1,
      true
    );
    assert.equal(
      baseConfig.entry.search.indexOf(
        'build-webpack/test/smoke/templete/src/search/index.js'
      ) > -1,
      true
    );
  });
});
