import React, {Component} from 'react';

class DisplayEmployment extends Component{
    constructor(props){
        super(props)
    };

    render(){
        return(
            <ul>
                {this.props.employmentHistoryList.map((employmentHistory) => {
                    return <li key={employmentHistory.id}>
                                {employmentHistory.companyName}
                                {' ('+employmentHistory.position+')'}<br/>
                                {'○ '+employmentHistory.startDate + '-' + employmentHistory.endDate}<br/>
                                {'○ '+ employmentHistory.description}
                            </li> 
                 })}
            </ul>
        )
    };
};

export default DisplayEmployment;
