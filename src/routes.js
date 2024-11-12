import App from "./App"
import Home from "./Pages/Home"
import ErrorPage from "./Pages/ErrorPage";
import Cart from "./Pages/Cart"

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
            }
        ]
    },
]

export default routes;