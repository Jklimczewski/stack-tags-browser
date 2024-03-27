import { Routes } from "react-router-dom";
import { Loading } from "./components/Loading";
import { Suspense } from "react";

function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Routes></Routes>
      </Suspense>
    </>
  );
}

export default App;
