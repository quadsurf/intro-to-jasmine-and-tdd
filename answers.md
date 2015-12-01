```
var myFunctions = require('../lib/miles');

describe("Miles", function() {
  it('determines if a car has enough gas to travel a route', function() {
    var car = {
      milesPerGallon: 20,
      gallonsInTank: 3
    };

    var route = {
      miles: 200,
      destination: "Boulder",
      location: "Fancy Land"
    };
    expect(myFunctions.hasEnoughGas(car, route)).toEqual(false);
  });
})
```
