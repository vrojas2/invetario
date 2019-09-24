import Inventario from "./Inventario.js";

let btnRegistar = document.querySelector("#registrar"),
    btnConsulta = document.querySelector("#consulta"),
    btnInsertar = document.querySelector("#insertar"),
    mostrarInventario = document.querySelector("#verInventario"),
    mostrarConsulta = document.querySelector("#mostrarConsulta"),
    btnEliminar = document.querySelector("#eliminar");

btnRegistar.addEventListener("click", () => {
    m.registrarNuevoArticulo(m.infoInputs());
});

btnConsulta.addEventListener("click", () => {
    m.hacerConsulta(document.querySelector("#consultarCodigo").value);
});

btnInsertar.addEventListener("click", () => {
    let datos = m.infoInputs(),
        posicion = document.querySelector("#posicion").value;
    m.insertarArticulo(datos, posicion);
});

btnEliminar.addEventListener("click", () => {
    m.eliminarDelInventario(document.querySelector("#eliminarCodigo").value);
});

class Main {
    constructor() {
        this._baseInventario = new Inventario();
    }

    registrarNuevoArticulo(objNuevoArticulo) {
        this._baseInventario.registrarArticulo(objNuevoArticulo);
        this.verInventario();
    }

    insertarArticulo(articulo, posicion) {
        this._baseInventario.agregarArticuloEnPosicion(articulo, posicion);
        this.verInventario();
    }

    infoInputs() {
        let objNuevoArticulo = {
            codigo: document.querySelector("#codigo").value,
            nombre: document.querySelector("#nombre").value,
            precio: document.querySelector("#precio").value,
            cantidad: document.querySelector("#cantidad").value,
            descripcion: document.querySelector("#descripcion").value
        }
        return objNuevoArticulo;
    }

    verInventario() {
        this._baseInventario.obtenerInventarioComoCadena();
        mostrarInventario.innerHTML = this._baseInventario.inventarioString;
    }

    eliminarDelInventario(codigo) {
        this._baseInventario.eliminarArticulo(codigo);
        this.verInventario();
    }

    hacerConsulta(codigo) {
        mostrarConsulta.innerHTML = this._baseInventario.buscarConsulta(codigo);
    }
}

let m = new Main();