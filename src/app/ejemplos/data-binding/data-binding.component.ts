import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  disable:boolean = false;
  color:string="blue";
  texto:string="Mi muñeca me hablo";
  img:string="imagen1.jpg"
  ancho:number=100;
  alto:number=100;
  constructor() { }

  ngOnInit(): void {
  }

  cambiar(){
   
    this.img = "imagen2.jpg";
    this.ancho=300;
    this.alto=300;

  }

}
