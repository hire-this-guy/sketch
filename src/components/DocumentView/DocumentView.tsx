import Thumbnail from "../Thumbnail/Thumbnail";
import { DocumentResponse } from "../../types/response";
import TopBar from "../TopBar/TopBar";
import "./DocumentView.css";
import Logo from "../../assets/sketch-logo.svg";

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
            <TopBar
                left={<img src={Logo} alt="" />}
                middle={props.data.version.document.name}
            />
            {thumbnails}
        </div>
    );
}

export default DocumentView;
