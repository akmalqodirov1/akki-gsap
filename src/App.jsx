import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import ParallaxSections from './components/ParallaxSections'
import RootLayout from './layouts/RootLayout'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'

function App() {

  const routes = createBrowserRouter([
    {
      path : '/',
      element : <RootLayout/>,
      children : [
        {
          index : true,
          element : <Home/>
        },
        {
          path : 'about',
          element : <About/>
        },
        {
          path : 'contact',
          element : <Contact/>
        }
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={routes}/>
    </>
  )
}

export default App
