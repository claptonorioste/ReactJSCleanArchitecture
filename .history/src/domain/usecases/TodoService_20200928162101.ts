import { Todo } from "../entities/Todo";
import { TodoRepository } from "../repositories/TodoRepository";

export interface TodoService {
  GetItems(): Promise<Todo[]>;
  AddTodo(data:Todo): void;
  DeleteTodo(data:Todo): void;
 
}

export class TodoServiceImpl implements TodoService {
  todoRepo: TodoRepository;

  constructor(tr: TodoRepository) {
    this.todoRepo = tr;
  }

  async GetItems(): Promise<Todo[]> {
    return this.todoRepo.GetItems();
  }
  
  async AddTodo(data:Todo) {
    this.todoRepo.AddTodo(data);  
  }

  async DeleteTodo(data:Todo){
    this.todoRepo.DeleteTodo(data);
  }
  async UpdateTodo(data:Todo){
    this.todoRepo.UpdateTodo(data)
  }


}