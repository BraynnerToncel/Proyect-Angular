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
  cantidad:number = 1234567;
  texto:string = "Reina en mi espíritu una alegría admirable, muy parecida a las dulces alboradas de la primavera, de que gozo aquí con delicia. Estoy solo, y me felicito de vivir en este país, el más a propósito para almas como la mía, soy tan dichoso, mi querido amigo, me sojuzga de tal modo la idea de reposar, que no me ocupo de mi arte. Ahora no sabría dibujar, ni siquiera hacer una línea con el lápiz; y, sin embargo, jamás he sido mejor pintor Cuando el valle se vela en torno mío con un encaje de vapores; cuando el sol de mediodía centellea sobre la impenetrable sombra de mi bosque sin conseguir otra cosa que filtrar entre las hojas algunos rayos que penetran hasta el fondo del santuario, cuando recostado sobre la crecida hierba, cerca de la cascada, mi vista, más próxima a la tierra, descubre multitud de menudas y diversas plantas; cuando siento más cerca de mi corazón los rumores de vida de ese pequeño mundo que palpita en los tallos de las hojas, y veo las formas innumerables e infinitas de los gusanillos y de los insectos; cuando siento, en fin, la presencia del Todopoderoso, que nos ha creado";

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
