import React, { Fragment, Component } from "react";
import {connect} from 'react-redux'
 function Key (props){
    const render = props.render;
    console.log(render , "render")
    const getClasses = () => {
        const classes = ["keyboard-button"];

        if (props.extraClass) {
            classes.push(props.extraClass);
        }

        const {
            value,
            capsOn,
            sticky,
            currentKey,
            shifted,
            failed
        } = props;
        //light the caps lock or the stick keys
        if ((value === "caps lock" && capsOn) || (sticky && value === sticky)) {
            classes.push("is-lighting");
        }

        //light the current key
        if (value === currentKey.char || shifted === currentKey.char) {
            classes.push("is-lighting");
        }

        //highlight the wrongly being pressed key
        if (failed === value || failed === shifted) {
            classes.push("is-error");
        }
        return classes.join(" ");
    }
        return (
            <div className={getClasses()}>
                {props.render(props)} 
        </div>
        );
    }


    const mapStateToProps = ({ keyboard, courses }) => {
        return {
            currentKey: courses.get("currentKey"),
            sticky: keyboard.get("sticky"),
            capsOn: keyboard.get("capsOn"),
            failed: courses.get("failed")
        };
    };
    
    export default connect(mapStateToProps, null)(Key);