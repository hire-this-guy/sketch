import { Artboard } from "../../types/response";
import React from "react";
import "./Thumbnail.css";
import { Link, useRouteMatch } from "react-router-dom";
import FadeInImg from "../FadeInImg/FadeInImg";

function Thumbnail(props: { artboard: Artboard }) {
    let { url } = useRouteMatch();

    let sources = props.artboard.files[0].thumbnails[0].url;
    if (props.artboard.files[0].thumbnails[1]) {
        sources += ` 1x, ${props.artboard.files[0].thumbnails[1].url}`;
    }

    return (
        <Link to={`${url}/${props.artboard.name}`} className="thumbnail">
            <figure className="thumbnail__figure">
                <FadeInImg srcSet={sources} alt="" className="thumbnail__img" />
                <figcaption className="thumbnail__caption">
                    {props.artboard.name}
                </figcaption>
            </figure>
        </Link>
    );
}

export default Thumbnail;
