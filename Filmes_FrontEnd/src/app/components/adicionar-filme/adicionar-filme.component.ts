import { FilmeCopy } from './../../Filme copy';
import { FilmeService } from './../../filme.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Filme } from 'src/app/Filme';

@Component({
  selector: 'app-adicionar-filme',
  templateUrl: './adicionar-filme.component.html',
  styleUrls: ['./adicionar-filme.component.css']
})
export class AdicionarFilmeComponent implements OnInit {

  filme: FilmeCopy = {

    NomeDoFilme: "",
    Duracao: 0,
    Diretor: ""
  }

  constructor(private service: FilmeService, private router:Router) {
  }

  ngOnInit(): void {
  }

  criarFilme(){
    this.service.criarPensamento(this.filme).subscribe()
    this.router.navigate(['/filme'])
  }

}
