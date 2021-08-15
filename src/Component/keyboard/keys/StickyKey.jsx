import React, { Component } from "react";
import Key from "./Key";
export default function StickyKey (props) {
 
        return (
            <Key 
            value={props.value}
            extraClass={props.extraClass}
            render={state => state.value}
            />
        );
    
}
