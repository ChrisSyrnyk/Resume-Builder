import { render } from '@testing-library/react';
import React, {Component} from 'react';
import './styles.css'
import uniqid from "uniqid";
import DisplaySkills from './Components/DisplaySkills';
import Displayhobbies from './Components/DisplayHobbies';
import DisplayHobbies from './Components/DisplayHobbies';
import DisplayEmployment from './Components/DisplayEmployment';
import DisplayEducation from './Components/DisplayEducation';
import DisplayProjects from './Components/DisplayProjects';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      personalInfo: {
        fName: '',
        lName: '',
        phone: '',
        email: '',
        gitHub: '',
      },
      skill: {
        name: '',
        id: uniqid(),
      },
      skills: [],
      hobbie: {
        title: '',
        id: uniqid(),
      },
      hobbies: [],
      education: {
        university: '',
        date: '',
        major: '',
        minor: '',
        id: uniqid(),
      },
      educationList: [],
      employmentHistory: {
        companyName: '',
        position: '',
        startDate: '',
        endDate: '',
        description: '',
        id: uniqid(),
      },
      employmentHistoryList: [],
      project: {
        title: '',
        description: '',
        duty: '',
        duties: [],
        id: uniqid(),
      },
      projects: [],
    };
    this.removeSkill = this.removeSkill.bind(this);
    this.removeHobbie = this.removeHobbie.bind(this);
  };

  handlePIChange = (e) =>{
    if(e.target.id == 'fname'){
      this.setState({
        personalInfo: {
          fName:  e.target.value,
          lName: this.state.personalInfo.lName,
          phone: this.state.personalInfo.phone,
          email: this.state.personalInfo.email,
          gitHub: this.state.personalInfo.gitHub,
        },
      });
    } else if(e.target.id == 'lname'){
      this.setState({
        personalInfo: {
          lName:  e.target.value,
          fName:  this.state.personalInfo.fName,
          phone: this.state.personalInfo.phone,
          email: this.state.personalInfo.email,
          gitHub: this.state.personalInfo.gitHub,
        },
      });
    } else if(e.target.id == 'phone'){
      this.setState({
        personalInfo: {
          phone:  e.target.value,
          fName:  this.state.personalInfo.fName,
          lName: this.state.personalInfo.lName,
          email: this.state.personalInfo.email,
          gitHub: this.state.personalInfo.gitHub,
        },
      });
    } else if(e.target.id == 'email'){
      this.setState({
        personalInfo: {
          email:  e.target.value,
          fName:  this.state.personalInfo.fName,
          lName: this.state.personalInfo.lName,
          phone: this.state.personalInfo.phone,
          gitHub: this.state.personalInfo.gitHub,
        },
      });
    }
  }

  //functions for updating skills state
  handleSkillChange = (e) =>{
    this.setState({
      skill: {
        name: e.target.value,
        id: this.state.skill.id,
      },
    });
  };

  submitSkillChange = (e) =>{
    e.preventDefault();
    this.setState({
      skills: this.state.skills.concat(this.state.skill),
      skill: {
        name: '',
        id: uniqid(),
      }
    });
  };

  removeSkill(id){
    this.setState({
      skills: this.state.skills.filter(skill => skill.id != id),
    });
  };
  
  //functions for updating hobbies state
  handleHobbieChange = (e) =>{
    this.setState({
      hobbie: {
        title: e.target.value,
        id: this.state.hobbie.id,
      },
    });
  };

  submitHobbieChange = (e) =>{
    e.preventDefault();
    this.setState({
      hobbies: this.state.hobbies.concat(this.state.hobbie),
      hobbie: {
        title: '',
        id: uniqid(),
      }
    });
  };

  removeHobbie(id){
    this.setState({
      hobbies: this.state.hobbies.filter(hobbie => hobbie.id != id),
    });
  };

  //functions for education state
  handleEducationChange = (e) =>{
    if (e.target.id == 'university'){
      this.setState({
        education: {
          university: e.target.value,
          date: this.state.education.date,
          major: this.state.education.major,
          minor: this.state.education.minor,
          id: this.state.education.id, 
        }
      })
    } else if (e.target.id == "eduDate"){
      this.setState({
        education: {
          university: this.state.education.university,
          date: e.target.value,
          major: this.state.education.major,
          minor: this.state.education.minor,
          id: this.state.education.id,  
        }
      })
    } else if (e.target.id == "eduMajor"){
      this.setState({
        education: {
          university: this.state.education.university,
          date: this.state.education.date,
          major: e.target.value,
          minor: this.state.education.minor,
          id: this.state.education.id,  
        }
      })
    } else if (e.target.id == "eduMinor"){
      this.setState({
        education: {
          university: this.state.education.university,
          date: this.state.education.date,
          major: this.state.education.major,
          minor: e.target.value,
          id: this.state.education.id,  
        }
      })
    }
  }

  submitEducationChange = (e) =>{
    e.preventDefault();
    this.setState({
      educationList: this.state.educationList.concat(this.state.education),
      education: {
        university: '',
        date: '',
        major: '',
        minor: '',
        id: uniqid(),
      }
    })
  }

  //functions for employment History

  handleEmploymentChange = (e) =>{
    if (e.target.id == 'companyName'){
      this.setState({
        employmentHistory: {
          companyName: e.target.value,
          position: this.state.employmentHistory.position,
          startDate: this.state.employmentHistory.startDate,
          endDate: this.state.employmentHistory.endDate,
          description: this.state.employmentHistory.description,
          id: this.state.employmentHistory.id,
        }
      })
    } else if (e.target.id == 'position'){
      this.setState({
        employmentHistory: {
          companyName: this.state.employmentHistory.companyName,
          position: e.target.value,
          startDate: this.state.employmentHistory.startDate,
          endDate: this.state.employmentHistory.endDate,
          description: this.state.employmentHistory.description,
          id: this.state.employmentHistory.id,
        }
      })
    } else if (e.target.id == 'startDate'){
      this.setState({
        employmentHistory: {
          companyName: this.state.employmentHistory.companyName,
          position: this.state.employmentHistory.position,
          startDate: e.target.value,
          endDate: this.state.employmentHistory.endDate,
          description: this.state.employmentHistory.description,
          id: this.state.employmentHistory.id,
        }
      })
    } else if (e.target.id == 'endDate'){
      this.setState({
        employmentHistory: {
          companyName: this.state.employmentHistory.companyName,
          position: this.state.employmentHistory.position,
          startDate: this.state.employmentHistory.startDate,
          endDate: e.target.value,
          description: this.state.employmentHistory.description,
          id: this.state.employmentHistory.id,
        }
      })
    } else if ( e.target.id == 'description'){
      this.setState({
        employmentHistory: {
          companyName: this.state.employmentHistory.companyName,
          position: this.state.employmentHistory.position,
          startDate: this.state.employmentHistory.startDate,
          endDate: this.state.employmentHistory.endDate,
          description: e.target.value,
          id: this.state.employmentHistory.id,
        }
      })
    }
  }

  submitEmploymentChange= (e) =>{
    e.preventDefault();
    this.setState({
      employmentHistoryList: this.state.employmentHistoryList.concat(this.state.employmentHistory),
      employmentHistory: {
        companyName: '',
        position: '',
        startDate: '',
        endDate: '',
        description: '',
        id: uniqid(),
      }
    })
  }

  //functions for projects

  handleProjectChange= (e) =>{
    if (e.target.id == 'projectTitle'){
      this.setState({
        project:{
          title: e.target.value,
          description: this.state.project.description,
          duty: this.state.project.duty,
          duties: this.state.project.duties,
          id: this.state.project.id,
        }
      })
    } else if (e.target.id == 'projectDescription'){
      this.setState({
        project:{
          title: this.state.project.title,
          description: e.target.value,
          duty: this.state.project.duty,
          duties: this.state.project.duties,
          id: this.state.project.id,
        }
      })
    } else if (e.target.id == 'projectDuty'){
      this.setState({
        project:{
          title: this.state.project.title,
          description: this.state.project.description,
          duty: e.target.value,
          duties: this.state.project.duties,
          id: this.state.project.id,
        }
      })
    }
  }

  submitProjectChange = (e) =>{
    e.preventDefault();
    this.setState({
      projects: this.state.projects.concat(this.state.project),
      project:{
        title: '',
        description: '',
        duty: '',
        duties: [],
        id: uniqid(),
      }
    })
  }

  render(){

    const {personalInfo, skill, skills, hobbie, hobbies, employmentHistoryList, employmentHistory, educationList, education,
          project, projects} = this.state;

    return(
      <>
      <div className="header">Resume Builder</div>
      <div className="backright"/>
      <div className="backleft">
        <div className = 'piForm'>
          <div className= 'formMargin'>
          {/*Form input for personal info */}
          <h4>Personal Information</h4>
          <form>
            <label htmlFor="fname">First name:</label>
            <input type = "text" id="fname" name="fname" value= {personalInfo.fName} onChange={this.handlePIChange}/>
            <br/>
            <label htmlFor="lname">Last name:</label>
            <input type = "text" id="lname" name="lname" value={personalInfo.lName} onChange={this.handlePIChange}/>
            <br/>
            <label htmlFor="phone">Phone number:</label>
            <input type = "tel" id="phone" name="phone" value={personalInfo.phone} onChange={this.handlePIChange}/>
            <br/>
            <label htmlFor="email">Email:</label>
            <input type = "email" id="email" name="email" value={personalInfo.email} onChange={this.handlePIChange}/>
          </form>
          {/*Form input for Skill */}
          <h4>Skills</h4>
          <form onSubmit={this.submitSkillChange}>
            <label htmlFor="skill">Skill:</label>
            <input type = "text" id ="skill" name="skill" value = {skill.name} onChange={this.handleSkillChange}/>
            <button type ="submit">Submit Skill</button>
          </form>
          <DisplaySkills skills ={skills} removeSkill = {this.removeSkill} isForm = 'true'/>
          {/*Form input for hobbies*/}
          <h4>Hobbies</h4>
          <form onSubmit={this.submitHobbieChange}>
            <label htmlFor="hobbie">Hobbie:</label>
            <input type = "text" id = "hobbie" name="hobbie" value = {hobbie.title} onChange={this.handleHobbieChange}/>
            <button type = "submit">Submit Hobbie</button>
          </form>
          <DisplayHobbies hobbies = {hobbies} removeHobbie = {this.removeHobbie} isForm = 'true'/>
          {/*Form input for education*/}
          <h4>Education</h4>
          <form onSubmit={this.submitEducationChange}>
            <label htmlFor="university">University:</label>
            <input type = "text" id = "university" name="university" value = {education.university} onChange={this.handleEducationChange}/>
            <br/>
            <label htmlFor="eduDate">Date:</label>
            <input type = "text" id = "eduDate" name = "eduDate" value = {education.date} onChange={this.handleEducationChange}/>
            <br/>
            <label htmlFor="eduMajor">Major:</label>
            <input type = "text" id = "eduMajor" name = "eduMajor" value = {education.major} onChange={this.handleEducationChange}/>
            <br/>
            <label htmlFor="eduMinor">Minor:</label>
            <input type = "text" id = "eduMinor" name = "eduMinor" value = {education.minor} onChange={this.handleEducationChange}/><br/>
            <button type = "submit">Add Education History</button>
          </form>
          <h4>Employment History</h4>
          <form onSubmit = {this.submitEmploymentChange}>
            <label htmlFor="companyName">Company Name:</label>
            <input type = "text" id = "companyName" name = "companyName" value = {employmentHistory.companyName} onChange={this.handleEmploymentChange}/>
            <br/>
            <label htmlFor="position">Position:</label>
            <input type = "text" id = "position" name = "position" value = {employmentHistory.position} onChange={this.handleEmploymentChange}/>
            <br/>
            <label htmlFor="startDate">Start Date:</label>
            <input type = "text" id = "startDate" name = "startDate" value = {employmentHistory.startDate} onChange={this.handleEmploymentChange}/>
            <br/>
            <label htmlFor="endDate">End Date:</label>
            <input type = "text" id = "endDate" name = "endDate" value = {employmentHistory.endDate} onChange={this.handleEmploymentChange}/>
            <br/>
            <label htmlFor="description">Job Description</label>
            <input type = "text" id="description" name="description" value = {employmentHistory.description} onChange={this.handleEmploymentChange}/><br/>
            <button type = "submit">Add Employment History</button>
          </form>
          <h4>Projects</h4>
          <form onSubmit = {this.submitProjectChange}>
            <label htmlFor="projectTitle">Title: </label>
            <input type = "text" id = "projectTitle" name = "projectTitle" value = {project.title} onChange = {this.handleProjectChange}/><br/>
            <label htmlFor="projectDescription">Description: </label>
            <input type = "text" id = "projectDescription" name = "projectDescription" value = {project.description} onChange = {this.handleProjectChange}/><br/>
            <label htmlFor="projectDuty">Responsibility</label>
            <input type="text" id="projectDuty" name="projectDuty" value = {project.duty} onChange = {this.handleProjectChange}/>
            <button type = "submit">Add Project</button>
          </form>
          </div>
        </div>
      </div>

      <div className = "piDisplay">
        <div className = "resumeHeader">  
            {this.state.personalInfo.fName + ' '}
            {this.state.personalInfo.lName} <br/>
        </div>
        <div className = "resumeBody">
        <div className = "displayLeft">
          
          <div className="leftSideContainer">
          <h4>Details</h4>
            {this.state.personalInfo.phone}<br/>
            {this.state.personalInfo.email}<br/>
          </div>
          
          {/*display skils*/}
          <div className="leftSideContainer">
            <h4>Skills</h4>
            <DisplaySkills skills={skills} removeSkill = {this.removeSkill} isForm = 'false'/>
          </div>
          
          <div className="leftSideContainer">
            <h4>Hobbies</h4>
            <DisplayHobbies hobbies = {hobbies} removeHobbie = {this.removeHobbie} isForm = 'false'/>
          </div>
        </div>
        <div className="displayRight">
        
        {/*display education info*/}
          <div>
            <h4>Education:</h4>
            <DisplayEducation educationList = {educationList}/>
          </div>
        {/*display employment history*/}
          <div>
            <h4>Employment History:</h4>
            <DisplayEmployment employmentHistoryList = {employmentHistoryList}/>
          </div>
        {/*display projects*/}
          <div>
            <h4>Projects</h4>
            <DisplayProjects projects = {projects}/>
          </div>
        </div>
        </div>
      </div>
      
      </>
    )
  };
}; //end constructor

export default App;


