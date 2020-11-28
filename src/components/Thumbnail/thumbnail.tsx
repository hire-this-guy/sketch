import { Artboard } from "../../types/response";
import React from "react";
import "./thumbnail.css";
import { Link, useRouteMatch } from "react-router-dom";

function Thumbnail(props: { artboard: Artboard; key: number }) {
    let { url } = useRouteMatch();
    return (
        <Link to={`${url}/${props.artboard.name}`}>
            <figure key={props.key}>
                <img
                    srcSet={`${props.artboard.files[0].url} 1x, ${props.artboard.files[1].url} 2x`}
                    alt={props.artboard.name}
                />
                <figcaption>{props.artboard.name}</figcaption>
            </figure>
        </Link>
    );
}

export default Thumbnail;
