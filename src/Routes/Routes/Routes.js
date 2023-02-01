import { createBrowserRouter } from "react-router-dom";
import EventDetails from "../../components/EventDetails/EventDetails";
import Main from "../../Layout/Main";

export const routes = createBrowserRouter([
   {
      path: '/',
      element: <Main></Main>,
      children: [
         {
            path: '/',
            element: <EventDetails></EventDetails>
         },
         {
            path: '/event/:id',
            element: <EventDetails></EventDetails>,
            loader: ({ params }) => fetch(`http://localhost:5000/event/${params.id}`)
         },
      ]
   }
])