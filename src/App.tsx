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
import ArtboardView from "./components/Artboard/Artboard";

function App() {
    return (
        <Router>
            <DataProvider>
                <Switch>
                    <Route exact path="/:docId">
                        <DataConsumer>
                            {(data) => <Document data={data} />}
                        </DataConsumer>
                    </Route>
                    <Route exact path="/:docId/:artboardName">
                        <DataConsumer>
                            {(data) => <ArtboardView data={data} />}
                        </DataConsumer>
                    </Route>
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
