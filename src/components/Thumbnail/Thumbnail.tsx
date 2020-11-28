import { Artboard } from "../../types/response";
import React from "react";
import "./Thumbnail.css";
import { Link, useRouteMatch } from "react-router-dom";

function Thumbnail(props: { artboard: Artboard }) {
    let { url } = useRouteMatch();
    return (
        <Link to={`${url}/${props.artboard.name}`} className="thumbnail">
            <figure className="thumbnail__figure">
                <img
                    srcSet={`${props.artboard.files[0].url} 1x, ${props.artboard.files[1].url} 2x`}
                    alt=""
                    className="thumbnail__img"
                />
                <figcaption className="thumbnail__caption">
                    {props.artboard.name}
                </figcaption>
            </figure>
        </Link>
    );
}

export default Thumbnail;
