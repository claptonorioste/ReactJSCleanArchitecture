import { Todo } from "../../domain/entities/Todo"
import { TodoRepository } from "../../domain/repositories/TodoRepository"

class TodoDTO {
    id: number = 0
    name: string = ""
    isShow: boolean = false
}

const memoryList: Todo[] = []

export class TodoRepositoryImpl implements TodoRepository {
    Addition(num: number, num2: number): number {
        throw new Error("Method not implemented.")
    }
    async GetItems(): Promise<Todo[]> {
        const jsonString = JSON.stringify(memoryList)
        const res = JSON.parse(jsonString)
        return res.map((todoItem: TodoDTO) => new Todo(todoItem.id, todoItem.name, todoItem.isShow))
    }
    async AddTodo(data: Todo) {
        memoryList.push(data)
    }

    async DeleteTodo(data: Todo) {
        console.log("DELETE DATA REPO")
        const intData = parseInt(data.id.toString())
        for (let i = 0; i < memoryList.length; i++) {
            if (intData === memoryList[i].id) {
                memoryList.splice(i, 1)
                break
            }
        }
    }

    async UpdateTodo(data: Todo) {
        const intData = parseInt(data.id.toString())
        for (let i = 0; i < memoryList.length; i++) {
            if (intData === memoryList[i].id) {
                memoryList[i].name = data.name
                break
            }
        }
    }
}
