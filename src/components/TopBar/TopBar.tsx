import "./TopBar.css";
import React from "react";

interface TopBarProps {
    left?: React.ReactNode;
    middle?: React.ReactNode;
}
function TopBar(props: TopBarProps) {
    return (
        <div className="top-bar">
            {props.left && <div className="top-bar__left">{props.left}</div>}
            {props.middle && (
                <div className="top-bar__middle">{props.middle}</div>
            )}
        </div>
    );
}

export default TopBar;
