import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import "./App.css";

import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";



function RootContainer() {
  /*  
    conditional styling for root element based on current route
    when on homepage the height is 100vh, otherwise it's 100%
  */
 
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const rootElement = document.getElementById("root");

  useEffect(() => {
    if(rootElement) {
      if(isHomePage) {
        rootElement.classList.add("root-homepage");
      }else {
        rootElement.classList.remove("root-homepage");
      }
    }
  }, [isHomePage, rootElement]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/projects" element={<ProjectsPage />}></Route>
    </Routes>
  )
}

function App() {
  return (
    <>
      <BrowserRouter>
        <RootContainer />
      </BrowserRouter>
    </>
  );
}

export default App;