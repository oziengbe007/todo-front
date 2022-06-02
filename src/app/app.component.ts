
import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from './todo-service.service';
import {Todo} from './todo-model';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  public todo_item: any = [];

  public todos: any = [];

  public _id : String = "";

  public message: String = "Helo world";
 

  constructor(private _todoService: TodoServiceService){}
  
  ngOnInit() {
    this._todoService.getAllTodos()
    .subscribe(data => {
      this.todos = data;
      console.log(this.todos);
    })
  }
  addTodo(todoForm: NgForm) : void{
    this._todoService.saveTodo(todoForm.value).subscribe(data => {
      console.log(data);
    })
  }
  
  updateTodo(){
    //Updates selected todo item on the database

    this._todoService.update(this.todo_item.id).subscribe(() =>{
      console.log("item updated");
    })

  }

  deleteTodo(){
    //deletes selected todo item from the database
    this._todoService.delete(this.todo_item.id).subscribe( () : any =>{
        console.log("todo deleted");
    })
  }
}


