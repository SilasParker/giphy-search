import React, {Component} from "react";
import '../style/Results.css';

export default class Results extends Component {

    generateGiphy = link => {
        return <img class="gif" alt="a gif" src={link} width="500px" height="500px"/>
    }


    render() {
        return(
            <div class="results">
                {this.props?.images?.map((srcLink) => {
                    return this.generateGiphy(srcLink);
                })}
            </div>
        );
    }
    
}