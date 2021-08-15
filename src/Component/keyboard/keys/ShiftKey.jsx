import React, { Component } from "react";
import IconArrowUp from "../../icons/IconArrowUp";
import IconKey from "./IconKey";
export default function ShiftKey( ) {
        return (
            <IconKey
                extraClass="shift-key"
                value="shift"
                icon={() => <IconArrowUp />}
            />
        );
    
}
