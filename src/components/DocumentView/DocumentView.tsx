import Thumbnail from "../Thumbnail/thumbnail";
import { DocumentResponse } from "../../types/response";
import TopBar from "../TopBar/TopBar";
import "./DocumentView.css";

interface DocumentProps {
    data: DocumentResponse;
}

function DocumentView(props: DocumentProps) {
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

    return (
        <div className="document-view">
            <TopBar middle={props.data.version.document.name}></TopBar>
            {thumbnails}
        </div>
    );
}

export default DocumentView;
