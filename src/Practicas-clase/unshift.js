 // Agrega un elemento al inicio del array
 class MyArray {
    constructor() {
        this.legth = 0;
        this.data = {}
    }
 unshift (item) {
    for (let i = this.length; i > 0; i--) {
        this.data[i] = this.data[i - 1];
    }   
    this.data[0] = item;
    this.length++;
    return this.data;
    }
}
const myArray = new MyArray(); 
myArray.push('jose'); //Agregamos elementos al array
myArray.push('axel'); //Agregamos elementos al array
myArray.push('oscar'); //Agregamos elementos al array


