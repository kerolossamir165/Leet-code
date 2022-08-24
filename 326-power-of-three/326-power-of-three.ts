function isPowerOfThree(n: number): boolean {
    if(n === 0 ) return false 
    if(n === 1 ) return true    
    return isPowerOfThree(n / 3)
};