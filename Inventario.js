import Articulo from "./Articulo.js";

export default class Inventario {
    constructor() {
        this._inventario = [];
        this._inventarioString = "";
    }

    get inventario() {
        return this._inventario;
    }

    get inventarioString() {
        return this._inventarioString;
    }

    registerArticulo(articulo) {
        if (this._searchForRegisteredProduct(articulo.codigo) == -1) {
            let nuevoArticulo = new Articulo(articulo);
            this._inventario[this._inventory.length] = nuevoArticulo;
        }
    }

    agregarArticuloInPosition(articulo, posicion) {
        let nuevoArticulo = new Articulo(articulo);
        for (let i = this._inventario.length - 1; i >= posicion - 1; i--) {
            this._inventario[i + 1] = this._inventario[i];
        }
        this._inventario[posicion - 1] = nuevoArticulo;
    }

    getInventarioAsString() {
        this._inventarioToString();
    }

    _inventarioToString() {
        this._inventarioString = "";
        for (let i = 0; i < this._inventario.length; i++) {
            this._inventarioString += this._inventario[i].toString() + "<br>";
        }
    }

}