// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
    }

    insertFirst(data){
        const node = new Node(data, this.head);
        this.head = node;
    }

    size(){
        let counter = 0;
        let node = this.head;
        while (node) {
            counter++;
            node = node.next;
        }
        return counter;
    }

    getFirst(){
        return this.head;
    }

    getLast(){
        if(this.head == null || this.head.next == null) return this.head;

        let node = this.head;
        while(node.next != null)
        {
            node = node.next;
        }
        return node;
    }

    clear() {
        this.head = null;
    }

    removeFirst(){
        if(this.head) this.head = this.head.next;
    }

    removeLast(){
        if(!this.head) return;

        let node = this.head;
        if (node.next == null) {
            this.head = null;
            return;
        }

        while(node.next != null && node.next.next != null)
        {
            node = node.next;
        }
        node.next = null;
    }
    
    insertLast(value){
        let node = this.getLast();
        let newNode = new Node(value);
        if (node) {
            node.next = newNode;
        } else {
            this.head = newNode;
        }
    }

    getAt(index) {
        let node = this.head;
        let counter = 0; 
        while (node && (counter < index))
        {
            node = node.next;
            counter++;
        }

        return node;
    }

    removeAt(index) {
        if (this.head === null) return;

        if (index === 0)
        {
            this.head = this.head.next;
        }

        let previous = this.getAt(index - 1);
        if (!previous || !previous.next) {
            return;
        }

        previous.next = previous.next.next;
    }

    insertAt(value, index){
        const newNode = new Node(value);
        if (this.head === null)
        {
            this.head = newNode; 
            return;
        }

        if (index === 0)
        {
            newNode.next = this.head;
            this.head = newNode;
            return;
        }

        let previous = this.getAt(index - 1); 
        if (previous === null){
            previous = this.getLast();
        }

        newNode.next = previous.next;
        previous.next = newNode;

    }
}

module.exports = { Node, LinkedList };
