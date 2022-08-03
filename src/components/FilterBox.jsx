import React from "react";
import RelBef from "./filters/RelBef";
import RelAft from "./filters/RelAft";

export default function FilterBox() {
    return(
            <div>
                <RelBef />
                <RelAft />
            </div>
    );
}