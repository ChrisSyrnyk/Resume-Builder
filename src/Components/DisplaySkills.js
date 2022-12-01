import { render } from '@testing-library/react';
import React, {Component} from 'react';

class DisplaySkills extends Component{
    constructor(props){
        super(props)
    };

    render(){
        if (this.props.isForm == 'true'){
            return(
                <ul>
                    {this.props.skills.map((skill) => {
                        return <li key={skill.id}>
                                    {skill.name}
                                    <button onClick={()=>this.props.removeSkill(skill.id)}>remove</button>
                                </li> 
                     })}
                </ul>
            )
        } else {
            return(
                <ul>
                    {this.props.skills.map((skill) => {
                        return <li key={skill.id}>
                                    {skill.name}
                                </li> 
                     })}
                </ul>
            ) 
        }    
    };
};

export default DisplaySkills;
