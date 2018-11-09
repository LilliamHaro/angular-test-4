import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { Routes,RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { FormComponent } from './form/form.component';

const rutas: Routes = [
  { path:'', component:HomeComponent },
  { path:'home', component:HomeComponent },
  { path:'proyectos', component:ProyectosComponent },
  { path: 'forms', component: FormComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProyectosComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
