import React from "react";
import "./App.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import Document from "./components/document";
import { config } from "./services/config";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/:docId" children={<Document />} />
                <Route
                    exact
                    path="/:docId/:artboardId"
                    render={() => <h1>artboard</h1>}
                />
                <Route
                    render={() => (
                        <Redirect from="/" to={`/${config.defaultDocId}`} />
                    )}
                />
            </Switch>
        </Router>
    );
}

export default App;
