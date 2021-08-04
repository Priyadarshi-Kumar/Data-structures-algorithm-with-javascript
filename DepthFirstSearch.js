class Node {
    constructor() {
        this.value = null;
        this.left = null; 
        this.right = null;
    }
}

class Bst {
    constructor() {
        this.root = null;
    }

    insert(value) {
        let newNode = new Node(value);
        if(this.root === null) {
            this.root = newNode;
            return this;
        } else {
            let current = this.root;
            while(true) {
                if(value === current.value) return null;
                if(value < current.value) {
                    if(current.left === null) {
                        current.left = newNode;
                        return this;
                    } else {
                        current = current.left;
                    }
                } else if(value > current.value) {
                    if(current.right === null) {
                        current.right = newNode
                        return this;
                    } else {
                        current = current.right;
                    }
                }
            }
        }
    }

    contains(value) {
        if(this.root === null) {
            return null;
        }
        let start = this.root,
        found = false;
        while(!found && current) {
            if(value < current.value) {
                current = current.left;
            } else if(value > current.value) {
                current = current.right
            } else {
                found = true;
            }
        }
        if(!found) {
            return false;
        }
        return true;
    }

    preOrder() {
        let data = [];
        let current = this.root;
        function traverse(node) {
            data.push(node.value);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(current);
        return data;
    }

    postOrder() {
        let data = [];
        let current = this.root;
        function traverse(node) {
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            data.push(node.value);
        }
        traverse(current);
        return data;
    }

    inOrder() {
        let data = [];
        let current = this.root;
        function traverse(node) {
            if(node.left) traverse(node.left);
            data.push(node.value);
            if(node.right) traverse(node.right);
        }
        traverse(current);
        return data;
    }
}