class busquedaBinaria{
    constructor() {
        this.vec  = new Array();
        this.vector();
        this.vec.sort((a,b) => { return a - b;})
        console.log(this.vec);
        this.searchVariable();
        this.valor = 4
        console.log(this.searchVariable(this.valor));
        
    }

    numAle() {
        return Math.floor(Math.random() * 10 + 1);
    }

    vector() {
        for (let i = 0; i < 10; i++) {
           this.vec[i] = this.numAle();
        }
    }

    searchVariable() {
        let posicionMin = 0;
        let posicionMax = this.vec.length - 1;
        while(posicionMin <= posicionMax) {
            let posicionMedia = Math.floor((posicionMin+posicionMax) / 2);
            let found = this.vec[posicionMedia];
            if(found === this.valor) {
                return posicionMedia;
            }
            if(found > this.valor) {
                posicionMax = posicionMedia - 1;
            }
            else{
                posicionMin = posicionMedia + 1;
            }
        }
        return -1;
    }
}

let busqueda = new busquedaBinaria();






