import React from "react"
import { Provider } from "react-redux"
import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"

import TodoList from "./app/pages/item/ItemList"
import todo from "./app/pages/item/Item.reducers"

// Setup Redux store with Thunks
const reducers = combineReducers({ todo })
const store = createStore(reducers, applyMiddleware(thunk))

const App = () => (
    <Provider store={store}>
        <TodoList />
    </Provider>
)

export default App
