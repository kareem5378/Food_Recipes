import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
//import from react redux
import { Provider } from "react-redux";
//import store
import { store, persistor } from "./store/store";
//import Components
import Navbar from "./components/navbar";
// Import from redux-persist
import { PersistGate } from "redux-persist/integration/react";
//Lazy import Pages
const HomePage = lazy(() => import("./pages/HomePage"));
const AddRecipe = lazy(() => import("./pages/AddRecipe"));
const SingleCategory = lazy(() => import("./pages/SingleCategory"));
const SingleRecipe = lazy(() => import("./pages/SingleRecipe"));
const ErrorPage = lazy(() => import("./pages/ErrorPage"));

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/AddRecipe" element={<AddRecipe />} />
            <Route path="/SingleCategory/:id" element={<SingleCategory />} />
            <Route path="/SingleRecipe/:id" element={<SingleRecipe />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Suspense>
      </PersistGate>
    </Provider>
  );
}

export default App;
