import React, { Component } from "react";
import IconKey from "./IconKey";
import IconWindows from "../../icons/IconWindows";
export default function WinLogoKey () {
  
        return (
            <IconKey
                value=""
                icon={() => <IconWindows />}
                extraClass="win-log-key"
            />
        );
    
}
