/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function(graph) {
    let vertices = graph.length
    let adjacencyList = graph
    const color = Array(vertices).fill(-1); // -1 means uncolored

    
    for (let i = 0; i < vertices; i++) {
      if (color[i] === -1) {
        if (!bfsCheck(i, color, adjacencyList)) return false;
      }
    }
    return true;
  }

function bfsCheck(start, color,adjacencyList) {
    const queue = [start];
    color[start] = 0; // Start with color 0

    while (queue.length > 0) {
      const vertex = queue.shift();

      for (const neighbor of adjacencyList[vertex]) {
        
        if (color[neighbor] === -1) {
          color[neighbor] = 1 - color[vertex];
          queue.push(neighbor);
        } else if (color[neighbor] === color[vertex]) {
          return false;
        }
      }
    }
    return true;
}
