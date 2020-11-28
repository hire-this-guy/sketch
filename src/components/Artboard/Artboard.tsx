import { Artboard, DocumentResponse } from "../../types/response";
import { useParams } from "react-router-dom";
import React from "react";

interface ArtboardDisplayProps {
    data: DocumentResponse;
}

function ArtboardView(props: ArtboardDisplayProps) {
    let { artboardName } = useParams<{ artboardName: string }>();
    let currentArtboard: Artboard;
    currentArtboard = props.data.version.document.artboards.entries.filter(
        (artboard) => {
            console.log("artboardname", artboard.name, artboardName);
            return artboard.name === artboardName;
        }
    )[0];
    console.log("images", currentArtboard.files[0]);
    return (
        <>
            <h1>Artboard: {artboardName}</h1>
            {currentArtboard && (
                <img
                    srcSet={`${currentArtboard.files[0].url}, ${currentArtboard.files[1].url} 2x`}
                    alt={currentArtboard.name}
                />
            )}
        </>
    );
}

export default ArtboardView;
