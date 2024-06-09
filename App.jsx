import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './src/ui/Home'
import AppLayout from './src/ui/AppLayout'
import About from './src/ui/About'
import Portfolio from './src/ui/Portfolio'
import Skill from './src/ui/Skill'
import Contact from './src/ui/Contact'
function App() {
    const router = createBrowserRouter([
        {
            element: <AppLayout />,
            children: [
                {
                    path: '/',
                    element: <Home />,
                },
                { element: <About /> },
                { element: <Skill /> },
                { element: <Portfolio /> },
                { element: <Contact /> },
            ],
        },
    ])

    return <RouterProvider router={router} />
}

export default App
