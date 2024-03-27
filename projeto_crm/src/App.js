
import {Route,createRoutesFromElements,createBrowserRouter,RouterProvider} from "react-router-dom";
import Contato from './pages/contato/Contato';
import Sobre from './pages/sobre/Sobre';
import RootLayout from "./layout2/RootLayout";
import Login from "./pages/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import ClienteService from "./services/ClientService";
import IndexService from "./services/IndexService";
import CreateClient from "./services/CreateClient";
import ModifyClient from "./services/ModifyCliente";
import DestroyClient from "./services/DestroyClient";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<RootLayout />}>  
        <Route path="/sobre" element={<Sobre />}></Route> 
        <Route index element={<Dashboard/>}></Route>
        <Route path="/contato" element={<Contato />}></Route> 
      </Route> 

      <Route path="/login" element={<Login/>}></Route>
      <Route path="/cliente/:id" element={<ClienteService/>}></Route> 
      <Route path="/index" element={<IndexService/>}></Route>
      <Route path="/create" element={<CreateClient/>}></Route>
      <Route path="/modify" element={<ModifyClient/>}></Route>
      <Route path="/destroy" element={<DestroyClient/>}></Route>



    
    </>
     
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
