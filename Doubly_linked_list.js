class Node {
    constructor(val) {
        this.next = null;
        this.prev = null;
        this.val = val
    }
}

class DLL {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if(this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if(!this.length) return undefined;
        let poppedNode = this.tail;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length--;
        return poppedNode;
    }

    shift() {
        if(!this.length) return undefined;
        let oldHead = this.head;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        }
        else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }

    unshift() {
        let newNode = new Node(val);
        if(this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index) {
        if(index < 0 || index >= this.length ) return null;
        if(index <= this.length / 2) {
            let count = 0;
            let current = this.head;
            while(count != index) {
                current = current.next;
                count++
            }
            return current;
        } else {
            let count = this.length -1;
            let current = this.tail;
            while(count != index) {
                current = current.prev;
                current--;
            }
            return current;
        }
        
    }

    set(index, value) {
        let foundNode = this.get(index);
        if(foundNode) {
            foundNode.val = value;
            return true;
        } 
        else return null;
    }

    insert(index, value) {
        if(index < 0 || index > this.length ) return null;
        if(index === 0) {
            return this.unshift(value)
        }
        if(index === this.length) return this.push(value);

        let newNode = new Node(value)
        let beforeNode = this.get(index-1)
        let afterNode = beforeNode.next;
        beforeNode.next = beforeNode
        newNode.prev = beforeNode
        newNode.next = afterNode
        afterNode.prev = newNode
        this.length++;
        return true;
    }

    remove(index) {
       if(index < 0 || index >= this.length ) return null;
        if(index === 0) {
            return this.shift()
        }
        if(index === this.length) return this.pop();
        let removedNode = this.get(index);
        removedNode.prev.next = removedNode.next;
        removedNode.next.prev = removedNode.prev;
        removedNode.next = null
        removedNode.prev = null
        this.length--;
        return removedNode;
    }
}