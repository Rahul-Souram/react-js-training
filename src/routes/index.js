import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import SecondComponent from "../components/SecondComponent";
import ConditionalRendering from "../components/ConditionalRendering";
import CompuseState from "../components/CompuseState";
import FormComp from "../components/FormComp";
import TodoList from "../components/TodoList";
import CompUseEffect from "../components/CompUseEffect";
import CompUseRef from "../components/CompUseRef";
import UseContentAPI from "../components/UseContentAPI";
import CrudOperation from "../components/CrudOperation";
import ApiDemo from "../components/ApiDemo";
import Error from "../components/Error";
import Header from "../layout/Header";
import Practice from "../components/Practice";

const Index = () => {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/second-component" element={<SecondComponent />} />
                    <Route path="/conditional-rendering" element={<ConditionalRendering />} />
                    <Route path="/useState" element={<CompuseState />} />
                    <Route path="/useEffect" element={<CompUseEffect />} />
                    <Route path="/form-handler" element={<FormComp />} />
                    <Route path="/useRef" element={<CompUseRef />} />
                    <Route path="/todo-list" element={<TodoList />} />
                    <Route path="/use-context" element={<UseContentAPI />} />
                    <Route path="/crud-operations" element={<CrudOperation />} />
                    <Route path="/api-integration" element={<ApiDemo />} />
                    <Route path="/practice" element={<Practice />} />
                    <Route path="*" element={<Error />} />
                </Routes>
                <h2>Please change the code from the respective components while practicing</h2>
            </BrowserRouter>
        </>
    );
};

export default Index;
