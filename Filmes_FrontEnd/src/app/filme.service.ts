import { FilmeCopy } from './Filme copy';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import {Filme} from './Filme'
import { catchError, Observable, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {

  private readonly Api = "https://localhost:5001/Filme"

  constructor(private http:HttpClient) { }


  listar(): Observable<Filme[]>{
    return this.http.get<Filme[]>(this.Api)
  }

  criarPensamento(film: FilmeCopy): Observable<Filme>{
    return this.http.post<Filme>(this.Api, film)
  }

  deletar(id : number): Observable<Filme>{
    const url = `${this.Api}/${id}`
    return this.http.delete<Filme>(url)
  }

  editar(film: Filme): Observable<Filme>{
    const url = `${this.Api}/${film.filmeId}`
    return this.http.put<Filme>(url, film)
  }

  buscarPorId(id: number): Observable<Filme>{
    const url = `${this.Api}/${id}`
    return this.http.get<Filme>(url)
  }
}
