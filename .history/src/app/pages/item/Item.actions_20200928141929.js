import { LIST_LOAD_REQUEST, LIST_LOAD_SUCCESS, LIST_LOAD_FAILURE , ADD_TODO } from "./Item.types"
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

export const addTodo = async text => {
    try {
        var id = Math.floor(Math.random() * 100)
        var payload = {
            id: id,
            name: text
        }
        const itemRepo = new ItemRepositoryImpl()
        const itemService = new ItemServiceImpl(itemRepo)
        await itemService.AddTodo(payload)
        return { type: ADD_TODO, payload:payload }
    } catch (error) {
        alert(error)
    }
}