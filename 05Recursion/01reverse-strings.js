// iterative approach

const reverseStringIterative = (str) => {
  let reverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }
  return reverse;
};
// recursive
const reverseStringRecursive = (str) => {
  if (str === "") {
    return str;
  }
  // return (
  //   str[str.length - 1] +
  //   reverseStringRecursive(str.substring(0, str.length - 1))
  // );
  let reversePart = reverseStringRecursive(str.substring(0, str.length - 1));
  let result = str[str.length - 1] + reversePart;
  console.log(
    `last character ${
      str[str.length - 1]
    } added before ${reversePart} which gives the reversed string as result ${result}`
  );
  return result;
};

console.log(reverseStringIterative("hello"));
console.log(reverseStringRecursive("hello"));
/*
Output 
olleh
last character h added before  which gives the reversed string as result h
last character e added before h which gives the reversed string as result eh
last character l added before eh which gives the reversed string as result leh
last character l added before leh which gives the reversed string as result lleh
last character o added before lleh which gives the reversed string as result olleh
olleh
*/

/*
Recursion Tree

                                         reverseStringRecursive("hello")                                                             =====> return olleh
                                                    -
                                                -      -
                                              -           -
                                            -                -
                                  str[str.length-1]=o       reverseStringRecursive("hell")                                           =====> return o + "lleh" = "olleh"
                                                               -
                                                            -      -
                                                          -           -
                                                        -                -
                                          str[str.length-1]=l        reverseStringRecursive("hel")                                   =====> return l + "leh" = lleh
                                                                                -
                                                                             -     -
                                                                           -          -
                                                                         -               -
                                                                str[str.length-1]=l    reverseStringRecursive("he")                  =====> return l + "eh" = leh
                                                                                       -
                                                                                     -   - 
                                                                                  -        - 
                                                                                -            -   
                                                                   str[str.length-1]=e    reverseStringRecursive("h")                =====> return  e +"h" = eh;
                                                                                                  -
                                                                                                -   - 
                                                                                              -        - 
                                                                                            -            -   
                                                                              str[str.length-1]=h    reverseStringRecursive("")       =====> return h + " "= h;


*/
