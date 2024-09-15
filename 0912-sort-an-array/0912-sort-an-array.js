/**
 * @param {number[]} nums
 * @return {number[]}
 */
function mergeSort(arr) {

    if(arr.length === 1) return arr

    let mid = Math.floor(arr.length  /2 )

    let left = arr.slice(0, mid)
    let right = arr.slice(mid)

    let leftSorted = mergeSort(left)
    let rightSorted = mergeSort(right)

    return merge(leftSorted, rightSorted)

}

function merge(left, right) {
    let temp = []
    let leftPointer = 0
    let rightPointer = 0

    while(leftPointer < left.length && rightPointer < right.length) {
        if( left[leftPointer] < right[rightPointer]) {
            temp.push(left[leftPointer])
            leftPointer++
        }else {
            temp.push(right[rightPointer])
            rightPointer++;
        }
    }

    while(leftPointer < left.length){
        temp.push(left[leftPointer])
        leftPointer++
    }

    while(rightPointer < right.length){
        temp.push(right[rightPointer])
        rightPointer++
    }
    return temp
}




var sortArray = function(nums) {
    
    return mergeSort(nums)
};