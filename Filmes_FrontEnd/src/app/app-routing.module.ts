import { EditarFilmeComponent } from './components/editar-filme/editar-filme.component';
import { AdicionarFilmeComponent } from './components/adicionar-filme/adicionar-filme.component';
import { ListarFilmesComponent } from './components/listar-filmes/listar-filmes.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'filme',
    pathMatch: 'full'
  },
  {
    path: 'filme',
    component: ListarFilmesComponent
  },
  {
    path: 'adicionarFilme',
    component: AdicionarFilmeComponent
  },
  {
    path: 'filme/editarFilme/:id',
    component: EditarFilmeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
