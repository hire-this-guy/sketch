import { DocumentResponse } from "../../types/response";
import { Link, useParams } from "react-router-dom";
import React from "react";
import TopBar from "../TopBar/TopBar";
import "./ArtboardView.css";
import { ReactComponent as Close } from "../../assets/close.svg";
import { ReactComponent as ArrowLeft } from "../../assets/arrow-left.svg";
import { ReactComponent as ArrowRight } from "../../assets/arrow-right.svg";
import FadeInImg from "../FadeInImg/FadeInImg";
import { testIds } from "./testids";

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
                        <Link to={`/${docId}`} data-testid={testIds.closeLink}>
                            <Close className="close-icon" />
                        </Link>
                    </span>
                }
                left={
                    <span className="artboards-switcher">
                        {prevArtboardName ? (
                            <span className="artboard-switcher__link">
                                <Link
                                    to={`/${docId}/${prevArtboardName}`}
                                    data-testid={testIds.prevArtboardLink}
                                >
                                    <ArrowLeft className="artboard-switcher__icon artboard-switcher__icon--prev" />
                                </Link>
                            </span>
                        ) : (
                            <ArrowLeft className="artboard-switcher__icon artboard-switcher__icon--prev disabled" />
                        )}
                        <span data-testid={testIds.currentArtboardNumber}>
                            {currentArtboardNumber + 1}
                        </span>
                        <span className="artboard-switcher__slash">/</span>
                        <span data-testid={testIds.allArtboardsNumber}>
                            {allArtboardsNumber}
                        </span>
                        {nextArtboardName ? (
                            <span className="artboard-switcher__link">
                                <Link
                                    to={`/${docId}/${nextArtboardName}`}
                                    data-testid={testIds.nextArtboardLink}
                                >
                                    <ArrowRight className="artboard-switcher__icon artboard-switcher__icon--next" />
                                </Link>
                            </span>
                        ) : (
                            <ArrowRight className="artboard-switcher__icon artboard-switcher__icon--next disabled" />
                        )}
                    </span>
                }
                middle={
                    <span data-testid={testIds.currentArtboardName}>
                        {artboardName}
                    </span>
                }
            />
            {currentArtboard && (
                <FadeInImg
                    className="artboard__img"
                    srcSet={`${currentArtboard.files[0].url} 1x, ${currentArtboard.files[1].url} 2x`}
                    alt={currentArtboard.name}
                    data-testid={testIds.currentImage}
                />
            )}
        </div>
    );
}

export default ArtboardView;
