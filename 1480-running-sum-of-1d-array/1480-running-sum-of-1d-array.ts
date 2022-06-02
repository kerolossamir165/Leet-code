function runningSum(nums: number[]): number[] {
    let arrNums:number[] = []
    let prevValue: number = 0 
    
    for(let i = 0 ; i < nums.length ; i++ ) {
        prevValue = nums[i] + prevValue
        
        arrNums.push(prevValue)
    }
    return arrNums
};