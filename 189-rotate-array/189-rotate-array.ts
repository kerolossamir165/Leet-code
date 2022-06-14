/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
    let result:number[] = []

    for(let i = 0 ; i < nums.length ; i++ ) {
        let positon = ( nums.length - (k % nums.length )+ i ) % nums.length
        result[i] = nums[positon]
    }

    for(let i = 0 ; i < nums.length ; i++ ) {
        nums[i] = result[i] 
    }
}