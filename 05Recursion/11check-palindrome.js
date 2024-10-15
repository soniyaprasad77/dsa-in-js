// check whether a string is palindrome or not

// iterative
function checkPalindromeIterative(str) {
  if (str.length <= 1) {
    return true;
  }
  if (str[0] != str[str.length - 1]) {
    return false;
  }
  let halfStr = "";

  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] === str[str.length - 1 - i]) {
      halfStr += str[i];
    }
  }
  //   console.log(halfStr);
  //   console.log(str.substring(str.length / 2));
  return halfStr.split("").reverse().join("") === str.substring(str.length / 2);
}
console.log(checkPalindromeIterative("a"));
console.log(checkPalindromeIterative("hello"));
console.log(checkPalindromeIterative("level"));
console.log(checkPalindromeIterative("otto"));

/**
 Output: 
    true
    false
    true
    true
 */

//recursive

function checkPalindromeRecursive(str) {
  if (str.length <= 1) {
    return true;
  }
  if (str[0] === str[str.length - 1]) {
    return checkPalindromeRecursive(str.substring(1, str.length - 1));
  } else {
    return false;
  }
}

console.log(checkPalindromeRecursive("madam"));
console.log(checkPalindromeRecursive("hello"));

/**
    Output:
    true
    false
 */

/*
                checkPalindromeRecursive("madam")
                               -
                            -     -
                        -            -
                    -                   -
                           checkPalindromeRecursive("ada")
                                       -
                                    -     -
                                -            -
                            -                   -
                                    checkPalindromeRecursive("d")      == return true;
                                                
*/
