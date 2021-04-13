import React, {Component} from 'react';

import './Student.css';

class Student extends Component {

    state = {
        isEditing: false,
        student: {
            firstName: "",
            lastName: ""
        }
    }

    static getDerivedStateFromProps(props, state) {
        // Any time the current user changes,
        // Reset any parts of state that are tied to that user.
        // In this simple example, that's just the email.
        if (props.defaultStudent.firstName !== state.student.firstName 
            && props.defaultStudent.lastName !== state.student.lastName) {
            return {
                ...state,
                student: props.defaultStudent
                }
        }
        return state;
    }

    toggleEditingHandler = () => {
        if (this.props.defaultStudent.firstName.length !== 0 && this.props.defaultStudent.lastName.length !== 0){
            this.setState(
                {
                    isEditing : !this.state.isEditing    
                });
        }
    }


    // saveChangesHandler = () => {}
    // canclChangesHandler = () => {}


    renderEditView = () => {
        let error = this.props.defaultStudent.firstName.length === 0 || this.props.defaultStudent.lastName.length === 0 
            ? <p className="error">First and last names cannot be empty!</p>
            : null;    
        return (        
            <div>
                <p>
                    First Name: 
                    <input 
                        type="text" 
                        value={this.props.defaultStudent.firstName} 
                        onChange={this.props.defaultStudent.firstNameChanged} />
                    </p>
                <p>
                    Last Name: 
                    <input 
                        type="text" 
                        value={this.props.lastName} 
                        onChange={this.props.lastNameChanged} />                    
                </p>
                <button onClick={this.saveChangesHandler}>Save</button>
                <button onClick={this.cancelChangesHandler}>Cancel</button>
                {error}
            </div>            
        );
    };

    renderRead = () => {
        return (
            <div>
                {this.props.defaultStudent.firstName} {this.props.defaultStudent.lastName}
                <button onClick={this.toggleEditingHandler}>Edit</button>
                <button onClick={this.props.remove}>Remove</button>
            </div>
        );
    };

    render() {
        return (
            <div className="Student">
                {this.state.isEdit && this.renderEditView()}
                {!this.state.isEdit && this.renderRead()}
            </div>
        );
    }
} 
    

export default Student;