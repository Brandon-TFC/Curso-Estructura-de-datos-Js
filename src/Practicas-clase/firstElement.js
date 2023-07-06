class MyArray {
    constructor() {
        this.legth = 0;
        this.data = {}
    }
}

eliminarPrimero() {
    if (this.length === 0) {
      return; // No se puede eliminar elementos de un array vacío
    }
    
    for (let i = 0; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    
    delete this.data[this.length - 1];
    this.length--;
    
    return this.data;
  }
  /*Ejemplo de uso del metodo
const miArray = new MiArray();
miArray.agregarAlInicio(1);
miArray.agregarAlInicio(2);
miArray.agregarAlInicio(3);

console.log(miArray.data); // [3, 2, 1]

miArray.eliminarPrimero();

console.log(miArray.data); // [2, 1]
 */
  