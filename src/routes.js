import App from "./App"
import Home from "./Pages/Home"

const routes = [
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
        ]
    },
]

export default routes;