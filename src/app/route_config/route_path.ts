import { getRoute, RoutePage } from "./route_pages"

const mapRoute = () => {
    const route: any = []
    type EnumType = { [key: string]: string | number }
    type EnumAsArrayType = {
        key: string
        value: string | number
    }[]
    const enumToArray = (data: EnumType): EnumAsArrayType =>
        Object.keys(data)
            .filter((key) => Number.isNaN(+key))
            .map((key: string) => ({
                key,
                value: data[key],
            }))
    enumToArray(RoutePage).map((data) => {
        route.push(getRoute(data.value))
    })
    return route
}

export const routePaths = {
    data: mapRoute(),
}
