import { Item } from "../../domain/entities/Item";
import { ItemRepository } from "../../domain/repositories/ItemRepository";

class ItemDTO {
  id: number = 0;
  name: string = "";
}

let todoArr = [{
  "id": 1,
  "text": "Kani na Todo",
  "completed": false
}, {
  "id": 2,
  "text": "Todo 2",
  "completed": true
}]
export default class TodoRepositoryMemoryImpl implements ItemRepository {
  async GetTodo(): Promise<Item[]> {
    var jsonString = JSON.stringify(todoArr)
    var res = JSON.parse(jsonString)
    return res.map((todoItem: ItemDTO) => new Item(todoItem.id, todoItem.text, todoItem.completed));
  }

  async AddTodo(data:Item){
    todoArr.push(data)
    console.log(todoArr)
  }

  async DeleteTodo(data:Item) {
    var intData = parseInt(data.id.toString())
    for (let i = 0; i < todoArr.length; i++) {
      if (intData === todoArr[i].id){
        todoArr.splice(i,1);
        break;
      }
    }
  }

  async CompleteTodo(data:Item){
    var intData = parseInt(data.toString())
    for (let i = 0; i < todoArr.length; i++) {
      if (intData === todoArr[i].id){
        todoArr[i].completed = true
        break;
      }
    }
  }
}
