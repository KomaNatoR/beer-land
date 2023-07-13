import { Routes, Route } from "react-router-dom";

import SharedLayout from "./SharedLayout/SharedLayout";
import GreetingPage from "./pages/GreetingPage/GreetingPage";
import BeerList from "./pages/BeerList/BeerList";
import ErrorPage from "./pages/ErrorPage/ErrorPage";


export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout/>}>
        <Route index element={<GreetingPage/>}/>
        <Route path="/beerlist" element={<BeerList/>}/>
        <Route path="/*" element={<ErrorPage/>}/>
      </Route>
    </Routes>
  );
};
