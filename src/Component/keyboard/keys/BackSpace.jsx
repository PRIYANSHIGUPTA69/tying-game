import React, { Component } from "react";
import IconArrowLeft from "../../icons/IconArrowLeft";
import IconKey from "./IconKey";
export default function BackSpace () {
   
        return (
            <IconKey
                extraClass="backspace"
                value="backspace"
                icon={() => <IconArrowLeft />}
            />
        );
    
}
