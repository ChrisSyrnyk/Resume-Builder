import React, {Component} from 'react';

class DisplayProjects extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <ul>
                {this.props.projects.map((project) => {
                    return(
                        <li key = {project.id}>
                            {project.title}<br/>
                            {project.description}<br/>
                            {project.duty}
                        </li>
                    )
                })}
            </ul>
        )
    }

}

export default DisplayProjects;