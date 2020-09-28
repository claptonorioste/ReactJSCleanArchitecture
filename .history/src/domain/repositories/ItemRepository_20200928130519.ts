import { Item } from "../entities/Item";

export interface ItemRepository {
  GetItems(): Promise<Item[]>;
  AddTodo(data:Item): void;
  DeleteTodo(data:Item): void;
  CompleteTodo(data:Item): void;
}
