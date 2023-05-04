import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap";
import MultiForm from "./components/MultiForm";

function App() {
    const [results, setResults] = useState({});

    return (
        <div className="app container-fluid">
            <h1>My Avatar</h1>
            <MultiForm />
        </div>
    );
}

export default App;
