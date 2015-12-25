var pizzarium = require('./pizzarium');

describe("pizzarium", function() {

    it("should accept user order", function() {
        var result = pizzarium.onMessage('!заказ');

        assert.equal(result, '');
    });

});