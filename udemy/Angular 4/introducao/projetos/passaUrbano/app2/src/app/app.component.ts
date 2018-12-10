import { Component, OnInit } from '@angular/core';
import { OfertasService } from './ofertas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ OfertasService ]
})


export class AppComponent {
  
  constructor(){

  }

  ngOnInit(){
    
  }

}
