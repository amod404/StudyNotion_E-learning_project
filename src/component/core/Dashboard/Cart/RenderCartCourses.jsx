import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactStars from "react-stars";
import { AiFillDelete } from "react-icons/ai";
import { removeFromCart } from "../../../../slices/cartSlice";

const RenderCartCourses = () => {

    const {cart} = useSelector((state)=>state.cart);
    const dispatch = useDispatch();    

    return(
    <div>
        {
            cart.map((course,index) => (
                <div key={index}>
                    <div>
                        <img src={course?.thumbnail} alt="thumbnail"/>
                        <div>
                            <p>{course?.courseName}</p>
                            <p>{course?.category?.name}</p>
                            <div>
                                {/* Not perfect */}
                                <span>4.8</span>
                                <ReactStars
                                    count={5}
                                    size={20}
                                    edit={false}
                                    color2="#e7c009"
                                    color1="#161d29"
                                    half={true}
                                    value={4.5}
                                    char="★"
                                />

                                <span>{course?.ratingAndReviews?.length} Ratings</span>

                            </div>
                        </div>
                    </div>

                    <div>
                        <button
                        onClick={() => dispatch(removeFromCart(course._id))}>
                            <AiFillDelete/>
                            <span>Remove</span>
                        </button>

                        <p>Rs {course?.price}</p>
                    </div>

                </div>
            ))
        }
    </div>
    )
}

export default RenderCartCourses;
