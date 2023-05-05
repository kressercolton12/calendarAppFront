import React from "react";

export default function Header(props) {
    return (
        <div className="header-wrapper">
            <div className="pbtn btn">
                <button onClick={() => props.cm("previous")}>Previous</button>
            </div>

            <div className="month-name">
                {props.mn}
            </div>

            <div className="nbtn btn">
                <button onClick={() => props.cm("next")}>Next</button>
            </div>

        </div>
    )
}