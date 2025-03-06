import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Body from './Components/Body/Body.jsx'
import WatchPageContainer from './Components/Watch/WatchPageContainer.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path: "/",
        element: <Body/>
      },
      {
        path: "/watch/:videoId",
        element: <WatchPageContainer/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRouter}/>
)
