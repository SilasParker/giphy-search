import React, {Component} from "react";

export default class Results extends Component {

    generateGiphy = link => {
        console.log("here"+link);
        return <img alt="a gif" src={link}/>
    }


    render() {
        console.log("props");
        console.log(this.props);
        return(
            <div>
                <p>?</p>
                {this.props?.images?.map((srcLink) => {
                    return this.generateGiphy(srcLink);
                })}
            </div>
        );
    }
    
}