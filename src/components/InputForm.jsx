import React, {Component} from "react";
import '../style/InputForm.css'

export default class InputForm extends Component {


    handleSubmit = event => {
        event.preventDefault();
        this.props.search(
            document.getElementById("search-input").value,
            document.getElementById("limit-input").value,
            document.getElementById("rating-select").value,
            document.getElementById("lang-select").value
        );
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <div>
                <input class="search-bar" type="text" id="search-input"/>
                <button class="search-submit" type="submit" value="Search">Search</button>
                </div>
                <div>
                    <h1>Filters</h1>
                    <div class="filter">
                        <div>
                            <label for="limit-input">GIF Limit (max 50)</label>
                            <input type="number" id="limit-input" min="1" max="50"/>
                        </div>
                        <div>
                            <label for="rating-select">Rating</label>
                            <select id="rating-select">
                                <option value="">Any</option>
                                <option value="g">General</option>
                                <option value="pg">Parental Guidance</option>
                                <option value="pg-13">PG-13</option>
                                <option value="r">Restricted</option>
                            </select>
                        </div>
                        <div>
                            <label for="lang-select">Language</label>
                            <select id="lang-select">
                                <option value="">Any</option>
                                <option value="en">English</option>
                                <option value="es">Spanish</option>
                                <option value="pt">Portuguese</option>
                                <option value="id">Indonesian</option>
                                <option value="fr">French</option>
                                <option value="ar">Arabic</option>
                                <option value="tr">Turkish</option>
                                <option value="th">Thai</option>
                                <option value="vi">Vietnamese</option>
                            </select>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}