import React from "react";
import "./divider.css"
const Divider = ({ fullwidth, color }) => {
    return (
        <div style={{ backgroundColor: color }} className={fullwidth ? "divider-full" : "divider"}></div>
    )
}
export default Divider;