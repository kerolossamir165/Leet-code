/**
 * @param {string[]} nums
 * @param {number} k
 * @return {string}
*/


class MaxPQ {
    constructor() {
      this.pq = []; // 0-indexed array
      this.N = 0;
    }
  
    insert(element) {
      this.pq[this.N] = element; // Insert at the end of the array
      this.swim(this.N); // Restore heap property by swimming the new element up
      this.N++;
    }
  
    delMax() {
      let max = this.pq[0]; // Max is at the root (index 0)
      this.swap(0, this.N - 1); // Swap root with the last element
      this.N--; // Reduce the size of the heap
      this.sink(0); // Restore heap property by sinking the new root
      this.pq[this.N] = null; // Remove the last element
      return max;
    }
  
    isEmpty() {
      return this.N === 0;
    }
  
    size() {
      return this.N;
    }
  
    max() {
      return this.pq[0]; // Max is at the root (index 0)
    }
  
    swim(k) {
      while (k > 0 && this.pq[Math.floor((k - 1) / 2)] < this.pq[k]) {
        // Parent is at (k - 1) / 2
        this.swap(k, Math.floor((k - 1) / 2)); // Swap with parent if larger
        k = Math.floor((k - 1) / 2); // Move up to parent
      }
    }
  
    sink(k) {
      while (2 * k + 1 < this.N) {
        // While there is at least one child
        let j = 2 * k + 1; // Left child
        if (j + 1 < this.N && this.pq[j] < this.pq[j + 1]) {
          j++; // Right child exists and is larger, move to right child
        }
        if (this.pq[k] >= this.pq[j]) break; // If parent is larger than the largest child, we're done
        this.swap(k, j); // Otherwise, swap with the largest child
        k = j; // Move down to child
      }
    }
  
    swap(i, j) {
      let temp = this.pq[i];
      this.pq[i] = this.pq[j];
      this.pq[j] = temp;
    }
  
    delRandom() {
      // Step 1: Generate a random index
      let randomIndex = Math.floor(Math.random() * this.N);
  
      // Step 2: Swap the element at randomIndex with the last element
      swap(this.pq, randomIndex, this.N - 1);
  
      // Step 3: Remove the last element (now it's the random element)
      let removedElement = this.pq[this.N - 1];
      this.N--;
  
      // Step 4: Restore heap property by sinking or swimming the new element at randomIndex
      this.sink(randomIndex);
      this.swim(randomIndex);
  
      return removedElement;
  }
  
  }



  var kthLargestNumber = function(nums, k) {
    let maxQ = new MaxPQ()
    for(let i = 0; i < nums.length; i++) {
        maxQ.insert(BigInt(nums[i]))
    }

    while(k > 1) {
        maxQ.delMax()
        k--
    }    
     
    return `${maxQ.max()}`
    
};

