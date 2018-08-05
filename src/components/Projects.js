import React, { Component } from 'react';
import Project from './Project';
import {allProjects} from '../data/projects.json';

class Projects extends Component {
  render() {
    return(
      <div>
        
        {
          allProjects.map((project, i) => {
          return <Project title={project.title} description={project.description} imgName={project.imgName} key={'project'+i}/>
        })
      }
      
      </div>
    )
  }
}

export default Projects;
