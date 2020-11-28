import React from "react";
import "./App.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import DocumentView from "./components/DocumentView/DocumentView";
import { config } from "./services/config";
import { DataConsumer, DataProvider } from "./components/DataProvider";
import ArtboardView from "./components/ArtboardView/ArtboardView";
import Loading from "./components/Loading/Loading";

function App() {
    return (
        <Router>
            <DataProvider>
                <Switch>
                    <Route exact path="/:docId">
                        <DataConsumer>
                            {(data) =>
                                data === null ? (
                                    <Loading />
                                ) : (
                                    <DocumentView data={data} />
                                )
                            }
                        </DataConsumer>
                    </Route>
                    <Route exact path="/:docId/:artboardName">
                        <DataConsumer>
                            {(data) =>
                                data === null ? (
                                    <Loading />
                                ) : (
                                    <ArtboardView data={data} />
                                )
                            }
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
