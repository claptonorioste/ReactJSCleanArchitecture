import { Todo } from "../entities/Todo";

export interface TodoRepository {
  GetItems(): Promise<Todo[]>;
  AddTodo(data:Todo): void;
  DeleteTodo(data:Todo): void;
  UpdateTodo(data:Todo): void;
}
