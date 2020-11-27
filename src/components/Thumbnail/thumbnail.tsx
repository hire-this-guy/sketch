import { Artboard } from "../../types/response";
import React from "react";
import "./thumbnail.css";

function Thumbnail(props: { artboard: Artboard; key: number }) {
    return (
        <figure key={props.key}>
            <img
                srcSet={`${props.artboard.files[0].url}, ${props.artboard.files[1].url}`}
                alt={props.artboard.name}
            />
            <figcaption>{props.artboard.name}</figcaption>
        </figure>
    );
}

export default Thumbnail;
