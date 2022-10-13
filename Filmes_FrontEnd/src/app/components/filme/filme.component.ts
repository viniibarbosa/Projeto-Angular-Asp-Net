import { Component, Input, OnInit } from '@angular/core';
import {Filme} from '../../Filme'

@Component({
  selector: 'app-filme',
  templateUrl: './filme.component.html',
  styleUrls: ['./filme.component.css']
})
export class FilmeComponent implements OnInit {


  @Input() filmes: Filme = {
    filmeId: 1,
    nomeDoFilme: "a",
    duracao: 0,
    diretor: "f"
  }

  constructor() { }

  ngOnInit(): void {

  }

}
