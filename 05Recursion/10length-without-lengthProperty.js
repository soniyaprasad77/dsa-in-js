// implement length without length

// recursive

function recursiveLength(str) {
  if (str === "") {
    return 0;
  }
  return 1 + recursiveLength(str.substring(1));
}

console.log(recursiveLength("Soniya"));

/* 
Output:
6
*/

/*
             recursiveLength("Soniya")                             ====> return 6
                  -
                -   -
              -       -
            -           -
          1        recursiveLength("Soniy")                        ====> return 5 + 1
                          -
                        -   -
                      -       -
                    -           -
                  1            recursiveLength("Soni")              ====> return 4 + 1
                                -
                              -   -
                            -       -
                          -           -
                        1       recursiveLength("Son")               ====> return 3 + 1
                                      -
                                    -   -
                                  -       -
                                -           -
                              1        recursiveLength("So")          ====> return 2 + 1
                                              -
                                            -   -
                                          -       -
                                        -           -
                                     1         recursiveLength("S")    ====> return 1 + 1
                                              -
                                            -   -
                                          -       -
                                        -           -
                                       1         recursiveLength("")    ====> return 1 + 0
                                                        (0) 
*/