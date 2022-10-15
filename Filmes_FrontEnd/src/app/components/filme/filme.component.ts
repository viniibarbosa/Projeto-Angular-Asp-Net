import { Router } from '@angular/router';
import { FilmeService } from './../../filme.service';
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

  constructor(private service: FilmeService, private router: Router) { }

  ngOnInit(): void {

  }

  excluir(): void{

    if(this.filmes.filmeId){
      this.service.deletar(this.filmes.filmeId).subscribe(
        ()=> {
          this.router.navigate(['filmes'])
        }
      )
    }
  }

  
}
