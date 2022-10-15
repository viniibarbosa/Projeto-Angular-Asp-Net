import { ActivatedRoute, Router } from '@angular/router';
import { FilmeService } from './../../filme.service';
import { Component, OnInit } from '@angular/core';
import { FilmeCopy } from 'src/app/Filme copy';
import { Filme } from 'src/app/Filme';

@Component({
  selector: 'app-editar-filme',
  templateUrl: './editar-filme.component.html',
  styleUrls: ['./editar-filme.component.css']
})
export class EditarFilmeComponent implements OnInit {

  filme: Filme = {
    filmeId: 0,
    nomeDoFilme: "",
    duracao: 0,
    diretor: ""
  }

  constructor(private service: FilmeService, private router: Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.buscarPorId(parseInt(id!)).subscribe(
      (filme)=> this.filme = filme
    )
  }

  editarFilme(){
    this.service.editar(this.filme).subscribe(
      ()=> {
        this.router.navigate(['/filme'])
      }
    )
  }

}
