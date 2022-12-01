import React, {Component} from 'react';

class DisplayHobbies extends Component{
    constructor(props){
        super(props)
    };

    render(){
        if (this.props.isForm == 'true'){
            return (
                <ul>
                    {this.props.hobbies.map((hobbie) => {
                        return(
                            <li key = {hobbie.id}>
                                {hobbie.title}
                                <button onClick = {()=> this.props.removeHobbie(hobbie.id)}>Remove</button>
                            </li>
                        );
                    })}
                </ul>
            );
        } else {
            return (
                <ul>
                    {this.props.hobbies.map((hobbie) => {
                        return(
                            <li key = {hobbie.id}>
                                {hobbie.title}
                            </li>
                        );
                    })}
                </ul>
            );
        }    
    }



}

export default DisplayHobbies;