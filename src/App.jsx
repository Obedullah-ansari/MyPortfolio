
import Allmain from "./Allmain.jsx";
import { createBrowserRouter, RouterProvider, Routes } from 'react-router-dom';
import Portfolio from "./Pages/Portfolio.jsx";


 const router= createBrowserRouter([
    
  { path : "/MyPortfolio" ,element : <Allmain />},
    {path :'/MyPortfolio/portfolio' ,element:<Portfolio /> },
  ])

function App() {

  return (
   <RouterProvider  router={router}>
          <Routes />
   </RouterProvider>
  )
}

export default App;
