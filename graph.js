/** Node class for graph. */

class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}


/** Graph class. */

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  /** add Node instance and add it to nodes property on graph. */  
  addVertex(vertex) {}

  /** add array of new Node instances and adds to them to nodes property. */
  addVertices(vertexArray) {}

  /** add edge between vertices v1,v2 */
  addEdge(v1, v2) {}

  /** remove edge between vertices v1,v2 */  
  removeEdge(v1, v2) {}

  /** remove vertex from graph:
   *
   * - remove it from nodes property of graph
   * - update any adjacency lists using that vertex
   */   
  removeVertex(vertex) {}

  /** traverse graph with DFS and returns array of Node values */  
  depthFirstSearch(start) {}

  /** traverse graph with BDS and returns array of Node values */
  breadthFirstSearch(start) {}
}

module.exports = {Graph, Node}
