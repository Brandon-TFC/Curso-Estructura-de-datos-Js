class HashTable {
    constructor(size) {
      this.data = new Array(size);
    }
    hashMethod(key) {
      let hash = 0;
      for (let i = 0; i < key.length; i++) {
        hash = (hash + key.charCodeAt(i) * i) % this.data.length;
      }
      return hash;
    }
    set(key, value) {
      const address = this.hashMethod(key);
      if (!this.data[address]) {
        this.data[address] = [];
      }
      this.data[address].push([key, value]);
      return this.data;
    }
    get (key) {
        const address = this.hashMethod(key);
        const currentBucket = this.data[address];
        if(currentBucket) {
            for(let i = 0; i < currentBucket; i++){
                if (currentBucket[i][0] === key){
                    return currentBucket[i][1];
                }
            }
        }
        return undefined;
    }
    getAllKeys(){
        const keys = [];
        for (let i = 0; i < this.currentBucket.length; i++){
            if(this.currentBucket[i]){
                for(let j = 0; j < this.currentBucket[i].length; j++){
                    keys.push(this.currentBucket[i][j][0]);
                }
            }
        }
        return keys;
    }
    delete(key){
        const address = this.hashMethod(key);
        if(!this.currentBucket[address]){
            return null;
        }
        for (let i = 0; i < this.currentBucket[address].length; i++){
            if (this.currentBucket[address][i].key === key){
                return this.currentBucket[address].splice(i,1);
            }
        }
        return null;
    }
  }
  
  const myHashTable = new HashTable(50);

  //Agregar datos al set
  //myHastTable.set("axel", 1990);
  