import React, { useEffect, useState } from "react";
import { DocumentResponse } from "../types/response";
import { useParams } from "react-router-dom";
import { getDocument } from "../services/query";

const { Provider, Consumer } = React.createContext<DocumentResponse | null>(
    null
);

function DataProvider(props: { children: React.ReactNode }) {
    const [data, setData] = useState<DocumentResponse | null>(null);

    let { docId } = useParams<{ docId: string }>();

    useEffect(() => {
        (async () => {
            const response = await getDocument(docId);
            setData(response);
            // TODO should it be here?
            document.title = response.version.document.name;
        })();
    }, [docId]);

    return <Provider value={data}>{props.children}</Provider>;
}

export { DataProvider, Consumer as DataConsumer };
