import { createBrowserRouter } from "react-router-dom";
import AllFoods from "../components/AllFoods/AllFoods";
import FoodDetails from "../components/FoodDetails/FoodDetails";
import Home from "../components/Home/Home";
import Main from './../Layout/Main';
import Contact from './../components/Contact/Contact';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
        
      },
      {
        path: '/home',
        element: <Home></Home>
      },
      {
        path: '/food-Details/:id',
        element: <FoodDetails></FoodDetails>,
        loader: ({ params }) => fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`)
      },
      {
        path: '/foods',
        element: <AllFoods></AllFoods>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
    ]
  }
])

export default router;