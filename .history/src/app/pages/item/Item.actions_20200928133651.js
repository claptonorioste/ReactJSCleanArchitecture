import { LIST_LOAD_REQUEST, LIST_LOAD_SUCCESS, LIST_LOAD_FAILURE } from "./Item.types"
import { ItemServiceImpl } from "../../../domain/usecases/ItemService"
import { ItemRepositoryImpl } from "../../../data/repositories/ItemRepositoryImpl"

export const refreshList = async (dispatch) => {
    dispatch({ type: LIST_LOAD_REQUEST })

    try {
        const itemRepo = new ItemRepositoryImpl()
        const itemService = new ItemServiceImpl(itemRepo)
        const items = await itemService.GetItems()
        dispatch({ type: LIST_LOAD_SUCCESS, payload: items })
    } catch (error) {
        dispatch({ type: LIST_LOAD_FAILURE, error })
    }
}

export const addTodo = async payload => {
    try {
        const today = new Date()
        const date = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate()
        const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
        const dateTime = date + " " + time

        const text = payload.text
        payload = { id: dateTime, text, completed: false }
        const todoRepo = new TodoRepositoryFirebaseImpl()
        const todoService = new TodoServiceImpl(todoRepo)
        await todoService.AddTodo(payload)
        return { type: ADD_TODO, id: dateTime, payload }
    } catch (error) {
        alert(error)
    }
}