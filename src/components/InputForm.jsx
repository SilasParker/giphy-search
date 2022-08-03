import React, {Component} from "react";
import { getYearOptions } from "../utils";

export default class InputForm extends Component {

    handleSubmit = event => {
        console.log("value 1: "+document.getElementById("search-input").value);
        this.props.search(document.getElementById("search-input").value);
    }

    render() {
        return(
            <div>
                <form>
                    <input type="text" id="search-input"/>
                    <input type="button" value="Search" onClick={this.handleSubmit} />
                    <div>
                        <div>
                            <label for="after-select">Released After</label>
                            <select id="after-select">
                                <option value="" selected disabled hidden>Select...</option>
                                {getYearOptions(24)}
                            </select>
                        </div>
                        <div>
                            <label for="before-select">Released Before</label>
                            <select id="before-select">
                                <option value="" selected disabled hidden>Select...</option>
                                {getYearOptions(24)}
                            </select>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}