import React from "react";

import { connect } from "react-redux";
import "../css/dashboard.css"
 function Dashboard(props) {
   return(
   <div className="dashboard d-flex bordered-left bordered-right">
   {/*      progress*/}
   <div className="progress flex-unit-2 mr-2 shadow">
       <div
           className="progress-bar"
           style={{ width: props.progress + "%" }}
       >
           {props.progress} % complete
       </div>
   </div>
   <div className="progress flex-unit-1 mr-2 progress-danger shadow ">
       <div
           className="progress-bar"
           style={{ width:props.accuracy + "%" }}
       >
           Accurancy:{props.accuracy} %
       </div>
   </div>
</div>
 )
}




const mapStateToProps = ({ summary }) => ({
    progress: summary.get("progress"),
    accuracy: summary.get("accuracy")
});

export default connect(mapStateToProps)(Dashboard);