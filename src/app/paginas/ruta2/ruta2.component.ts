import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ruta2',
  templateUrl: './ruta2.component.html',
  styleUrls: ['./ruta2.component.css']
})
export class Ruta2Component implements OnInit {
  id:string;
  slug:string;

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    let params:any = this.route.snapshot.params
    this.id = params.id;
    this.slug = params.slug;
    console.log('id = ' +this.id + '    |   slug = ' +this.slug );
  }

}
