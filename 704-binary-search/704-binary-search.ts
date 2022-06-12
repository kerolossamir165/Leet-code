function search(nums: number[], target: number): number {
    let start: number = 0 
    let end : number = nums.length - 1 
    
    while(start <= end ) {
        let middle: number = Math.floor((start + end ) / 2 )
        
        if(target === nums[middle]) return middle 
        else if (target < nums[middle]) {
            end = middle - 1 
        } else {
            start = middle + 1 
        }
    }
    return -1
};