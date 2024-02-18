import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component';
import { FormulariosComponent } from './paginas/formularios/formularios.component';
import { MaterialComponent } from './paginas/material/material.component';
import { Ruta2Component } from './paginas/ruta2/ruta2.component';
import { ErrorComponent } from './paginas/error/error.component';
import { Formularios2Component } from './paginas/formularios2/formularios2.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"formularios", component: FormulariosComponent},
  {path:"formularios2", component: Formularios2Component},
  {path:"material", component: MaterialComponent},
  {path:"ruta-2/:id/:slug", component: Ruta2Component},
  {path:"**", component: ErrorComponent}
  



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
