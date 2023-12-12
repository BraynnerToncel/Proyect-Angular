import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicosComponent } from './ejemplos/basicos/basicos.component';
import { FormateaFechaPipe } from './utilidades/formatea-fecha.pipe';
import { FormateaNumerosPipe } from './utilidades/formatea-numeros.pipe';
import { DataBindingComponent } from './ejemplos/data-binding/data-binding.component';


@NgModule({
  declarations: [
    AppComponent,
    BasicosComponent,
    FormateaFechaPipe,
    FormateaNumerosPipe,
    DataBindingComponent, 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
