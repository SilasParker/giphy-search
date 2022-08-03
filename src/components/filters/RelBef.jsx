import React from "react";
import { getYearOptions } from "../../utils";

export default function RelBef() {
    return(
            <div>
                <label for="before-select">Released Before</label>
                <select id="before-select">
                    <option value="" selected disabled hidden>Select...</option>
                    {getYearOptions(24)}
                </select>
            </div>
    );
}