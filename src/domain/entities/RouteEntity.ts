export class RouteEntity {
    path: string
    auth: boolean
    component: any

    constructor(path: string, auth: boolean, component: any) {
        this.path = path
        this.auth = auth
        this.component = component
    }
}
