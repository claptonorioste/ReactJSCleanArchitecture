import { LIST_LOAD_REQUEST, LIST_LOAD_SUCCESS, LIST_LOAD_FAILURE , ADD_TODO, DELETE_TODO , UPDATE_TODO} from "./Item.types"
import { TodoServiceImpl } from "../../../domain/usecases/TodoService"
import { TodoRepositoryImpl } from "../../../data/repositories/TodoRepositoryImpl"

export const refreshList = async (dispatch) => {
    
    dispatch({ type: LIST_LOAD_REQUEST })

    try {
        
        const todoRepo = new TodoRepositoryImpl()
        console.log("LOAD")
        const todoService = new TodoServiceImpl(todoRepo)
        const todo = await todoService.GetItems()
        console.log(todo)
        dispatch({ type: LIST_LOAD_SUCCESS, payload: todo })
    } catch (error) {
        dispatch({ type: LIST_LOAD_FAILURE, error })
    }
}

export const addTodo = async data => {
    try {
       
        var payload = {
            id: data.id,
            name: data.text
        }
        const todoRepo = new TodoRepositoryImpl()
        const todoService = new TodoServiceImpl(todoRepo)
        await todoService.AddTodo(payload)
        return { type: ADD_TODO, payload:payload }
    } catch (error) {
        alert(error)
    }
}


export const deleteTodo = async data => {
    try {
      

        var payload = {
            id: data.id,
            name: data.text
        }
        const todoRepo = new TodoRepositoryImpl()
        const todoService = new TodoServiceImpl(todoRepo)
        await todoService.DeleteTodo(payload)
        return { type: DELETE_TODO, payload:payload }
    } catch (error) {
        alert(error)
    }
}


export const updateTodo =   async data => {
    try {
        var payload = {
            id: data.id,
            name: data.text
        }
        const todoRepo = new TodoRepositoryImpl()
        const todoService = new TodoServiceImpl(todoRepo)
        await todoService.UpdateTodo(payload)
        return { type: UPDATE_TODO, payload:payload }
    } catch (error) {
        alert(error)
    }
}