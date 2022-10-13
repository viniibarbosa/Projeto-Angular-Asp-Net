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




}
