import { LIST_LOAD_REQUEST, LIST_LOAD_SUCCESS, LIST_LOAD_FAILURE , ADD_TODO, DELETE_TODO } from "./Item.types"
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

export const addTodo = async data => {
    try {
      

        var payload = {
            id: data.id,
            name: data.text
        }
        const itemRepo = new ItemRepositoryImpl()
        const itemService = new ItemServiceImpl(itemRepo)
        await itemService.AddTodo(payload)
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
        const itemRepo = new ItemRepositoryImpl()
        const itemService = new ItemServiceImpl(itemRepo)
        await itemService.DeleteTodo(payload)
        return { type: DELETE_TODO, payload:payload }
    } catch (error) {
        alert(error)
    }
}