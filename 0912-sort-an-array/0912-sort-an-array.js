/**
 * @param {number[]} nums
 * @return {number[]}
 */
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
    if(arr.length == 1) {
        return arr
    }
    
    if(low >= high) {
        return 
    }

    let mid = Math.floor((low + high) /2 )

    mergeSort(arr, low, mid)
    mergeSort(arr, mid + 1, high)

    merge(arr, low, mid, high)


    return arr
}

var sortArray = function(nums) {
    
    return mergeSort(nums)
};