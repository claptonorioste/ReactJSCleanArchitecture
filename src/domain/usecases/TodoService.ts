import { Todo } from "../entities/Todo"
import { TodoRepository } from "../repositories/TodoRepository"


export class TodoServiceImpl implements TodoRepository {
    TodoRepo: TodoRepository

    constructor(tr: TodoRepository) {
        this.TodoRepo = tr
    }
   async GetItems(): Promise<Todo[]> {

        //logic

        let showItems = await this.TodoRepo.GetItems();
       return showItems.filter(x=>x.isShow == true)
    }
    Addition(num: number, num2: number): number {
        throw new Error("Method not implemented.")
    }

    async GetTodos(): Promise<Todo[]> {
        return this.TodoRepo.GetItems()
    }

    async AddTodo(data: Todo) {
        this.TodoRepo.AddTodo(data)
    }

    async DeleteTodo(data: Todo) {
        console.log("DELETE USECASE")
        this.TodoRepo.DeleteTodo(data)
    }
    async UpdateTodo(data: Todo) {
        this.TodoRepo.UpdateTodo(data)
    }
}
