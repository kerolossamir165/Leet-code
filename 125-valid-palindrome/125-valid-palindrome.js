/**
 * @param {string} s
 * @return {boolean}
 */
let removeSpace = (s, reverse = false) => {
  let text = s
    .replace(/[\s`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, "")
    .split("");

  return reverse
    ? text.reverse().join("").toLowerCase()
    : text.join("").toLowerCase();
};

var isPalindrome = function (s) {
  return removeSpace(s, true) === removeSpace(s);
};