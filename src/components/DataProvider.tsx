import React, { useCallback, useEffect, useRef, useState } from "react";
import { DocumentResponse } from "../types/response";
import { useParams, useLocation } from "react-router-dom";
import { getDocument } from "../services/query";

const { Provider, Consumer } = React.createContext<DocumentResponse | null>(
    null
);

function DataProvider(props: { children: React.ReactNode }) {
    const [data, setData] = useState<DocumentResponse | null>(null);

    let { docId } = useParams<{ docId: string }>();
    let location = useLocation();
    const prevDocId = useRef<string>("");

    const getDocId = useCallback((): string => {
        // This is a hack/workaround. Use params does not seem to be updated so we take id from location
        return docId ?? location.pathname.split("/")[1];
    }, [docId, location]);

    useEffect(() => {
        (async () => {
            const docIdCandidate = getDocId();
            if (
                docIdCandidate.length === 0 ||
                docIdCandidate === prevDocId.current
            ) {
                return;
            }
            prevDocId.current = docIdCandidate;
            const response = await getDocument(getDocId());
            setData(response);
            // TODO should it be here?
            document.title = response.version.document.name;
        })();
    }, [getDocId]);

    return <Provider value={data}>{props.children}</Provider>;
}

export { DataProvider, Consumer as DataConsumer };
