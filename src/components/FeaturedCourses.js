import courses from "../data/courses";

function FeaturedCourses() {  
    // We create a set (so that only one of each element can be in it) and
    // then add items until we get 3 courses 
    const courseIndices = new Set();

    while(courseIndices.size !== 3) {
        courseIndices.add(Math.floor(Math.random() * 10) + 1);
    }

    // TODO: Display course-list as horizontal blocks side by side

    let courseList = [];

    let i = 0
    courseIndices.forEach((courseIndex) => {
        courseList[i] = courses[courseIndex];
        i++;
    });

    return (
    <div>
        <h2>Featured Courses</h2>
        <div className="course-list">
            {courseList.map(function(item) {
                return (
                    <div> 
                        <h3>{item.name}</h3>
                        <h4>{item.instructor}</h4>
                        <p>{item.description}</p>
                        <p>{item.duration}</p>
                    </div>
                );
            })}
        </div>
    </div>
    );        
}

export default FeaturedCourses;
