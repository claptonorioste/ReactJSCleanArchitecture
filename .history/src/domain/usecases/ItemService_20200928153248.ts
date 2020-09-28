import { Item } from "../entities/Item";
import { ItemRepository } from "../repositories/ItemRepository";

export interface ItemService {
  GetItems(): Promise<Item[]>;
  AddTodo(data:Item): void;
  DeleteTodo(data:Item): void;
 
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
  async UpdateTodo(data:Item){
    this.itemRepo.UpdateTodo(data);
  }


}