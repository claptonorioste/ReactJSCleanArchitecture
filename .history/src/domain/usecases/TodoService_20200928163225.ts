import { Todo } from "../entities/Todo";
import { TodoRepository } from "../repositories/TodoRepository";

export interface TodoService {
  GetTodos(): Promise<Todo[]>;
  AddTodo(data:Todo): void;
  DeleteTodo(data:Todo): void;
 
}

export class TodoServiceImpl implements TodoService {
  TodoRepo: TodoRepository;

  constructor(tr: TodoRepository) {
    this.TodoRepo = tr;
  }

  async GetTodos(): Promise<Todo[]> {
    return this.TodoRepo.GetItems();
  }
  
  async AddTodo(data:Todo) {
    this.TodoRepo.AddTodo(data);  
  }

  async DeleteTodo(data:Todo){
    this.TodoRepo.DeleteTodo(data);
  }
  async UpdateTodo(data:Todo){
    this.TodoRepo.UpdateTodo(data)
  }


}