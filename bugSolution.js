function foo(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return NaN; // or throw an error: throw new Error('Invalid input: Both arguments must be numbers.');
  }
  return a + b;
}
console.log(foo(1, null)); // NaN
console.log(foo(1, 2)); // 3
console.log(foo(0,2)); //2
console.log(foo('',2)); //NaN