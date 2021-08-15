import React , {useEffect} from 'react'
import "../css/time.css"
import {connect} from "react-redux"
import {updateTime} from "./redux/actions/summaryActions"
function Timer(props) {
    useEffect(() => {
       let interval = setInterval(() => {
            let { hours, minutes, seconds } = props;
            ++seconds;
            if (seconds > 60) {
                seconds = 0;
                ++minutes;
            }
            if (minutes > 60) {
                minutes = 0;
                ++hours;
            }

        props.updateTime({ hours, minutes, seconds });
        }, 1000);
        return () => {
            clearInterval(interval);
          }
    }, [])
   
  
   const appendZero = (prop) => {
        return prop > 10 ? prop : "0" + prop;
    }
    return (
        <div>
              <div className="time d-flex jcsb  aic p-2">
                <div className="d-flex aic">
                    HH:<span className="text-lg">
                    {appendZero(props.hours)}
                    </span>
                </div>
                <div className="d-flex aic">
                    MM:{" "}
                    <span className="text-lg">
                        {appendZero(props.minutes)}
                    </span>
                </div>
                <div className="d-flex aic">
                    SS :<span className="text-lg">
                        {appendZero(props.seconds)}
                    </span>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = ({ summary }) => ({
    hours: summary.get("hours"),
    minutes: summary.get("minutes"),
    seconds: summary.get("seconds")
});
const mapDispatchToProps = dispatch => ({
    updateTime: data => dispatch(updateTime(data))
    
});
export default connect(mapStateToProps, mapDispatchToProps)(Timer);
