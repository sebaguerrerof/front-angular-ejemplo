import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http'

//Componentes
import { CrearDestinatarioComponent } from './components/crear-destinatario/crear-destinatario.component';
import { HacerTransferenciaComponent } from './components/hacer-transferencia/hacer-transferencia.component';
import { VerTransferenciaComponent } from './components/ver-transferencia/ver-transferencia.component';


@NgModule({
  declarations: [
    AppComponent,
    CrearDestinatarioComponent,
    HacerTransferenciaComponent,
    VerTransferenciaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
