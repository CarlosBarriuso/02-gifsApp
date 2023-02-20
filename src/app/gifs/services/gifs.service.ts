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

    //formateamos a minusculas
    query = query.trim().toLowerCase();

    //No añadimos los vacios
    if ( query === '') return;
    
    //Para no añadir duplicados
    if ( !this._historial.includes ( query) ){
      this._historial.unshift( query );
    }
    //Para estraer solo los diez últimos
    this._historial = this._historial.splice(0,10);
    console.log(this._historial);
  }
  constructor() { }
}
