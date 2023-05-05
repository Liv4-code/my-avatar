import React from "react";
import "./App.css";
import "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap is a frontend library I'm most familiar with
// Used to save time and because Bootstrap provides element styling that fit the type of ui I was building.
import MultiForm from "./components/MultiForm";

function App() {
    return (
        <div className="app container-fluid">
            <h1>My Avatar</h1>
            <MultiForm />
        </div>
    );
}

export default App;
