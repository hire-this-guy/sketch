import { useEffect, useState } from "react";
import { getDocument } from "../services/query";
import { useParams } from "react-router-dom";

function Document() {
    const [data, setData] = useState<string | null>(null);
    let { docId } = useParams<{ docId: string }>();

    useEffect(() => {
        (async () => {
            const response = await getDocument(docId);
            setData(JSON.stringify(response));
            console.log("setting title", response);
            document.title = response.version.document.name;
        })();
    });

    return !data ? (
        <h1>loading</h1>
    ) : (
        <pre>{JSON.stringify(data, null, 4)}</pre>
    );
}

export default Document;
