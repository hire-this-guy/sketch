import "./TopBar.css";
import React from "react";
import Separator from "../../assets/separator.svg";

interface TopBarProps {
    corner?: React.ReactNode;
    left?: React.ReactNode;
    middle?: React.ReactNode;
}
function TopBar(props: TopBarProps) {
    return (
        <div className="top-bar">
            {props.corner && (
                <div className="top-bar__corner">
                    {props.corner}
                    <img
                        src={Separator}
                        className="top-bar__separator"
                        alt=""
                    />
                </div>
            )}
            {props.left && <div className="top-bar__left">{props.left}</div>}
            {props.middle && (
                <div className="top-bar__middle">{props.middle}</div>
            )}
        </div>
    );
}

export default TopBar;
