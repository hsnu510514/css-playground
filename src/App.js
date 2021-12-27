import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./page/Home";
import Collection from "./page/Collection";
import Detail from "./page/Detail";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="effects" element={<Collection page="effects" />}></Route>
        <Route path="effects/:effectName" element={<Detail />}></Route>
        <Route path="components" element={<Collection page="components" />} />
        <Route path="components/:componentName" element={<Detail />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
