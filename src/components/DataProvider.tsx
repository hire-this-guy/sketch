import React, { useEffect, useState } from "react";
import { DocumentResponse } from "../types/response";
import { useParams, useRouteMatch, useLocation } from "react-router-dom";
import { getDocument } from "../services/query";

const { Provider, Consumer } = React.createContext<DocumentResponse | null>(
    null
);

function DataProvider(props: { children: React.ReactNode }) {
    const [data, setData] = useState<DocumentResponse | null>(null);

    let { docId } = useParams<{ docId: string }>();
    let location = useLocation();

    const getDocId = (): string => {
        // This is a hack/workaround. Use params does not seem to be updated so we take id from location
        return docId ?? location.pathname.split("/")[1];
    };

    useEffect(() => {
        (async () => {
            const response = await getDocument(getDocId());
            setData(response);
            // TODO should it be here?
            document.title = response.version.document.name;
        })();
    }, [docId, location]);

    return <Provider value={data}>{props.children}</Provider>;
}

export { DataProvider, Consumer as DataConsumer };
