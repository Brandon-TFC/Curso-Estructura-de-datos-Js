/*Desafio resuelto de la clase getAllKeys*/
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
