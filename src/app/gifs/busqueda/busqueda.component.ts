import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {

  //Para obtener información de un elemento html
  //ViewChild localiza una etiqueta que tenga la referencia local txtBuscar
  // el nombre que le ponemos al ViewChild es txtBuscar que  va a ser de tipo HTMLInputElement
  //Par permitir que sea null se usa !
  //Como ElementRef es de tipo generico hay que especificar, hay que especificar de que tipo es para poder acceder a sus metodos, por ejemplo el .value
  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>; 

  //Para usar el servicio tenemos que insertarlo
  constructor( private gifsService: GifsService ) {}

  //ternimoBusqueda solo nos permite acceder a su valor y no podemos modificarlo
  buscar(){ // buscar(terminoBusqueda: string){
    const valor = this.txtBuscar.nativeElement.value;
    console.log(valor);
    //usamos el servicio para buscar
    this.gifsService.buscarGifs( valor );
    this.txtBuscar.nativeElement.value = '';
  }
}
