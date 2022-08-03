import React from "react";

import FilterBox from "./FilterBox";
import SearchBar from "./SearchBar";

export default function InputForm() {
    return(
        <form>
            <SearchBar />
            <div>
                <FilterBox />
                
            </div>
        </form>
    );
}