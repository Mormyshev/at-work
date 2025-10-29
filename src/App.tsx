import { HOME_ROUTE, EDIT_ROUTE } from "./utils/const";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home.tsx";
import Edit from "./pages/Edit.tsx";
import Header from "./components/Header/Header.tsx";
import "./styles/App.css";

function App() {
  return (
    <BrowserRouter basename="/at-work/">
      <div className="wrapper">
        <Header />
        <div className="content">
          <Routes>
            <Route path={HOME_ROUTE} element={<Home />} />
            <Route path={`${EDIT_ROUTE}/:id`} element={<Edit />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
