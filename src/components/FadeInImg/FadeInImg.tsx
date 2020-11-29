import React, { ImgHTMLAttributes, SyntheticEvent } from "react";
import "./FadeInImg.css";

function FadeInImg(props: ImgHTMLAttributes<unknown>) {
    const onLoaded = (event: SyntheticEvent<HTMLImageElement, Event>) => {
        event.currentTarget.classList.add("is-loaded");
    };

    return (
        // alt should be provided by users of the component
        // eslint-disable-next-line jsx-a11y/alt-text
        <img
            {...props}
            className={`image ${props?.className}`}
            onLoad={onLoaded}
        />
    );
}

export default FadeInImg;
