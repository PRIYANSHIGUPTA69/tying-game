import React, { Component } from "react";

import { connect } from "react-redux";

function KeyDrillComponent(props) {
 const  makeChar = (key, index) => {
    const className = "keyboard-button selected-key " + key.class;
    return (
        <div className={className} key={index}>
            {key.char}
        </div>
    );
}
    return (
        <div className="p-2 typed-words d-flex jcc">
        {props.currentWord.map(makeChar)}
    </div>
    )
}
const mapStateToProps = ({ keyboard, courses }) => {
    return {
        currentWord: courses.get("currentWord"),
        course: courses.get("course")
    };
};

export default connect(mapStateToProps)( KeyDrillComponent);


