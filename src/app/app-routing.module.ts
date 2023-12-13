import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component';
import { FormulariosComponent } from './paginas/formularios/formularios.component';
import { MaterialComponent } from './paginas/material/material.component';
import { Ruta2Component } from './paginas/ruta2/ruta2.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"formularios", component: FormulariosComponent},
  {path:"material", component: MaterialComponent},
  {path:"ruta-2/:id/:slug", component: Ruta2Component}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
