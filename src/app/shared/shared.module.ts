import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { GifsService } from '../gifs/services/gifs.service';
import { GifsModule } from '../gifs/gifs.module';



@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
   
  ],
  exports: [
   SidebarComponent,
  ]
})
export class SharedModule { }
