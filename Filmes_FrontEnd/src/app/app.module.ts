import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmeComponent } from './components/filme/filme.component';
import { ListarFilmesComponent } from './components/listar-filmes/listar-filmes.component';
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmeComponent,
    ListarFilmesComponent,
    CabecalhoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
