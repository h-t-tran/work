
describe("Calculator", function() {

  var _calc;
  
  describe('add', function() {

		beforeEach(function() {
			_calc = new Calculator();
			console.debug("_calc ", _calc);
		});

		afterEach(function() {

		});

		it('should returns 5 when 2 + 3', function() {
			var res = _calc.add(2,3);
			expect(res).toBe(5);
		});
  });

});
