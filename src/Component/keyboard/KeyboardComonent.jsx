import React , {useEffect} from 'react'
import FirstRow from "./FirstRow";
import SecondRow from "./SecondRow";
import ThirdRow from "./ThirdRow";
import FourthRow from "./FourthRow";
import FifthRow from './FifthRow';
import "../../css/keyboard.css"
import {keyDown , keyUp} from "../redux/actions/keyboardActions"
import {connect} from "react-redux"
function Keyboard(props) {
   const keyedDown = (e) => {
        props.keyDown(e);
        e.stopPropagation();
    }
    const keyedUp = (e) => {
        props.keyUp(e);
        e.stopPropagation();
    }
    useEffect(() => {
        console.log("componet did mount")
        document.body.addEventListener("keydown", keyedDown);
        document.body.addEventListener("keyup", keyedUp);
        return () => {
            document.body.removeEventListener("keydown", keyedDown);
        document.body.removeEventListener("keyup", keyedUp);
          }
      }, []);
    return (
        <div>
            <div className="keyboard">
                <FirstRow />
                <SecondRow />
                <ThirdRow />
                <FourthRow />
                <FifthRow></FifthRow>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    keyDown: e => dispatch(keyDown(e)),
    keyUp: e => dispatch(keyUp(e))
});
export default connect(null, mapDispatchToProps)(Keyboard);
