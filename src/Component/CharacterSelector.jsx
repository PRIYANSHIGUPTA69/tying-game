import React from 'react'
import { setCharacter } from "./redux/actions/courseActions"
import {connect} from "react-redux"
function CharacterSelector(props) {

    const options = () => {
        const options = [];
        //generate letters frin a to z using ascii
        for (let i = 65; i <= 90; i++) {
            const char = String.fromCharCode(i);
            options.push(
                <option key={i} value={char}>
                    Character {char}
                </option>
            );
        }
        return options;
    }
    return (
        <div>
        <select
            className="control shadow"
            value={props.character.toUpperCase()}
           
        >
            {options()}
        </select>
    </div>
    )
}
const mapStateToProps = ({ courses }) => ({
    character: courses.get("currentChar")
});

const mapActionsToProps = dispatch => ({
    setCharacter: event =>
        dispatch(setCharacter(event.target.value.toLowerCase()))
});
export default connect(mapStateToProps, mapActionsToProps)(CharacterSelector);

