// iterative approach

function sumOfnNumbers(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum = sum + i;
  }
  return sum;
}
console.log(sumOfnNumbers(3));
console.log(sumOfnNumbers(5));

// recursive appraoch

function sumOfnNumbersRecursive(n) {
  if (n == 1) {
    return n;
  }
  return n + sumOfnNumbersRecursive(n - 1);
}
console.log(sumOfnNumbersRecursive(3));
console.log(sumOfnNumbersRecursive(4));

/* 
                                sumOfnNumbersRecursive(4)                                                                  =====> return 10
                                                    -
                                                -      -
                                              -           -
                                            -                -
                                           4        sumOfnNumbersRecursive(3)                                              =====> return 4 + 6
                                                               -
                                                            -      -
                                                          -           -
                                                        -                -
                                                        3      sumOfnNumbersRecursive(2)                                   =====> return 3 + 3 
                                                                                -
                                                                             -     -
                                                                           -          -
                                                                         -               -
                                                                         2       sumOfnNumbersRecursive(1)                 =====> return 2 + 1
                                                                                       -
                                                                                     -   
                                                                                  -        
                                                                                1                                          =====> return 1;
*/
