import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs';
import { Observable } from 'rxjs';
import { LetoviBazaModel } from '../letovi-baza/letovi-baza.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  postLet(data : any):Observable<LetoviBazaModel> {
    return this.http.post<LetoviBazaModel>("http://localhost:3000/letovi", data).pipe(map((res:any)=>{
      return res;
    }))
  }

  getLet():Observable<LetoviBazaModel> {
    return this.http.get<LetoviBazaModel>("http://localhost:3000/letovi").pipe(map((res:any)=>{
      return res;
    }))
  }
  updateLet(data : any, id: number):Observable<LetoviBazaModel> {
    return this.http.put<LetoviBazaModel>("http://localhost:3000/letovi"+"/"+id,data).pipe(map((res:any)=>{
      return res;
    }))
  }
  deleteLet(id : number):Observable<LetoviBazaModel> {
    return this.http.delete<LetoviBazaModel>("http://localhost:3000/letovi"+"/"+id).pipe(map((res:any)=>{
      return res;
    }))
  }
}
