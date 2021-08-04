class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if(!this.adjacencyList[vertex])
            this.adjacencyList[vertex] = [];
    }

    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }

    removeEdge(v1, v2) {
        this.adjacencyList[v1] = this.adjacencyList[v1].filter( v => v !== v2);
        this.adjacencyList[v2] = this.adjacencyList[v2].filter( v => v !== v1);
    }

    removeVertex(vertex) {
        while(this.adjacencyList[vertex].length) {
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex];
    }

    dFSRecursive(start) {
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList
        (function dfs(vertex) {
            if(!vertex) return null;
            visited[vertex] = true;
            result.push(vertex)
            adjacencyList[vertex].forEach(neighbour => {
                if(!visited[neighbour]) {
                    return dfs(neighbour)
                } 
            })
        })(start);
    }

    dFSIterative(start) {
        const result = [];
        const visited = {};
        const stack = [start]
        visited[start] = true;
        while(stack.length) {
            let currentVertex = stack.pop();
            result.push(currentVertex);
            this.adjacencyList[currentVertex].forEach(neighbour => {
                if(!visited[neighbour]) {
                    visited[neighbour] = true;
                    stack.push(neighbour);
                }
            })
        }
        return result;
    }

    bFS(start) {
        const result = [];
        const visited = {};
        const queue = [start]
        let currentVertex;
        visited[start] = true;

        while(queue.length) {
            currentVertex = queue.shift();
            result.push(currentVertex)
            this.adjacencyList[currentVertex].forEach(neighbour => {
                if(!visited[neighbour]) {
                    queue.push(neighbour);
                    visited[neighbour] = true;
                }
            })
        }
    }
}