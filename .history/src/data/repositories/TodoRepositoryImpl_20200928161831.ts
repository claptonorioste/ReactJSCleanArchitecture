import { Item } from "../../domain/entities/Item";
import { ItemRepository } from "../../domain/repositories/TodoRepository";

class ItemDTO {
  id: number = 0;
  name: string = "";
}

let memoryList: Item[] = []

export class TodoRepositoryImpl implements TodoRepository {

  async GetItems(): Promise<Item[]> {
    var jsonString = JSON.stringify(memoryList)
    var res = JSON.parse(jsonString)
    return res.map((todoItem: ItemDTO) => new Item(todoItem.id, todoItem.name));
  }
  async AddTodo(data:Item){
    memoryList.push(data)
  }

  async DeleteTodo(data:Item) {
    var intData = parseInt(data.id.toString())
    for (let i = 0; i < memoryList.length; i++) {
      if (intData === memoryList[i].id){
        memoryList.splice(i,1);
        break;
      }
    }
  }

  async UpdateTodo(data:Item) {
    var intData = parseInt(data.id.toString())
    for (let i = 0; i < memoryList.length; i++) {
      if (intData === memoryList[i].id){
        memoryList[i].name = data.name
        break;
      }
    }
  }
}
