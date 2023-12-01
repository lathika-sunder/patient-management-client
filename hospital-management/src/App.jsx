import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ViewPatientPage from "./pages/ViewPatientPage/ViewPatientPage";
import AddPatientPage from "./pages/AddPatientPage/AddPatientPage";
import EditPatientPage from "./pages/EditPatientPage/EditPatientPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<HomePage/>}></Route>
        <Route exact path='/view' element={<ViewPatientPage/>}></Route>
        <Route exact path='/add' element={<AddPatientPage/>}></Route>
        <Route exact path='/edit' element={<EditPatientPage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
