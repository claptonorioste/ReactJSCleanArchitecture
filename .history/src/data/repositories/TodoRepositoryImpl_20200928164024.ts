import { Todo } from "../../domain/entities/Todo";
import { TodoRepository } from "../../domain/repositories/TodoRepository";

class ItemDTO {
  id: number = 0;
  name: string = "";
}

let memoryList: Todo[] = []

export class TodoRepositoryImpl implements TodoRepository {

  async GetItems(): Promise<Todo[]> {
    
    var jsonString = JSON.stringify(memoryList)
    var res = JSON.parse(jsonString)
    return res.map((todoItem: ItemDTO) => new Todo(todoItem.id, todoItem.name));
  }
  async AddTodo(data:Todo){
    console.log(data)
    memoryList.push(data)
  }

  async DeleteTodo(data:Todo) {
    var intData = parseInt(data.id.toString())
    for (let i = 0; i < memoryList.length; i++) {
      if (intData === memoryList[i].id){
        memoryList.splice(i,1);
        break;
      }
    }
  }

  async UpdateTodo(data:Todo) {
    var intData = parseInt(data.id.toString())
    for (let i = 0; i < memoryList.length; i++) {
      if (intData === memoryList[i].id){
        memoryList[i].name = data.name
        break;
      }
    }
  }
}
