import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout/MainLayout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Jobs from "../pages/JOBS SECTOR/Jobs/Jobs";
import DetailsJob from "../pages/JOBS SECTOR/DetailsJobs/DetailsJob";
import GetJobs from "../pages/JOBS SECTOR/GetJobs/GetJobs";
import Contact from './../pages/Contact/Contact';
import PrivetRoutes from './PrivetRoutes';
import Favorite from './../pages/Favorite/Favorite';
import Signup from "../pages/Register/Signup/Signup";
import SignIn from "../pages/Register/SignIn/SignIn";
import CreateJob from './../pages/JOBS SECTOR/CreateJobs/CreateJob';
import UpdateJob from './../pages/JOBS SECTOR/UpdateJob/UpdateJob';
import NotFound from './../pages/NotFound/NotFound';

const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/jobs",
          element: <GetJobs />,
        },
        {
          path: "/jobs",
          element: <Jobs />,
        },
       
        {
            path:'detailsjob/:detailsJobId',
            element:<DetailsJob />,
            loader:({params}) => fetch(`http://localhost:9000/jobs/${params.detailsJobId}`)
          },
        {
          path:'/updatejob/:updateId',
          element:(
            <PrivetRoutes>
              <UpdateJob />,
            </PrivetRoutes>
          ),
          loader:({params}) => fetch(`http://localhost:9000/jobs/${params.updateId}`)
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />
        },
        {
          path: "/favorite",
          element: (
            <PrivetRoutes>
              <Favorite />
            </PrivetRoutes>
          ),
        },
        {
          path:'/createjob',
          element:(
            <PrivetRoutes>
              <CreateJob />
            </PrivetRoutes>
          )
        },
      ],
    },
    {
      path: "signup",
      element: <Signup />,
    },
    {
      path: "signin",
      element: <SignIn />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  export default routes;