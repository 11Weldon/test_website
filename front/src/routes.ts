import Admin from "./pages/admin"
import CartPage from "./pages/cartPage";
import {ADMIN_ROUTE, CART_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "./utils/consts";
import authPage from "./pages/authPage";
import shopPage from "./pages/shopPage";
import devicePage from "./pages/devicePage";
export const authRoutes = [
    {
        path:ADMIN_ROUTE,
        Component: Admin
    },
    {
        path:CART_ROUTE,
        Component: CartPage
    },
]
export const publicRoutes = [
    {
        path:REGISTRATION_ROUTE,
        Component: Admin
    },
    {
        path:LOGIN_ROUTE,
        Component: authPage
    },
    {
        path:SHOP_ROUTE,
        Component: shopPage
    },
    {
        path:DEVICE_ROUTE + '/:id',
        Component: devicePage
    },
]