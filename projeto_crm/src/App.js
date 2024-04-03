
import {Route,createRoutesFromElements,createBrowserRouter,RouterProvider} from "react-router-dom";
import Contato from './pages/contato/Contato';
import Sobre from './pages/sobre/Sobre';
import RootLayout from "./layout2/RootLayout";
import Login from "./pages/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import ClienteService from "./services/ClientService";
import CreateClient from "./services/CreateClient";
import ModifyClient from "./services/ModifyCliente";
import NotFoundPage from "./pages/notpage/FoundNotPage";

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

      <Route element={<RootLayout />}>  
        <Route path="/create" element={<CreateClient/>}></Route>
      </Route> 

      <Route element={<RootLayout />}>  
        <Route path="/update/:id" element={<ModifyClient/>}></Route>
      </Route> 
      
      <Route path="*" element={<NotFoundPage />}></Route> 

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
