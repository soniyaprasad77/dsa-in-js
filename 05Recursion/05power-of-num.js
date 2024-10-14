// power of a base
// iterative approach
function powerOfNumIterative(base, power) {
  let result = 1;
  for (i = 0; i < power; i++) {
    if (power === 0) {
      result = 1;
    }
    result *= base;
  }
  return result;
}
console.log(powerOfNumIterative(2, 3));

// recursive
function powerOfNumRecursive(base, power) {
  if (power == 0) {
    return 1;
  }
  return base * powerOfNumRecursive(base, power - 1);
}
console.log(powerOfNumRecursive(2, 3));
/*
Output:
 8
 8
 */
/* 
                                powerOfNumRecursive(2,3)                                                                  =====>  8
                                                    -
                                                -      -
                                              -           -
                                            -                -
                                           2       powerOfNumRecursive(2,2)                                              =====>  2 * 4
                                                               -
                                                            -      -
                                                          -           -
                                                        -                -
                                                        2      powerOfNumRecursive(2,1)                                   =====>  2 * 2 
                                                                                -
                                                                             -     -
                                                                           -          -
                                                                         -               -
                                                                         2       powerOfNumRecursive(2,0)                 =====>  2 * 1
                                                                                       -
                                                                                     -   
                                                                                  -        
                                                                                1                                          =====> return 1;
*/

