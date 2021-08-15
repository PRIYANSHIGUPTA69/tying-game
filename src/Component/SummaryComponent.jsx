import React from 'react'
import IconXCircle from './icons/IconXCircle'
import IconCheckCircle from "./icons/IconCheckCircle"
import "../css/summary.css"
import  Timer from "./Timer"
import CharacterSelector from './CharacterSelector'
import {connect} from "react-redux"
function Summary(props) {
    return (
        <div className="summary shadow bordered-top">
            <Timer />
            <div className="header">
                <div className="currentChar shadow">
                    <h6>{props.currentChar.toUpperCase()}</h6>
                </div>
            </div>
            <CharacterSelector character="abc" />
            <div className="highlights">
                <i className="fill-primary">
                    <IconCheckCircle />
                </i>
                <span className="text-lg" title="Pass count">
                    {props.passCount}
                </span>
                <i className="fill-danger">
                    <IconXCircle />
                </i>
                <span className="text-lg" title="Fail Count">
                    {props.failCount}
                </span>
            </div>
            <div
                className=" shadow bordered-left d-flex jcsb aic p-2"
                title="Characters per minute"
            >
                <span title="Characters per minute" className="text-md">
                    Cpm
                </span>
                <span className="text-lg"> {props.cpm}</span>
            </div>
            <div className="d-flex jcfe aic p-2">
                <strong className="text-md">
                    {props.passCount}/{props.totalCharacters}
                </strong>
            </div>
        </div>
    );
}

const mapStateToprops = ({ courses, summary }) => ({
    totalCharacters: courses.get("totalCharacters"),
    currentChar: courses.get("currentChar"),
    passCount: courses.get("passCount"),
    failCount: courses.get("failCount"),
    cpm: summary.get("cpm")
});

export default connect(mapStateToprops, null)(Summary);

