import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGiftResponse } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root', // para poder usar el servicio de manera global
})
export class GifsService {
  private apiKey: string = 'LD7Vq7UJhVrg9Ktn9Q21afk1ZiWx4HxR';
  private _historial: string[] = []; //
  // TODO cambiar any por su tipo correspondiente
  public resultados: Gif [] = [];

  get historial() {
    //Romper con la referencia original y tener un nuevo array, se usa el operador spread ...
    return [...this._historial];
  }

  constructor( private http: HttpClient ) {

    //si localStorage es null que devuelva un array vacio
    this._historial = JSON.parse(localStorage.getItem('historial')!) || []
    
    /*if( localStorage.getItem('historial') ) {
      //Como _historial es un array y el locaStorage puede devolver null hay que usar !
      this._historial = JSON.parse( localStorage.getItem('historial')! );
    }*/
  }

  //query es el string que vamos a recibir y que usaremos para buscar
  buscarGifs(query: string) {
    //formateamos a minusculas
    query = query.trim().toLowerCase();

    //No añadimos los vacios
    if (query === '') return;

    //Para no añadir duplicados
    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      //Para estraer solo los diez últimos
      this._historial = this._historial.splice(0, 10);
      console.log(this._historial);
      //Almacenamiento en el LocalStorage
      localStorage.setItem('historial', JSON.stringify(this._historial))
    }

    this.http.get<SearchGiftResponse>(`https://api.giphy.com/v1/gifs/search?api_key=LD7Vq7UJhVrg9Ktn9Q21afk1ZiWx4HxR&q=${ query }&limit=10`)
    .subscribe( (resp) => {
      console.log( resp.data );
      this.resultados = resp.data;
    });
  }

  
}
