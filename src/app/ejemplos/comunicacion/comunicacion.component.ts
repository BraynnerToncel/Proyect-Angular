import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comunicacion',
  templateUrl: './comunicacion.component.html',
  styleUrls: ['./comunicacion.component.css']
})
export class ComunicacionComponent implements OnInit {
  texto1:string="Texto 1";
  texto2:string="Texto 2";
  hijo:string;

  constructor() { }

  ngOnInit(): void {
  }

actualizarHijo(value:string){
  this.hijo = value;
}

}
