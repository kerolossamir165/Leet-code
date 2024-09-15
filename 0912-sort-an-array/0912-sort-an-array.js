/**
 * @param {number[]} nums
 * @return {number[]}
 */
// function mergeSort(arr) {

//     if(arr.length === 1) return arr

//     let mid = Math.floor(arr.length  /2 )

//     let left = arr.slice(0, mid)
//     let right = arr.slice(mid)

//     let leftSorted = mergeSort(left)
//     let rightSorted = mergeSort(right)

//     return merge(leftSorted, rightSorted)

// }

// function merge(left, right) {
//     let temp = []
//     let leftPointer = 0
//     let rightPointer = 0

//     while(leftPointer < left.length && rightPointer < right.length) {
//         if( left[leftPointer] < right[rightPointer]) {
//             temp.push(left[leftPointer])
//             leftPointer++
//         }else {
//             temp.push(right[rightPointer])
//             rightPointer++;
//         }
//     }

//     while(leftPointer < left.length){
//         temp.push(left[leftPointer])
//         leftPointer++
//     }

//     while(rightPointer < right.length){
//         temp.push(right[rightPointer])
//         rightPointer++
//     }
//     return temp
// }

function merge(arr, low , mid , high) {
    let aux = []
    for(let k = low ; k <= high ; k++) {
        aux[k] = arr[k]
    }
    let i = low
    let j = mid + 1


    for (let k = low ; k <= high; k++) {
        if(i > mid) {
            arr[k] = aux[j++]
        }else if (j > high) {
            arr[k] = aux[i++]
        }else if (aux[i] <= aux[j]) {
            arr[k]= aux[i++]
        }else {
            arr[k] = aux[j++]
        }
    }  
    return arr
}


function mergeSort(arr, low = 0, high= arr.length - 1) {
   
    let N = arr.length
    for(let size = 1 ; size < N ; size += size) {
        for(let low = 0; low <  N - size ; low += 2*size) {
            let mid = low + size - 1
            let high = Math.min(low + 2*size - 1, N - 1)
            merge(arr, low, mid, high)
        }
    }
    return arr
}



var sortArray = function(nums) {
    
    return mergeSort(nums)
};