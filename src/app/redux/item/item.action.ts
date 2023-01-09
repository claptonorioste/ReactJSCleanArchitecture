import { createAsyncThunk } from "@reduxjs/toolkit"
import { TodoRepositoryImpl } from "../../../data/repositories/TodoRepositoryImpl"
import { Todo } from "../../../domain/entities/Todo"
import { TodoServiceImpl } from "../../../domain/usecases/TodoService"

export const fetchItems = createAsyncThunk("item/fetchItems", async () => {
    const itemDataRepo = new TodoRepositoryImpl()
    const itemService = new TodoServiceImpl(itemDataRepo)
    const items = await itemService.GetTodos()
    return items
})

export const addItem = createAsyncThunk("item/addItem", async ({ data }: { data: Todo }) => {
    console.log(data)
    const itemDataRepo = new TodoRepositoryImpl()
    const itemService = new TodoServiceImpl(itemDataRepo)
    const items = await itemService.AddTodo(data)
    return items
})

export const deleteItem = createAsyncThunk("item/deleteItem", async ({ data }: { data: Todo }) => {
    const itemDataRepo = new TodoRepositoryImpl()
    const itemService = new TodoServiceImpl(itemDataRepo)
    const items = await itemService.DeleteTodo(data)
    return items
})

export const updateItem = createAsyncThunk("item/updateItem", async ({ data }: { data: Todo }) => {
    const itemDataRepo = new TodoRepositoryImpl()
    const itemService = new TodoServiceImpl(itemDataRepo)
    const items = await itemService.UpdateTodo(data)
    return items
})
