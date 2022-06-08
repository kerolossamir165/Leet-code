function isPlaindrom(s:string):boolean {
  let left:number =  0
  let right:number = s.length - 1 

  while(left < right) {
    if(s[left] !== s[right]) {
      return false
    }
    left++
    right--
  }
  return true
}

function removePalindromeSub(s: string): number {
    return isPlaindrom(s) ? 1 : 2
};