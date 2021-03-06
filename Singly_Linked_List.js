class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if(!this.head) {
            return undefined;
        }
        let current = this.head;
        let newTail = current;
        while(current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    shift() {
        if(!this.head) {
            return undefined;
        }
        let newHead = this.head.next;
        this.head = newHead;
        this.length--;
        if(this.length == 0) this.tail = null;
    }

    unshift(val) {
        let newNode = new Node(val)
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            let current = this.head;
            this.head = newNode;
            this.head.next = current;
        }
        this.length++;
    }

    get(index) {
        if(index < 0 || index >= this.length) return null;
        let counter = 0;
        let current = this.head;
        while(counter !== index) {
            current = current.next;
            counter++;
        }
        return current;
    }

    set(index, value) {
        let foundNode = this.get(index);
        if(foundNode) {
            foundNode.val = value;
            return true;
        }
        return false;
    }

    insert(index, value) {
        if(index < 0 || index >= this.length) return null;
        if(index === this.length) return this.push(value);
        if(index === 0) return this.unshift(value);
        let prev = this.get(index-1);
        let newNode = new Node(value);
        let temp = prev.next;
        newNode.next = temp;
        prev.next = temp;
        this.length++;
        return true;
    }

    remove(index) {
        if(index < 0 || index >= this.length) return null;
        if(index === 0) return this.shift();
        if(index === this.length - 1) return this.pop();
        let prevNode = this.get(index-1);
        let removed = prevNode.next;
        prevNode.next = removed.next;
        this.length--;
    }

    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let prev = null;
        let next;
        for(let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }

//     traverse() {
//         let current = this.head;
//         while (current) {
//             current = current.next;
//         }

//     }

}

let list = new SinglyLinkedList();
// list.push('I');

// list.push('I');
