import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import { Loading } from "./components/Loading";
import { Navbar } from "./components/Navbar";
import PageNotFound from "./pages/PageNotFound";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
