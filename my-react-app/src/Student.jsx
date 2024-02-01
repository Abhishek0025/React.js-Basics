//The App component is the parent component and the object props in "Student.jsx" stores the value and accessible through props.name where anme is the key and gives the associated value
//Booleans don't display directly to the DOM, instead mention the condition to access the key. Refer line : "<p>Student: {props.isStudent ? "Yes" : "No"}</p>"

import PropTypes from 'prop-types'
function Student(props){
    return(
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    );
}

//To create propTypes, after the Student() function, add this code:
Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}

Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false,
}
export default Student;