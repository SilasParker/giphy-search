import React from "react";
import { getYearOptions } from "../../utils";

export default function RelBef() {
    return(
            <div>
                <label for="after-select">Released After</label>
                <select id="after-select">
                    <option value="" selected disabled hidden>Select...</option>
                    {getYearOptions(24)}
                </select>
            </div>
    );
}