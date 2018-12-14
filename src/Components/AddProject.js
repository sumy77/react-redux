import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { addProject } from '../actions/projectActions'

class AddProject extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      body: ''
    }
  }

  static defaultProps = {
    categories: ['Web Design', 'Web Development', 'Mobile Development']
  }

  handleSubmit(e) {
    e.preventDefault();
    if(this.refs.title.value === "") {
      alert('Title is required');
    }else{
      /*this.setState({newProject: {
        id: uuid.v4(),
        title: this.refs.title.value,
        category: this.refs.category.value
      }}, function() {
        //console.log(this.state);
        this.props.addProject(this.props.projects, this.state.newProject);
      });*/
      const project = {
        title: this.state.title,
        body: this.state.title
      };
      this.props.addProject(project);
    }
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    let categoryOptions = this.props.categories.map(category => {
      return (
        <option key={category} value={category}>{category}</option>
      );
    })
    return (
      <div>
        <h3>Add Project</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Title</label><br/>
            <input type="text" name="title" ref="title" onChange={this.handleChange.bind(this)} />
          </div>
          <div>
            <label>Category</label><br/>
            <select ref="category">
              {categoryOptions}
            </select>
          </div>
          <br/>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

AddProject.propTypes = {
  categories: PropTypes.array,
  addProject: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  projects: state.projects.items
})

export default connect(mapStateToProps, { addProject })(AddProject);
