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
import { DataConsumer, DataProvider } from "./components/DataProvider";

function App() {
    return (
        <Router>
            <DataProvider>
                <Switch>
                    <Route
                        exact
                        path="/:docId"
                        children={
                            <DataConsumer>
                                {(data) => <Document data={data} />}
                            </DataConsumer>
                        }
                    />
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
            </DataProvider>
        </Router>
    );
}

export default App;
