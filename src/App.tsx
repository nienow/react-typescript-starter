import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainPage from "pages/main";
import AboutPage from "pages/about";

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage></MainPage>
  },
  {
    path: '/about',
    element: <AboutPage></AboutPage>
  }
]);

function App() {
  return <RouterProvider router={router}/>;
}

export default App;
