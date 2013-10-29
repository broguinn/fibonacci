function fibonacci(index) {
  if (index < 3) {
    return (index - 1);
  } else {
    return fibonacci(index - 2) + fibonacci(index - 1);
  }
}

var cache = [0, 1];

function fibonacciMem(index) {
  var num = (parseInt(index));
  if (num === 1) {
    return cache[0];
  } else if (num === 2) {
    return cache[1];
  } else if (cache[index-3] > -1) {
    var n2 = cache[index-3];
  } else {
    cache[index-3] = fibonacciMem(index-2);
    var n2 = fibonacciMem(index-2);
  }
  if (cache[index-2]) {
    var n1 = cache[index-2];
  } else {
    cache[index-2] = fibonacciMem(index-1);
    var n1 = fibonacciMem(index-1);
  }
  return n2 + n1;
}

$(function() {
  $("#fibonacci").submit(function() {
    var number = fibonacciMem($("input#integer").val());
    $("#result").empty().append(number);
    $("#hands").fadeIn();
    setTimeout(function() {
      $("#masonic").fadeIn();
    }, 800);
    setTimeout(function() {
      $("#tom").fadeIn();
    }, 1600);
    setTimeout(function() {
      $("#secret").fadeIn();
    }, 3000);
    return false;
  });
});
