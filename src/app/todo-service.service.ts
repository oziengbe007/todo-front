import { Injectable } from '@angular/core';
import{ Todo } from './todo-model';
import{ Observable } from 'rxjs'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {
  private url = "http://localhost:4000/";

  private myid!: number;

  constructor(private _http: HttpClient) { }

  getAllTodos(): Observable<any>{
    return this._http.get<any>(`${this.url}home`);
  }

  saveTodo(todo : any): Observable<Todo>{
    return this._http.post<Todo>(`${this.url}add-todo`, todo, {
      headers : new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    })
  }

  update(todoitem : any):Observable<void>{
    return this._http.put<void>(`${this.url}${todoitem.id}`, todoitem, {
      headers : new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    });

  }

  delete(id: number): Observable<void>{
    return this._http.delete<void>(`${this.url}delete/${id}`);
  }


}
