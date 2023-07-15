import { Routes, Route } from "react-router-dom";

import SharedLayout from "./SharedLayout/SharedLayout";
import GreetingPage from "./pages/GreetingPage/GreetingPage";
import BeerListPage from "./pages/BeerList/BeerListPage";
import InterestingPage from "./pages/InterestingPage/InterestingPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";


export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout/>}>
        <Route index element={<GreetingPage/>}/>
        <Route path="/beerlist" element={<BeerListPage/>}/>
        <Route path="/interesting" element={<InterestingPage/>}/>
        <Route path="/*" element={<ErrorPage/>}/>
      </Route>
    </Routes>
  );
};
