/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const graph = Array.from({ length: numCourses }, () => []);
    const inDegree = new Array(numCourses).fill(0); // Track in-degrees
    const result = []; // Store the topological order

    // Calculate in-degrees
    prerequisites.forEach(([to, from]) => {
        
        graph[from].push(to);
        inDegree[to]++;
    });
    
    // Queue for nodes with zero in-degree
    const queue = [];
    for (let i = 0; i < numCourses; i++) {
      if (inDegree[i] === 0) queue.push(i);
    }

    while (queue.length > 0) {
      const course = queue.shift();
      result.push(course);

      graph[course].forEach(neighbor => {
            
            inDegree[neighbor]--;
            if (inDegree[neighbor] === 0) {
                queue.push(neighbor);
            }
        });
    }

    // Check if there was a cycle
    if (result.length !== numCourses) {
      return false
    }

    return true;
};