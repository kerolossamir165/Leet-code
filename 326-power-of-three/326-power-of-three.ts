function isPowerOfThree(n: number): boolean {
    while(n > 1 ) {
        n = n / 3
    }
    
    return n === 1 ? true : false
};