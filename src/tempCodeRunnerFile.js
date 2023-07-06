class MyArray {
    constructor() {
        this.legth = 0;
        this.data = {}
    }
    //Elemento para acceder a los datos
    get(index){
        return this.data[index];
    }
    //Agregamos elementos al array
    push(item){
        this.data[this.legth] = item;
        this.legth++; //Incrementamos el tamaño del array
        return this.data;
    }
    pop(){
        const lastitem = this.data[this.legth -1];
        delete this.data[this.legth -1];
        this.legth--;
        return lastitem;
    }
    //Metodo para eliminar un elemento
    delete(index) {
        const item = this.data[index];
        this.shitfIndex(index);

        return item;
    }
        shitfIndex(index){
            for(let i = index; i < this.length -1; i++) {
            this.data[i] = this.data[i+1];
            }
            delete this.data[this.legth -1];
            this.legth--;
        }
}

const myArray = new MyArray(); 
myArray.push('jose'); //Agregamos elementos al array
myArray.push('axel'); //Agregamos elementos al array
myArray.push('oscar'); //Agregamos elementos al array
myArray.delete(0)
console.log(myArray);