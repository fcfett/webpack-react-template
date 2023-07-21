import "./styles.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Detail from "@/pages/detail";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
