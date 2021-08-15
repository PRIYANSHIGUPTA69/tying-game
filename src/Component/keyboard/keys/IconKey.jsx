import React, { Component, Fragment } from "react";
import Key from "./Key";
export default function IconKey (props){
    const extraClass = props.extraClass
            ? "button-has-icon " + props.extraClass
            : "button-has-icon";
        return (
            <Key extraClass={extraClass}
            value={props.value}
            render={state => (
                <Fragment>
                    <span>{state.value}</span>
                    {props.icon()}
                </Fragment>
            )}
                />
        );
    }

