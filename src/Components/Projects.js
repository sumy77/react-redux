import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProjectItem from './ProjectItem';
import { connect } from 'react-redux';
import { fetchProjects, deleteProject } from '../actions/projectActions'

class Projects extends Component {
  constructor() {
    super();
    this.state = {
      projects: []
    }
  }
	
  componentWillMount() {
    this.props.fetchProjects();
  }

  componentWillReceiveProps(nextProps) {
    console.log('Component will receive props ', nextProps.newProject);
    if(nextProps.newProject) {
      this.props.projects.unshift(nextProps.newProject);
      //this.setState({"projects": this.props.projects.unshift(nextProps.newProject)});
    }
  }

  deleteIt(id) {
    this.props.deleteProject(id);
    let projects = this.props.projects;
    projects.some(function(item, index) {
      if(item.id === id){
        // found it!
        projects.splice(index, 1);
        return true; // stops the loop
      }
      return false;
    });
    this.setState({"projects": projects});
    //console.log(this.props.projects);
  }

  render() {
  	let projectItems;
  	if(this.props.projects) {
  		projectItems = this.props.projects.map(project => {
  			return (
  				<ProjectItem key={project.title} project={project} onDelete={this.deleteIt.bind(this, project.id)} />
  			);
  		});
  	}
    return (
      <div className="Projects">
      	<h3>Latest Projects</h3>
        {projectItems}
      </div>
    );
  }
}

Projects.propTypes = {
  fetchProjects: PropTypes.func.isRequired,
  deleteProject: PropTypes.func.isRequired,
	projects: PropTypes.array.isRequired,
  newProject: PropTypes.object,
	deleteIt: PropTypes.func
};

const mapStateToProps = state => ({
  projects: state.projects.items,
  newProject: state.projects.item
});

export default connect(mapStateToProps, { fetchProjects, deleteProject })(Projects);
