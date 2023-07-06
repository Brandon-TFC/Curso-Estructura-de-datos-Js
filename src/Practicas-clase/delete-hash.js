/*Desafio resuelto */
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