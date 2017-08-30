import { Component, OnInit } from '@angular/core';
import { Todo } from './model/todo';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'sd-external',
  templateUrl: './todo.component.html',
  styleUrls: ['/todo.scss']
})
export class TodoComponent {
  newTodo: Todo = new Todo();

  constructor(private todoService: TodoService) {
  }

  addTodo() {
    this.todoService.addTodo(this.newTodo);
    this.newTodo = new Todo();
  }

  toggleTodoComplete(todo: any) {
    this.todoService.toggleTodoComplete(todo);
  }

  removeTodo(todo: any) {
    this.todoService.deleteTodoById(todo.id);
  }

  get todos() {
    return this.todoService.getAllTodos();
  }
}
