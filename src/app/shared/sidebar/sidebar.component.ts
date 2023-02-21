import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',

})
export class SidebarComponent {
  //gifsService!: GifsService;

  constructor( private gifsService: GifsService ) {
    
  }
  get historial(){

    return this.gifsService.historial;
  }

  buscar ( item: string ) {

    console.log( 'Valor de item: ' + item);
    this.gifsService.buscarGifs( item);
  }
}
