import React , {Component} from 'react';

import Student from '../../components/Student/Student';
import './Students.css';

class Students extends Component {
    state = {
        students: [
            {id: 1, firstName: 'Yury', lastName: 'Girba'},
            {id: 2, firstName: 'Sergey', lastName: 'Gromskiy'},
            {id: 3, firstName: 'Pavlina', lastName: 'Bevz'},
            {id: 4, firstName: 'Elina', lastName: 'Razina'},
            {id: 5, firstName: 'Roman', lastName: 'Holovan'}
        ],
        newStudent: {
            firstName : "",
            lastName: ""
        }
    }

    updateFirstNameHandler = (event, id) => {
        const updatedIndex = this.state.students.findIndex(p => {
            return p.id === id;
          });
      
          const student = {
            ...this.state.students[updatedIndex]
          };
                      
          student.firstName = event.target.value;
      
          const students = [...this.state.students];
          students[updatedIndex] = student;
      
          this.setState( {students: students} );
    };

    updateLastNameHandler = (event, id) => {
        const updatedIndex = this.state.students.findIndex(p => {
            return p.id === id;
          });
      
          const student = {
            ...this.state.students[updatedIndex]
          };          
      
          student.lastName = event.target.value;
      
          const students = [...this.state.students];
          students[updatedIndex] = student;
      
          this.setState( {students: students} );
    };


    removeStudentHandler = (id) => {
        const indexToRemove = this.state.students.findIndex(p => {
            return p.id === id;
          });
        const students = [...this.state.students];
        students.splice(indexToRemove, 1);
        this.setState({students: students});
    };

    changeNewFirstNameHandler = (event) => {
        let newStudent = this.state.newStudent;
        newStudent.firstName = event.target.value;
        this.setState({newStudent: newStudent})
    };
    
    changeNewLastNameHandler = (event) => {
        let newStudent = this.state.newStudent;
        newStudent.lastName = event.target.value;
        this.setState({newStudent: newStudent})
    };


    addNewStudentHandler = () => {
        if (this.state.newStudent.firstName.length > 0 && this.state.newStudent.lastName.length > 0 ){
            let newId = Math.max.apply(Math, this.state.students.map(function(s) { return s.id; })) + 1;
            let newStudent = {
                id: newId,
                firstName: this.state.newStudent.firstName,
                lastName: this.state.newStudent.lastName,
            };
            const students = [...this.state.students];
            students.push(newStudent);
            this.setState(
                {
                    students: students, 
                    newStudent: 
                    {
                        firstName: "",
                        lastName: ""
                    }
                });
        }        
    };

    saveStudentHandler = (student) => {
        const updatedIndex = this.state.students.findIndex(p => {
            return p.id === student.id;
          });
      
        const newStudents = [
            ...this.state.students.slice(0, updatedIndex),
            student,
            ...this.state.students.slice(updatedIndex + 1),
            ];                      

        this.setState( {students: newStudents} );
    }

    render() {
        let students = this.state.students.map((student, index) => {
                return <Student 
                            key={student.id} 
                            defaultStudent = {student}
                            saveStudentHandler = {this.saveStudentHandler }
                            remove={() => this.removeStudentHandler(student.id)} />
            });
        return (
            <div className="Students">
                <h1>Students list</h1>
                {students}
                <div className="AddStudent">
                    <p>First Name: <input type="text" onChange={this.changeNewFirstNameHandler} value={this.state.newStudent.firstName} /></p>
                    <p>Last Name: <input type="text" onChange={this.changeNewLastNameHandler} value={this.state.newStudent.lastName} /></p>
                    <p><button onClick={this.addNewStudentHandler}>Add New Student</button></p>
                </div>
            </div>
        );
    }
}

export default Students;