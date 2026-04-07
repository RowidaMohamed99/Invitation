import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home/Home';
import Layout from './Components/Layout/Layout';
// import Countdown from './Components/Countdown/Countdown';

export default function App() {
    const route = createBrowserRouter([
        {path: "/", element: <Layout/>, children: [
            {index: true, element: <Home/>},
            // {path: "Countdown", element: <Countdown/>}
        ]}
    ])
return <>
<RouterProvider router={route} />
</>
}
