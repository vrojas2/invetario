export default class Articulo {
    constructor(articulo) {
        this._codigo = articulo.codigo;
        this._nombre = articulo.nombre;
        this._precio = articulo.precio;
        this._cantidad = articulo.cantidad;
        this._descripcion = articulo.descripcion;
    }

    get codigo() {
        return this._codigo;
    }

    get nombre() {
        return this._nombre;
    }

    get precio() {
        return this._precio;
    }

    get cantidad() {
        return this._cantidad;
    }

    get descripcion() {
        return this._descripcion;
    }
    
    /*
    set price(newPrice) {
        this._price = newPrice;
    }
    
    set quantity(newQuantity) {
        this._quantity = newQuantity;
    }

    set description(newDescription) {
        this._description = newDescription;
    }*/

    toString(){
        return "codigo del articulo: "+ this._codigo +" nombre del articulo: "+ this._nombre +"codigo del articulo"+
        this._codigo +" cantidad de articulos: "+ this._cantidad +" descripción de articulos: "+ this._descripcion;
    }
}