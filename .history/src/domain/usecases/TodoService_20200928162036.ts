import { Todo } from "../entities/Todo";
import { TodoRepository } from "../repositories/TodoRepository";

export interface Todo {
  GetItems(): Promise<Todo[]>;
  AddTodo(data:Todo): void;
  DeleteTodo(data:Todo): void;
 
}

export class TodoServiceImpl implements TodoService {
  itemRepo: TodoRepository;

  constructor(ir: TodoRepository) {
    this.itemRepo = ir;
  }

  async GetItems(): Promise<Todo[]> {
    return this.itemRepo.GetItems();
  }
  
  async AddTodo(data:Todo) {
    this.itemRepo.AddTodo(data);  
  }

  async DeleteTodo(data:Todo){
    this.itemRepo.DeleteTodo(data);
  }
  async UpdateTodo(data:Todo){
    this.itemRepo.UpdateTodo(data)
  }


}