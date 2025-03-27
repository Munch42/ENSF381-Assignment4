import { useState } from "react";
import "./CourseItem.css";

function CourseItem({ imageName, courseName, instructorName, description }) {
    const [ displayDescription, setDisplayDescription ] = useState(false);
    
    return (
    <div className="course-item" onMouseEnter={() => setDisplayDescription(true)} onMouseLeave={() => setDisplayDescription(false)}>
        <img src={require(`../images/${imageName}`)} alt="Registered Course Item Image"/>
        <br /><br />
        <span class="course-name">Course Name: {courseName}</span>
        <br /><br />
        <span class="course-code">Instructor: {instructorName}</span>
        {displayDescription ? <p>{description}</p> : <br />}
        <button class="accept-btn">Enroll Now</button>
    </div>
    );
}

export default CourseItem;
