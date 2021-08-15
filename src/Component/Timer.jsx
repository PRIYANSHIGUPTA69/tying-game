import React from 'react'
import "../css/time.css"
function Tmer(props) {
   
  
   const appendZero = (prop) => {
        return prop > 10 ? prop : "0" + prop;
    }
    return (
        <div>
              <div className="time d-flex jcsb  aic p-2">
                <div className="d-flex aic">
                    HH:<span className="text-lg">
                        
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

export default Tmer
