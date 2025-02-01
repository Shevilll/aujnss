import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { routes } from "./routes";
import LoadingSpinner from "./components/LoadingSpinner";

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Suspense fallback={<LoadingSpinner />}>
                <Routes>
                    {routes.map((route, index) => (
                        <Route
                            key={index}
                            path={route.path}
                            element={route.element}
                        />
                    ))}
                </Routes>
            </Suspense>
            <Footer />
        </BrowserRouter>
    );
};

export default App;
