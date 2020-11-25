import { useEffect, useState } from "react";
import { getDocument } from "../services/query";

function Document() {
    const [data, setData] = useState<string | null>(null);

    useEffect(() => {
        (async () => {
            const response = await getDocument("Y8wDM");
            setData(JSON.stringify(response));
            console.log("setting title", response);
            document.title = response.version.document.name;
        })();
    });

    return !data ? <h1>loading</h1> : <pre>{data}</pre>;
}

export default Document;
