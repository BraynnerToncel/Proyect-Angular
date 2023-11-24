import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {

  nombre:string = 'Braynner Silva'; 
  correo:any= 'braynnert31@gmail.com';
  edad:number=18;
  fecha = new Date();
  html:string = '<strong> texto en negrita </strong>';
  paises: Array<any>;
  ejemplo:string;
  numero:number=14;


  constructor() { 
    
    this.paises = [{
      nombre: "Chile",
      dominio: "cl"
    },
    {
      nombre: "Colombia",
      dominio: "co"
    },
    {
      nombre: "España",
      dominio: "es"
    },
    {
      nombre: "Uruaguay",
      dominio: "ur"
    }  
  ];
  }

  ngOnInit(): void {
  }

}
