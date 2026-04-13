import Container from "./components/Container";
import Navbar from "./components/Navbar";
import DashboardPage from "../src/pages/DashboardPage";
// import { useAppContext } from "./context/AppContext";
import Home from "./pages/Home";
import {createBrowserRouter, Outlet, RouterProvider} from 'react-router-dom'
import AuthPage from "./pages/AuthPage";
import { ErrorPage } from "./pages/ErrorPage";
import WriteArticle from "./pages/WriteArticle";
import {GuestRoute} from "./GuestRoute";
import { ProtectedRoute } from "./ProtectedRoute";


// const AppContent = () => {
//   const { user } = useAppContext();
//   const isSignedIn = !!user;

//   return (
//     <>
//       <Navbar />
//       <Container>
//         {isSignedIn && user ? <DashboardPage /> : <Home />}
//       </Container>
//     </>
//   );
// };
const router=createBrowserRouter([
  {
    path:'/',
    element:(
      <>
      <Navbar/>
      <Container>
        <Outlet />
      </Container>
      </>
    ),
    children: [
      {
        path: '*',
        element: <ErrorPage/>
      },
      {
        index: true,
        element: <GuestRoute><Home /></GuestRoute>
      },
      {
        path: '/login',
        element:<GuestRoute><AuthPage /></GuestRoute>
      },
      {
        path: '/user/:id',
        element: <ProtectedRoute><DashboardPage /></ProtectedRoute>
      },
      {
        path: '/write-article',
        element:<ProtectedRoute> <WriteArticle /> </ProtectedRoute>
      },
      
    ]
  },
  
])
const App = () => {
  return (
    <div>
      {/* <AppContent /> */}
      <RouterProvider router={router}/>
    </div>
  );
};

export default App;