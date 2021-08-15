import React, { Fragment, Component } from "react";
import Key from "./Key";
export default function DoubleCharKey (props) {
    console.log(props)
        return (
            <Key
                extraClass="double-char-key"
                shifted={props.shifted}
                value={props.value}
                render={state => (
                    <Fragment>
                        <span> {props.shifted}</span>
                        <span className="pt-1"> {props.value}</span>
                    </Fragment>
                )}
            />
        );
    
   
}
