var myFunctions = require('../lib/miles');

describe('Checks if this stuff works', function() {
  it('returns "YUP!"', function() {
    expect(myFunctions.testFunc()).toEqual("YUP!")
    })
  })
