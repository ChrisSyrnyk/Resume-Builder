import React, {Component} from 'react';

class DisplayEducation extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <ul>
                {this.props.educationList.map((education) => {
                    return(
                        <li key = {education.id}>
                            {education.major + ' & ' +education.minor+', ' +education.university}<br/>
                            {'○ '+education.date}<br/>
                        </li>
                    )
                })}
            </ul>
        )
    }

}

export default DisplayEducation;