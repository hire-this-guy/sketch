import { DocumentResponse } from "../../types/response";
import { Link, useParams } from "react-router-dom";
import React from "react";
import TopBar from "../TopBar/TopBar";
import "./ArtboardView.css";

interface ArtboardDisplayProps {
    data: DocumentResponse;
}

function ArtboardView(props: ArtboardDisplayProps) {
    let { artboardName, docId } = useParams<{
        artboardName: string;
        docId: string;
    }>();

    const artboards = props.data.version.document.artboards.entries;
    let currentArtboard = artboards.filter(
        (artboard) => artboard.name === artboardName
    )[0];
    const currentArtboardNumber = artboards.indexOf(currentArtboard);
    const allArtboardsNumber = artboards.length;
    const prevArtboardName =
        currentArtboardNumber > 1
            ? artboards[currentArtboardNumber - 1].name
            : null;
    const nextArtboardName =
        currentArtboardNumber < allArtboardsNumber
            ? artboards[currentArtboardNumber + 1].name
            : null;

    return (
        <div className="artboard">
            <TopBar
                left={
                    <span>
                        <Link to={`/${docId}`}>x</Link>|
                        {prevArtboardName && (
                            <Link to={`/${docId}/${prevArtboardName}`}>
                                prev
                            </Link>
                        )}
                        {currentArtboardNumber}/{allArtboardsNumber}
                        {nextArtboardName && (
                            <Link to={`/${docId}/${nextArtboardName}`}>
                                next
                            </Link>
                        )}
                    </span>
                }
                middle={artboardName}
            />
            {currentArtboard && (
                <img
                    className="artboard__img"
                    srcSet={`${currentArtboard.files[0].url}, ${currentArtboard.files[1].url} 2x`}
                    alt={currentArtboard.name}
                />
            )}
        </div>
    );
}

export default ArtboardView;
