/**
 * @param {string} s
 * @return {boolean}
 */
// let removeSpace = (s, reverse = false) => {
//   let text = s
//     .replace(/[\s`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, "")
//     .split("");

//   return reverse
//     ? text.reverse().join("").toLowerCase()
//     : text.join("").toLowerCase();
// };

var isPalindrome = function (s) {
  // return removeSpace(s, true) === removeSpace(s);
  let text = s
    .toLowerCase()
    // .replace(/[\s`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, "");
    .replace(/\W|_/g, "");

  for (let i = 0; i < text.length; i++) {
    if (text[i] !== text[text.length - i - 1]) {
      return false;
    }
  }
  return true;
};