import React, { useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import axios from "axios";

export default function IntroMindfulnessLesson1Practice({ setIntroMindfulnessLesson1PracticeIsOpen, setIntroMindfulnessLesson1QuizIsActive }) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [formData, setFormData] = useState([
        {},
    ]); // Array of objects to store form data for each slide (1 object per slide)

    const slides = [
        slide1,
    ]

    const handleFormDataChange = (slideIndex, fieldName, value) => {
        const newFormData = [...formData]; //Create an array to store the new form data without affecting the original state directly ('shallow copy').
        if (!newFormData[slideIndex]){
            newFormData[slideIndex] = {};
        } // If the object for the current slide doesn't exist yet, create it to prevent errors.
        newFormData[slideIndex][fieldName] = value; // Updates the form data for a specific field on a specific slide.
        setFormData(newFormData); // Update the form data state with the new array.
    }

    const goToNextSlide = () => {
        setCurrentSlide(() => {
            if(currentSlide < slides.length - 1) {
                return currentSlide + 1;
            } else {
                return currentSlide;
            }
        });
    };

    const goToPreviousSlide = () => {
        setCurrentSlide(() => {
            if(currentSlide > 0) {
                return currentSlide - 1;
            } else {
                return currentSlide;
            }
        });
    };

    const handleUpdateCourseProgress = async () => {
        const token = localStorage.getItem('token');
        try {
            const response = await axios.patch('http://127.0.0.1:8000/update_course', {
                intro_mindfulness_lesson_1_quiz : true
            }, {
                headers: {
                    'Authorization': `Token ${token}`
                }
            })
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }


    return(
        <>
            <div className="centered">
                <div className="modal">
                    <div className="modalHeader">
                        <h5 className="heading">Goals of Mindfulness: Practice</h5>
                    </div>
                    <button className="closeBtn" onClick={() => setIntroMindfulnessLesson1PracticeIsOpen(false)}>
                        <RiCloseLine style={{ marginBottom: "-3px" }}/>
                    </button>

                    <div className="modalContent">
                        <div className="progressBar">
                            <div className="progressFill" style={{ width: `${(currentSlide + 1) * (100 / slides.length)}%` }}></div>
                        </div>

                        <div className="slide">
                            {React.createElement(slides[currentSlide], {
                                formData: formData[currentSlide] || {},
                                onFormDataChange: (fieldName, value) => handleFormDataChange(currentSlide, fieldName, value)
                            })}
                        </div>

                        <div className="slideNav">
                            {currentSlide !== 0 && <button className="prevButton" onClick={goToPreviousSlide}>Previous</button>}
                            {currentSlide === 0 && <div className="invisoDiv"></div>}
                            {currentSlide === slides.length - 1 && <button className="nextButton" onClick={() => {
                                setIntroMindfulnessLesson1PracticeIsOpen(false);
                                setIntroMindfulnessLesson1QuizIsActive(true);
                                handleUpdateCourseProgress();
                                }}>Finish!</button>}
                            {currentSlide !== slides.length - 1 && <button className="nextButton" onClick={goToNextSlide}>Next</button>}
                        </div>
                    </div>
                </div>
            </div>
        </>
    ) 
}

function slide1({ formData, onFormDataChange }) {
    const handlechange = (event) => {
        const { name, value, type, checked } = event.target;
        onFormDataChange(name, type === "checkbox" ? checked : value); // If the input is a checkbox, use the 'checked' property to determine the value, otherwise use the 'value' property.
    }

    return (
        <div>
            <p>Check the goals that you would like to accomplish with mindfulness practice:</p>
            <div className="checkboxes">
                <label className="checkboxContainer" htmlFor="reduceSufferingCheckbox">
                    <input 
                        type="checkbox" 
                        name="reduceSufferingCheckbox" 
                        id="reduceSufferingCheckbox" 
                        checked={formData.reduceSufferingCheckbox || false}
                        onChange={handlechange}
                    />
                    <span className="checkmark"></span>
                    <p>
                    Reduce pain, tension, and stress.
                    </p>
                </label>
        
                <label className="checkboxContainer" htmlFor="increaseControlCheckbox">
                    <input 
                        type="checkbox" 
                        name="increaseControlCheckbox" 
                        id="increaseControlCheckbox"
                        checked={formData.increaseControlCheckbox || false}
                        onChange={handlechange} 
                    />
                    <span className="checkmark"></span>
                    <p>
                    Stop letting your mind be in control of you.
                    </p>
                </label>

                <label className="checkboxContainer" htmlFor="experienceRealityCheckbox1">
                    <input 
                        type="checkbox" 
                        name="experienceRealityCheckbox1" 
                        id="experienceRealityCheckbox1"
                        checked={formData.experienceRealityCheckbox1 || false}
                        onChange={handlechange} 
                    />
                    <span className="checkmark"></span>
                    <p>
                    Live life with your eyes wide open.
                    </p>
                </label>

                <label className="checkboxContainer" htmlFor="experienceRealityCheckbox2">
                    <input 
                        type="checkbox" 
                        name="experienceRealityCheckbox2" 
                        id="experienceRealityCheckbox2" 
                        checked={formData.experienceRealityCheckbox2 || false}
                        onChange={handlechange}
                    />
                    <span className="checkmark"></span>
                    <p>
                    Experience the reality of your connection to the universe/essential goodness/essential validity.
                    </p>
                </label>              
            </div>
            <div className="freeAnswerQuestion">
                <p>Other:</p>
                <input 
                    type="text"
                    name="otherMindfulnessGoals"
                    value={formData.otherMindfulnessGoals || ""}
                    onChange={handlechange} 
                />
            </div>
        </div>
    )
}