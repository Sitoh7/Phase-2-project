import App from "./App"
import Home from "./Pages/Home"
import ErrorPage from "./Pages/ErrorPage";
import Cart from "./Pages/Cart"
import Login from "./Pages/Login"
import Account from "./Pages/Account";


const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/cart",
                element: <Cart />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/account",
                element: <Account />,
            }

        ]
    },
]

export default routes;