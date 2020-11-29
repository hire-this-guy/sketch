import Thumbnail from "../Thumbnail/Thumbnail";
import { DocumentResponse } from "../../types/response";
import TopBar from "../TopBar/TopBar";
import "./DocumentView.css";
import Logo from "../../assets/sketch-logo.svg";
import React from "react";

interface DocumentProps {
    data: DocumentResponse;
}

function DocumentView(props: DocumentProps) {
    const thumbnails = props.data.version.document.artboards.entries.map(
        (artboard, index) => {
            return <Thumbnail artboard={artboard} key={index} />;
        }
    );

    return (
        <div className="document-view">
            <TopBar
                corner={<img src={Logo} alt="" className="logo" />}
                left={props.data.version.document.name}
            />
            {thumbnails}
        </div>
    );
}

export default DocumentView;
