import React, { Component } from "react";
import KeyDrillComponent from "./KeyDrillComponent";
import "../../css/course.css"
import {connect} from "react-redux"
function TypingComponent (props)  {
    const drill = props.drill
    return (
        drill == "key" ?<> <KeyDrillComponent /> </> : <></>
    )
           
}
const mapStateToProps = ({ courses }) => {
    return {
        drill: courses.get("drill")
    };
};

export default connect(mapStateToProps, null)(TypingComponent);
