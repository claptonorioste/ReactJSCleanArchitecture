import { Item } from "../entities/Item";
import { ItemRepository } from "../repositories/ItemRepository";

export interface ItemService {
  GetItems(): Promise<Item[]>;
  AddTodo(data:Item): void;
  DeleteTodo(data:Item): void;
  CompleteTodo(data:Item): void;
}

export class ItemServiceImpl implements ItemService {
  itemRepo: ItemRepository;

  constructor(ir: ItemRepository) {
    this.itemRepo = ir;
  }

  async GetItems(): Promise<Item[]> {
    return this.itemRepo.GetItems();
  }
  
  async AddTodo(data:Item) {
    this.itemRepo.AddTodo(data);  
  }

  async DeleteTodo(data:Item){
    this.itemRepo.DeleteTodo(data);
  }

    async CompleteTodo(data:Item) {
      this.itemRepo.CompleteTodo(data);
  }



// export interface TodoService {
//   GetTodo(): Promise<Todo[]>;
//   AddTodo(data:Todo): void;
//   DeleteTodo(data:Todo): void;
//   CompleteTodo(data:Todo): void;
// }

// export default class ItemServiceImpl implements TodoService {
//   todoRepo: TodoRepository;

//   constructor(ir: TodoRepository) {
//     this.todoRepo = ir;
//   }

//   async GetTodo(): Promise<Todo[]> {
//     return this.todoRepo.GetTodo();
//   }

//   async AddTodo(data:Todo) {
    
//     if (data.text.length === 0) {
//       throw "Field can't be empty!"
//     } 
//     else if (data.text.length < 4){
//       throw "Minimum of 4 characters!"
//     }
//     else {
//       this.todoRepo.AddTodo(data);
//     }
//   }

//   async DeleteTodo(data:Todo){

//     if (data.completed){
//       throw "Can't Deleted Todo"
//     }else{
//       this.todoRepo.DeleteTodo(data);
//     }
//   }

//   async CompleteTodo(data:Todo) {
//     this.todoRepo.CompleteTodo(data);
//   }
// }
