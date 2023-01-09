import React from "react"
import { Provider } from "react-redux"
import { store } from "./app/redux/store"
import RouterManager from "./app/route_config/RouterManager"

const App = () => (
    <Provider store={store}>
        <RouterManager />
    </Provider>
)

export default App
