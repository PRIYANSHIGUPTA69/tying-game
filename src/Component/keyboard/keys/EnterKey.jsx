import React, { Component } from "react";
import IconKey from "./IconKey";
import IconEnter from "../../icons/IconEnter"

export default function EnterKey () {
        return (
            <IconKey
                value="enter"
                extraClass="enter-key"
                icon={() => <IconEnter />}
            />
        );
    
}
