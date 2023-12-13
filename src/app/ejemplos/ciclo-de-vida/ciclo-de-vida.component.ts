import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ciclo-de-vida',
  templateUrl: './ciclo-de-vida.component.html',
  styleUrls: ['./ciclo-de-vida.component.css']
})
export class CicloDeVidaComponent implements OnInit {
  texto:string="Texto inicial";
  constructor() { 
    //Se ejecuta al inicio de la clase
    console.log("Ejecucion desde el constructor")
  }

  ngOnInit(): void {
    console.log("Ejecucion desde el OnInit")
  }
  ngOnDestroy(){
    //Se ejecuta cuando se cierra el compent
    alert("Cierre");
  }
  ngDoCheck(){
    // Cuando el commponet tiene cambio
    console.log("Ejecuta el metodo OnCheck")
  }
  cambiarTexto(){
    this.texto= "Otro valor";
    console.log("Ejecucion en el ngDoCheck cambiando el texto");
  }

}
