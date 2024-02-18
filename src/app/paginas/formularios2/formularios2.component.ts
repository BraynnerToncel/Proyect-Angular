import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formularios2',
  templateUrl: './formularios2.component.html',
  styleUrls: ['./formularios2.component.css']
})
export class Formularios2Component implements OnInit {
formulario:FormGroup;
usuario={
  nombre:"",
  correo:"",
  telefono:"",
  direccion:"",
  pais:""
 };
 paises:Array<any>
  constructor() {

   }

  ngOnInit(): void {
    this.formulario = new FormGroup({
      nombre: new FormControl(
        this.usuario.nombre,[
          Validators.required,
          Validators.minLength(4)
        ]

      ),
      correo: new FormControl(
        this.usuario.correo,[
          Validators.required,
          Validators.minLength(4),
          Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")

        ]
        
      ),
      telefono: new FormControl(
        this.usuario.telefono,[
          Validators.required,
          Validators.minLength(4),
          Validators.pattern("^[0-9]*$")
        ]
      ),
      direccion: new FormControl(
        this.usuario.direccion,[
          Validators.required,
          Validators.minLength(4)
        ]
      ),
      pais: new FormControl(
        this.usuario.pais
      ),
    });  
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
  // invocación de los  metodos getter del formulario - formulario no funcionaria
  get nombre() { return this.formulario.get('nombre')!; }
  get correo() { return this.formulario.get('correo')!; }
  get telefono() { return this.formulario.get('telefono')!; }
  get direccion() { return this.formulario.get('direccion')!; }
  get pais() { return this.formulario.get('pais')!; }

  enviar(){
    console.log('Nombre: ' + this.formulario.value.nombre + ' E-Mail: ' + this.formulario.value.correo +
    ' Telefono: ' + this.formulario.value.telefono + ' Dirección: ' + this.formulario.value.direccion +
    ' País: ' + this.formulario.value.pais  )
  }
}


