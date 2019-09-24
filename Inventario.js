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

    registrarArticulo(articulo) {
        if (this._buscarArticuloRegistrado(articulo.codigo) == -1) {
            let nuevoArticulo = new Articulo(articulo);
            this._inventario[this._inventario.length] = nuevoArticulo;
        }
    }

    agregarArticuloEnPosicion(articulo, posicion) {
        if (this._buscarArticuloRegistrado(articulo.codigo) == -1) {
            let nuevoArticulo = new Articulo(articulo);
            for (let i = this._inventario.length - 1; i >= posicion - 1; i--) {
                this._inventario[i + 1] = this._inventario[i];
            }
            this._inventario[posicion - 1] = nuevoArticulo;
        }
    }

    obtenerInventarioComoCadena() {
        this._inventarioToString();
    }

    _inventarioToString() {
        this._inventarioString="";
        for (let i = 0; i < this._inventario.length; i++) {
            this._inventarioString += this._inventario[i].toString()+"<br>";
        }
    }

    _buscarArticuloRegistrado(codigo) {
        for (let i = 0; i < this._inventario.length; i++) {
            if (this._inventario[i].codigo == codigo) {
                return i;
            }
        }
        return -1;
    }

    buscarConsulta(codigo) {
        let index = this._buscarArticuloRegistrado(codigo);
        if (index > -1) {
            return this._inventario[index].toString();
        }
    }

    eliminarArticulo(codigo) {
        let index = this._buscarArticuloRegistrado(codigo);
        if (index >= 0) {
            for (let i = index + 1; i <= this._inventario.length; i++) {
                this._inventario[i - 1] = this._inventario[i]
            }
        }
        let nuevoInventario = [];
        for (let i = 0; i <= this._inventario.length - 2; i++) {
            nuevoInventario[i] = this._inventario[i];
        }
        this._inventario = nuevoInventario;
    }
}