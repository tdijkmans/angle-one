import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from '../../services/todo.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}

  //Set dynamic css class for completed item

  setClass() {
    let classes = { todo: true, 'is-completed': this.todo.completed };
    return classes;
  }

  //Toggle complete status of item
  onToggle(todo) {
    console.log(`Toggle this todo: ${todo.title}`);
    todo.completed = !todo.completed;
    this.todoService
      .toggleCompleted(todo)
      .subscribe((todo) => console.log(todo));
  }

  //Toggle complete status of item
  onDelete(todo) {
    console.log(`Delete this todo: ${todo.title}`);
    this.deleteTodo.emit(todo);
  }
}
