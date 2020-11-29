import { DocumentResponse } from "../../types/response";
import { Link, useParams } from "react-router-dom";
import React from "react";
import TopBar from "../TopBar/TopBar";
import "./ArtboardView.css";
import { ReactComponent as Close } from "../../assets/close.svg";
import { ReactComponent as ArrowLeft } from "../../assets/arrow-left.svg";
import { ReactComponent as ArrowRight } from "../../assets/arrow-right.svg";
import FadeInImg from "../FadeInImg/FadeInImg";

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
                            <Close className="close-icon" />
                        </Link>
                    </span>
                }
                left={
                    <span className="artboards-switcher">
                        {prevArtboardName ? (
                            <span className="artboard-switcher__link">
                                <Link to={`/${docId}/${prevArtboardName}`}>
                                    <ArrowLeft className="artboard-switcher__icon artboard-switcher__icon--prev" />
                                </Link>
                            </span>
                        ) : (
                            <ArrowLeft className="artboard-switcher__icon artboard-switcher__icon--prev disabled" />
                        )}
                        {currentArtboardNumber + 1}
                        <span className="artboard-switcher__slash">/</span>
                        {allArtboardsNumber}
                        {nextArtboardName ? (
                            <span className="artboard-switcher__link">
                                <Link to={`/${docId}/${nextArtboardName}`}>
                                    <ArrowRight className="artboard-switcher__icon artboard-switcher__icon--next" />
                                </Link>
                            </span>
                        ) : (
                            <ArrowRight className="artboard-switcher__icon artboard-switcher__icon--next disabled" />
                        )}
                    </span>
                }
                middle={artboardName}
            />
            {currentArtboard && (
                <FadeInImg
                    className="artboard__img"
                    srcSet={`${currentArtboard.files[0].url} 1x, ${currentArtboard.files[1].url} 2x`}
                    alt={currentArtboard.name}
                />
            )}
        </div>
    );
}

export default ArtboardView;
