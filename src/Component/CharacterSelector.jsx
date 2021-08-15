import React from 'react'

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

export default CharacterSelector
