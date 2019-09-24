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

    set precio(nuevoPrecio) {
        this._precio = nuevoPrecio;
    }

    set cantidad(nuevaCantidad) {
        this._cantidad = nuevaCantidad;
    }

    set descripcion(nuevaDescripcion) {
        this._descripcion = nuevaDescripcion;
    }

    toString(){        
        return "Codigo del articulo: "+ this._codigo +" Nombre del articulo: "+ this._nombre +" Prescio del articulo: "+
        this._precio +" Cantidad de articulos: "+ this._cantidad +" Descripción de articulos: "+this._descripcion;
    }
}