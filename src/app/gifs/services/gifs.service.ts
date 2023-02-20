import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // para poder usar el servicio de manera global
})
export class GifsService {

  private _historial: string[] = []; //

  get historial(){
    //Romper con la referencia original y tener un nuevo array, se usa el operador spread ...
    return [...this._historial];
  }

  //query es el string que vamos a recibir y que usaremos para buscar
  buscarGifs ( query: string ) {

    this._historial.unshift( query );
    console.log(this._historial);
  }
  constructor() { }
}
