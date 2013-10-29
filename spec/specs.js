describe("fibonacciMem", function() {
  it("returns 0 for input '1'", function() {
    fibonacciMem('1').should.equal(0);
  });
  
  it("returns 1 for input '2'", function() {
    fibonacciMem('2').should.equal(1);
  });

  it("returns the value of input index in the fibonacci sequence", function() {
    fibonacciMem('9').should.equal(21);
  });
});

describe("memoize", function() {
  it("returns 3 for input '5'", function() {
    fibonacci.memoize('5').should.equal(3);
  });
});