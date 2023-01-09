import { createSlice } from "@reduxjs/toolkit"

import { Todo } from "../../../domain/entities/Todo"
import { fetchItems } from "./item.action"

interface ItemState {
    loading: boolean
    items: Array<Todo>
}

const initialState: ItemState = {
    items: [],
    loading: false,
}

export const itemSlice = createSlice({
    name: "item",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchItems.fulfilled, (state, action) => ({
            ...state,
            items: action.payload,
            loading: false,
        }))
        builder.addCase(fetchItems.pending, (state) => ({
            ...state,
            loading: true,
        }))
        builder.addCase(fetchItems.rejected, (state) => ({
            ...state,
            loading: false,
        }))
    },
})

export default itemSlice.reducer
