import React from "react"

import { MolduraBottom } from "./moldura";

const Separador = ({border, height, width}) => (
    <div style={{marginTop:"2em", marginBottom:"2em", height: "1em", position: "relative"}}>
            <MolduraBottom width={width} borderSize={border} height={height}/>       
    </div>
);

export default Separador;