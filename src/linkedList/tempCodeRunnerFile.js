class Node {
    constructor(value) {
        this.value = value,
        next = null;
    }
}


class MySinglyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
        }
        this.tail = this.head;

        this.legth = 1;
    }
    append(value) {
        const newNode = new Node(value);

        this.next = newNode; //Agrega un nuevo nodo de .next al final
        this.tail = newNode; //posicionamiento del nodo en la cola
        this.legth++;

        return this;
    }
}


let myLinkedList = new MySinglyLinkedList(1);