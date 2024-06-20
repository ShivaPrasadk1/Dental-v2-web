import { createBrowserRouter } from "react-router-dom";
import DashboardIndex from "../features/dashboard";
import App from "../App";
import Dentalindex from "../features/dentalOPG";
import Session1 from "../features/session/session1";
import Parent from "../features/session/Child2";
import UseEffects from "../features/session/UseEffects";
import LiftingState from "../features/session/LiftingState";
import UseMemo from "../features/session/UseMemo";


const Routes= createBrowserRouter([
    {
        path: "/",element: <App />,
        children: [
            {path: "/", element: <DashboardIndex />},
            {
                path:'/report',element: <Dentalindex />
            }
        ]
       
    },
    {
        path: "/session",element: <UseMemo />,
    },
   ])

export default Routes 