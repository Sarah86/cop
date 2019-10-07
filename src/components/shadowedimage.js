import React from "react"
import Image from "./image"
import Shadow from "./shadow";

const ShadowedImage = ({ imgName }) => (
        <div style={{ position: "relative" }}>
            <Image imgName={imgName} />
            <Shadow />
        </div>
);

export default ShadowedImage