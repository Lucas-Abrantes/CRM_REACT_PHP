
import {Route,createRoutesFromElements,createBrowserRouter,RouterProvider} from "react-router-dom";
import Home from './pages/home/Home';
import Contato from './pages/contato/Contato';
import Sobre from './pages/sobre/Sobre';
import RootLayout from "./layout2/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />}>  
      <Route path="/sobre" element={<Sobre />}></Route>
      <Route index element={<Home />}></Route>
      <Route path="/contato" element={<Contato />}></Route>
    </Route>        
  )
);

function App() {
  return (
    <>
    <RouterProvider router={router} />
    </>

  );
}
export default App;
