import React, { useState } from "react";

const [pcent, setPcent] = useState<string>("0");

const percentageControl:React.CSSProperties = {
    backgroundImage : "conic-gradient(#EBB016 "+{pcent}+"%, rgb(32, 32, 32))"
}

export default function Percentage(){
    return(
        <div className="wrap-circles">
            <div className="circle per-75" style={percentageControl}>
                <div className="inner"><strong>{pcent}%</strong></div>
            </div>
        </div>
    );
}