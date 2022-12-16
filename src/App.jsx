import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import { Content } from "./Modules/Content/Content";
import CustomeForm from "./Modules/CreateFrom/CustomeForm";
import JsonForm from "./Modules/CreateFrom/JsonForm";
import Footer from "./Modules/Footer/Footer";
import Header from "./Modules/Header/Header";
import Main from "./Modules/Main/Main";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route path="/" element={<Content />} />
            <Route path="/form" element={<JsonForm />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
