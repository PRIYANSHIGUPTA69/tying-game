import React, { Component, Fragment } from "react";
import Key from "./Key";
export default function SingleCharKey (props) {
        return (
            <Key 
            value={props.value}
            extraClass={props.extraClass}
            render={state => <Fragment>{state.value}</Fragment>}
            />
        );
    
}
