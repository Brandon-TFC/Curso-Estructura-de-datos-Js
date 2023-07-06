class Node {
    constructor(value) {
        this.value = this.value;
        this.next = null;
    }
}



class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    peek() {
        return this.top;
    }
    push(value) {
        const newNode = Node(value);
            if (this.length === 0) {
                this.top = newNode;
                this.bottom = newNode;
        }   else{
                const holdingPointer = this.top;
                this.top = newNode;
                this.top.next = holdingPointer;
        }
        this.length++;
        return this;
    }
    //Reto de clase eliminar los ultimos elementos del nodo.
    pop() {
        if (!this.length) {
          console.error("There is no nodes in the stack.");
          return;
        }
        const topNode = this.top;
        if (this.length === 1) {
          this.top = null;
          this.bottom = null;
        } else {
          this.top = this.top.next;
        }
        this.length--;
        return topNode
      }
}

const myStack = new Stack();