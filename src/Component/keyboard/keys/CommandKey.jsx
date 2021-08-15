import React, { Component } from "react";
import IconBars from "../../icons/IconBars";
import IconKey from "./IconKey";
export default function CommandKey () {
  
        return (
            <IconKey
                value=""
                icon={() => <IconBars />}
                extraClass="command-key"
            />
        );
    
}
