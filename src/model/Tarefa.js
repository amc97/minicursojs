class Tarefa {
    constructor(texto, id) {
        this._id = id;
        this._texto = texto;
        this._status = false;
    }

    get texto() {
        return this._texto;
    }

    set texto(texto) {
        this._texto = texto;
    }

    get id() {
        return this._id;
    }

    set id(id) {
        this._id = id;
    }

    get status() {
        return this._status;
    }
    // Comentário
    /* Comentário */
    set status(status) {
        this._status = status;
    }
}