// iterative approach

function isVowel(character) {
  let lowercase = character.toLowerCase();
  const vowels = "aeiou";
  if (vowels.indexOf(lowercase) !== -1) {
    return true;
  } else {
    return false;
  }
}

function countVowelsIterative(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (isVowel(str[i])) {
      count += 1;
    }
  }
  return count;
}
// console.log(countVowelsIterative("Hello"));
// console.log(countVowelsIterative("Soniya"));

// recursive approach
function countVowelsRecursive(str, strLength) {
  if (strLength == 1) {
    return Number(isVowel(str[0]));
  }
  return countVowelsRecursive(str, strLength - 1) + isVowel(str[strLength - 1]);
}
const myName = "Soniya";
console.log(countVowelsRecursive(myName, myName.length));
/* 
Output : 
3
 */

/*
                             cVR("Soniya", 6)              =====> return 3
                                        -
                                    -      -
                                  -           -
                                -                -
                        cVR("Soniy", 5)         iV("a")    =====> return 2 + 1
                              -
                          -      -
                        -           -
                      -                -
                cVR("Soni", 4)    iV("y")                  =====> return 2 + 0 
                        -
                     -     -
                   -          -
                 -               -
               cVR("Son", 3)   iV("i")                    =====> return 1 + 1
                    -
                 -      -
              -           -
            -                -   
        cVR("So", 2)       iV("n")                        =====> return 1 + 0
            -
         -      -
      -           -
   -                -
cVR("S", 1)       iV("o")                                  =====> return 0 + 1
    -
  -      
iV("S")                                                    =====> return 0 

            
 */
