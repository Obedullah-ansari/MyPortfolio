
import Allmain from "./Allmain.jsx";
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Portfolio from "./Pages/Portfolio.jsx";


 const router= createBrowserRouter([
    
  { path : "/" ,element : <Allmain />},
    {path :'/portfolio' ,element:<Portfolio /> },
  ])

function App() {

  return (
   <RouterProvider router={router}>
 
   </RouterProvider>
  )
}

export default App;
