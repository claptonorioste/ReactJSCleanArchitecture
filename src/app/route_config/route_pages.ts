import { RouteEntity } from "../../domain/entities/RouteEntity"

//Pages
import menuPage from "../pages/menu/menuPage"
import homePage from "../pages/home/homePage"
import reservationPage from "../pages/reservation/reservationPage"
import aboutPage from "../pages/about/aboutPage"
import contactPage from "../pages/contact/contactPage"
import profilePage from "../pages/profile/profilePage"
import itemList from "../pages/item/ItemList"

export enum RoutePage {
    home,
    menu,
    reservation,
    about,
    contact,
    profile,
}

export function getRoute(routePage: any) {
    switch (routePage) {
        case RoutePage.home:
            return new RouteEntity("/", true, itemList)
        case RoutePage.menu:
            return new RouteEntity("/menu", true, menuPage)
        case RoutePage.reservation:
            return new RouteEntity("/reservation", true, reservationPage)
        case RoutePage.about:
            return new RouteEntity("/about", true, aboutPage)
        case RoutePage.contact:
            return new RouteEntity("/contact", true, contactPage)
        case RoutePage.profile:
            return new RouteEntity("/profilePage", true, profilePage)
    }
}
