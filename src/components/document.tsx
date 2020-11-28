import Thumbnail from "./Thumbnail/thumbnail";
import { DocumentResponse } from "../types/response";

interface DocumentProps {
    data: DocumentResponse;
}

function Document(props: DocumentProps) {
    const thumbnails =
        props.data !== null ? (
            props.data.version.document.artboards.entries.map(
                (artboard, index) => {
                    return <Thumbnail artboard={artboard} key={index} />;
                }
            )
        ) : (
            <div />
        );

    return <>{thumbnails}</>;
}

export default Document;
