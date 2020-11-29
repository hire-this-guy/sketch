import { DocumentResponse } from "../../types/response";
import { Link, useParams } from "react-router-dom";
import React from "react";
import TopBar from "../TopBar/TopBar";
import "./ArtboardView.css";
import Close from "../../assets/close.svg";
import ArrowLeft from "../../assets/arrow-left.svg";
import ArrowRight from "../../assets/arrow-right.svg";

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
        currentArtboardNumber > 0
            ? artboards[currentArtboardNumber - 1].name
            : null;
    const nextArtboardName =
        currentArtboardNumber < allArtboardsNumber - 1
            ? artboards[currentArtboardNumber + 1].name
            : null;

    return (
        <div className="artboard">
            <TopBar
                corner={
                    <span className="close">
                        <Link to={`/${docId}`}>
                            <img src={Close} className="close-icon" alt="" />
                        </Link>
                    </span>
                }
                left={
                    <span className="artboards-switcher">
                        {prevArtboardName ? (
                            <Link to={`/${docId}/${prevArtboardName}`}>
                                <img
                                    src={ArrowLeft}
                                    alt=""
                                    className="artboard-switcher__prev"
                                />
                            </Link>
                        ) : (
                            <img
                                src={ArrowLeft}
                                className="artboard-switcher__prev disabled"
                                alt=""
                            />
                        )}
                        {currentArtboardNumber + 1}
                        <span className="artboard-switcher__slash">/</span>
                        {allArtboardsNumber}
                        {nextArtboardName ? (
                            <Link to={`/${docId}/${nextArtboardName}`}>
                                <img
                                    src={ArrowRight}
                                    alt=""
                                    className="artboard-switcher__next"
                                />
                            </Link>
                        ) : (
                            <img
                                src={ArrowRight}
                                className="artboard-switcher__next disabled"
                                alt=""
                            />
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
