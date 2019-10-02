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
            if (this._inventario.length == 0) {
                this._inventario[0] = nuevoArticulo;
            } else {
                let posicion = this._searchVariable(articulo.codigo);
                for (let i = this._inventario.length - 1; i >= posicion - 1; i--) {
                    this._inventario[i + 1] = this._inventario[i];
                }
                this._inventario[posicion - 1] = nuevoArticulo;
            }
        }
    }

    obtenerInventarioComoCadena() {
        this._inventarioToString();
    }

    _inventarioToString() {
        this._inventarioString = "";
        for (let i = 0; i < this._inventario.length; i++) {
            this._inventarioString += this._inventario[i].toString() + "<br>";
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
            _buscarArticuloRegistrado()
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

    _searchVariable() { //busqueda binaria
        let ultimaPosicion = this._inventario.length - 1,
            primeraPosicion = 0,
            media = 0;

        while (this._obtenerDifereca(primeraPosicion, ultimaPosicion) >= 1) {
            media = this._obtenerMedia(primeraPosicion, ultimaPosicion);
            if (codigo < this._inventario[media].codigo) {
                ultimaPosicion = media;
            } else {
                primeraPosicion = media;
            }
        }
        if (codigo > this._inventario[ultimaPosicion].codigo) {
            return ultimaPosicion;
        } else {
            return primeraPosicion;
        }
    }

    _obtenerMedia(bP, uP) {
        return Math.trunc((bP + uP) / 2);
    }

    _obtenerDifereca(bP, uP) {
        return (uP - bP) / 2;
    }
}