// iterative approach

function fibonacci(n) {
  let fib0 = 0;
  let fib1 = 1;
  for (i = 0; i < n; i++) {
    fibn = fib0 + fib1;
    fib0 = fib1;
    fib1 = fibn;
  }
  return fib0;
}
console.log(fibonacci(5));
console.log(fibonacci(6));

// recursive approach

function fibonacciRecursive(n) {
  if (n == 0) {
    return 0;
  }
  if (n == 1) {
    return 1;
  }
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}
console.log(fibonacciRecursive(5));
console.log(fibonacciRecursive(6));
/**
 Output 
 5
 8 
 5 
 8
 */

/*
Recursion tree for fibonacciRecursive(5):

                                  fibonacciRecursive(5)
                                            -
                                          -      -
                                        -           -
                                      -                -
                      fibonacciRecursive(4)          fibonacciRecursive(3)
                         -                                          -
                      -      -                                   -      -
                   -           -                              -             -
                -                -                        -                      -
      fibonacciRecursive(3) fibonacciRecursive(2)    fibonacciRecursive(2)    fibonacciRecursive(1) 
                -                          -                                        (1)
            -      -                     -     -
          -          -                -            -
       -               -            -                   -
      -                 -  fibonacciRecursive(1)    fibonacciRecursive(0) 
    -                     -         (1)                   (0)
 fibonacciRecursive(2) fibonacciRecursive(1)              
           -                   (1)
 -      -      -
   -                -
 -                      -
 fibonacciRecursive(1)  fibonacciRecursive(0)
                               (0)

*/
