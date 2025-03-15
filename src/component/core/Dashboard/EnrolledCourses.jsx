import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {getUserEnrolledCourses} from "../../../services/operation/profileAPI"
import Spinner from "../../common/Spinner";

const EnrolledCourses = () => {
  
    const{token} = useSelector((state)=> state.auth);
    const {enrolledCourses, setEnrolledCourses} = useState(null);

    const getEnrolledCourses = async() => {
        try{
            const response = await getUserEnrolledCourses(token);
            setEnrolledCourses(response);
        } catch (error){
            console.log("Unable to fetch the enrolled courses ")
        }
    }

    useEffect(() => {
        getEnrolledCourses();
        // eslint-disable-next-line
    },[]);


    return(
    <div>
        <div>Enrolled Courses</div>
        {
            !enrolledCourses ? (<Spinner/>) : 
                !enrolledCourses.length ? ( <p>You have not enrolled in any course yet</p> )
                : (
                    <div>
                        <div>
                            <p>Course name</p>
                            <p>Durations</p>
                            <p>Progress</p>
                        </div>
                        {/* Cards of courses */}
                        {
                            enrolledCourses.map((course,index) => (
                                <div>
                                    <div>
                                        <img src={course.thumbnail} alt="" />
                                        <div>
                                            <p>{course.courseName}</p>
                                            <p>{course.courseDescription}</p>
                                        </div>
                                    </div>

                                    <div>
                                        {course?.totalDuration}
                                    </div>

                                    <div>
                                        <p>Progress: {course.progressPercentage || 0}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                )
        }
    </div>
    );
};

export default EnrolledCourses;
