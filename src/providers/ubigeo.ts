import { Injectable, Inject } from '@angular/core';
import { LIST_DEPARTAMENTOS, LIST_PROVINCIAS, LIST_DISTRITOS } from '../values/ubigeo';

@Injectable()
export class UbigeoProvider {

    constructor() {

    }

    public ListDepartamentos() {
        return new Promise(resolve => {
            resolve(LIST_DEPARTAMENTOS);
        });
    }

    public ListProvincias(departamento_id: string) {
        return new Promise(resolve => {
            let provinciasResponse = LIST_PROVINCIAS.filter(p => p.departamento_id == departamento_id);
            resolve(provinciasResponse);
        });
    }

    public ListDistritos(departamento_id: string, provincia_id: string) {
        return new Promise(resolve => {
            let distritosResponse = LIST_DISTRITOS.filter(p => p.departamento_id == departamento_id && p.provincia_id == provincia_id);
            resolve(distritosResponse);
        });
    }

}
