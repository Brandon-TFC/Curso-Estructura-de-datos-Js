import { MyArray } from "./MyArray";

export class BetterArray extends MyArray {
  constructor(){
    super()
    this.length = 0
    this.data = {}
  }

  shift(){
    // Tu código aquí 👈
    if (this.length === 0) {
      return undefined; // No se puede eliminar elementos de un array vacío
    }
    const firsrItem = this.data[0];

    for (let i = 0; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return firsrItem;
    
  }
}
