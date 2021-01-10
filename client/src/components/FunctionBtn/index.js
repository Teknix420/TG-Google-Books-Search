import React from "react";
import "./style.css";

function DeleteBtn(props) {
    return (
        <button className="btn btn-danger delete-btn" {...props}>
            Delete
        </button>
    );
}

function SaveBtn(props) {
    return (
        <button className="btn save-btn" {...props}>
            Save
        </button>
    )
}

function ViewBtn(props) {
    return (
        <a role="button" className="btn btn-info view-btn" {...props}>
            View
        </a>
    )
}

export { DeleteBtn, SaveBtn, ViewBtn };