import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { RouteEntity } from "../../domain/entities/RouteEntity"
import Desk from "../pages/desk/desk"
import { routePaths } from "./route_path"

function RouterManager() {
    return (
        <BrowserRouter>
            <Desk
                component={
                    <Routes>
                        {routePaths.data.map((entry: RouteEntity) => (
                            <Route
                                key={entry.path}
                                path={entry.path}
                                element={entry.auth ? <entry.component /> : <entry.component />}
                            />
                        ))}
                    </Routes>
                }
            />
        </BrowserRouter>
    )
}

export default RouterManager
