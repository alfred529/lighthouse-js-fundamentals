function range(start, end, step) {
  var some_array = [];
  if (start < end && step > 0) {
    for (var some_value = start; some_value <= end; some_value = some_value + step) {
      some_array.push(some_value);
    }
    return some_array;
  } else if (start === null || end === null || step === null) {
    return some_array;
  } else {
    return some_array;
  }
}


console.log("Test #1");
console.log(range(0, 8, 2));
console.log("Test #2");
console.log(range(-9, 3, 3));
console.log("Test #3");
console.log(range(-5, null, 3));
console.log("Test #4");
console.log(range(-5, 7, -3));