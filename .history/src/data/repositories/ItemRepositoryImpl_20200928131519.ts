import { Item } from "../../domain/entities/Item";
import { ItemRepository } from "../../domain/repositories/ItemRepository";

class ItemDTO {
  id: number = 0;
  name: string = "";
}

export class ItemRepositoryImpl implements ItemRepository {
  jsonUrl =
    "https://gist.githubusercontent.com/janithl/6bfbd787a0361c170ac760e8fb5ba0fd/raw/a0ffacb7c0fc21a0266371f632cf4107f80362f4/itemlist.json";

  async GetItems(): Promise<Item[]> {
    const res = await fetch(this.jsonUrl);
    const jsonData = await res.json();
    return jsonData.map((item: ItemDTO) => new Item(item.id, item.name));
  }
}
// import { Item } from "../../domain/entities/Item";
// import { ItemRepository } from "../../domain/repositories/ItemRepository";

// class ItemDTO {
//   id: number = 0;
//   name: string = "";
// }

// let todoArr = [{
//   "id": 1,
//   "name": "Kani na Todo",
// }, {
//   "id": 2,
//   "name": "Todo 2",
 
// }]
// export default class ItemRepositoryImpl implements ItemRepository {

//   async GetItems(): Promise<Item[]> {
//     var jsonString = JSON.stringify(todoArr)
//     var res = JSON.parse(jsonString)
//     return res.map((todoItem: ItemDTO) => new Item(todoItem.id, todoItem.name));
//   }

//   async AddTodo(data:Item){
//     todoArr.push(data)
//     console.log(todoArr)
//   }

//   async DeleteTodo(data:Item) {
//     var intData = parseInt(data.id.toString())
//     for (let i = 0; i < todoArr.length; i++) {
//       if (intData === todoArr[i].id){
//         todoArr.splice(i,1);
//         break;
//       }
//     }
//   }

// }
