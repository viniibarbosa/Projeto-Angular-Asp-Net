import { FilmeService } from './../../filme.service';
import { Component, OnInit } from '@angular/core';
import { Filme } from 'src/app/Filme';

@Component({
  selector: 'app-listar-filmes',
  templateUrl: './listar-filmes.component.html',
  styleUrls: ['./listar-filmes.component.css']
})
export class ListarFilmesComponent implements OnInit {

  listaFilmes: Filme[] =[]

  constructor(private service: FilmeService) { }

  ngOnInit(): void {
    this.service.listar().subscribe(
      (listaFilmes)=>{
      this.listaFilmes = listaFilmes
    })
  }

  
}
