// check the key occurance in array

// iterative

function findNumOfKeyOcc(arr, key) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === key) {
      count += 1;
    }
  }
  return count;
}
console.log(findNumOfKeyOcc([1, 3, 1, 6, 1, 8, 4], 1));

// recursive

function findNumOfKeyOccRecursive(arr, key, index = 0) {
  if (index >= arr.length) {
    return 0;
  }
  return (
    (arr[index] === key ? 1 : 0) + findNumOfKeyOccRecursive(arr, key, index + 1)
  );
}

console.log(findNumOfKeyOccRecursive([1, 3, 1, 6, 1, 8, 4], 1));

/**
                        findNumOfKeyRecursive([1,3,1,6,1,8,4], 1)              returns 3
                                   - 
                                -    -
                            -           -
                        -                  -
                        1          findNumOfKeyRecursive([3,1,6,1,8,4], 1)             2 + 1 
                                                  - 
                                                -    -
                                            -           -
                                        -                  -
                                        0          findNumOfKeyRecursive([1,6,1,8,4], 1)                 2 + 0
                                                            -
                                                        -       -
                                                    -               -
                                                -                      -
                                                1          findNumOfKeyRecursive([6,1,8,4], 1)                         1 + 1
                                                                      -
                                                                  -       -
                                                              -               -
                                                          -                      -
                                                          0          findNumOfKeyRecursive([1,8,4], 1)                            0 + 1  
                                                                                   -
                                                                               -       -
                                                                           -               -
                                                                       -                      -
                                                                       1          findNumOfKeyRecursive([8,4], 1)                       0 + 1
                                                                                                     -
                                                                                                 -       -
                                                                                             -               -
                                                                                         -                      -
                                                                                         0          findNumOfKeyRecursive([4], 1)           0 + 0 
                                                                                                               -
                                                                                                           -       -
                                                                                                       -               -
                                                                                                   -                      -
                                                                                                   0          findNumOfKeyRecursive([], 1)    0 + 0
                                                                                                                          (0)
 */