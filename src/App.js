import { Route, Routes } from "react-router";
import routeConfig from "./components/RouteConfig";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <>
      <NavBar></NavBar>
      <Routes>
        {routeConfig.map((ruta) => {
          return <Route path={ruta.path} element={ruta.component} />;
        })}
      </Routes>
    </>
  );
};

export default App;
