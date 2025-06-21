import React, { useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import axios from "axios";

export default function IntroMindfulnessLesson1Practice({ setIntroMindfulnessLesson2PracticeIsOpen, setIntroMindfulnessLesson2QuizIsActive }) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [formData, setFormData] = useState([
        {},
    ]); // Array of objects to store form data for each slide (1 object per slide)

    const slides = [
        slide1,
        slide2,
        slide3,
        slide4,
        slide5,
        slide6,
        slide7,
        slide8,
        slide9
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
                intro_mindfulness_lesson_2_quiz : true
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
                        <h5 className="heading">Wise Mind: Practice</h5>
                    </div>
                    <button className="closeBtn" onClick={() => setIntroMindfulnessLesson2PracticeIsOpen(false)}>
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
                                setIntroMindfulnessLesson2PracticeIsOpen(false);
                                setIntroMindfulnessLesson2QuizIsActive(true);
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

function slide1() {
    return(
        <>
            <h3 className="slideHeading">Ideas for Practicing Wise Mind</h3>
            <p>On the following slides, you'll find ideas and instructions for different ways to practice wise mind. Check the ideas that interest you, and either take some time to practice them now, or write them down to come back to them another time. It can be helpful to set a timer when practicing so you can commit to practicing for a certain amount of time. Remember: the more you practice, the easier it becomes! It's ok if it's difficult at first; with time and practice, finding wise mind will become as natural as breathing.</p>
        </>
    )
}

function slide2({ formData, onFormDataChange }) {
    const handlechange = (event) => {
        const { name, value, type, checked } = event.target;
        onFormDataChange(name, type === "checkbox" ? checked : value); // If the input is a checkbox, use the 'checked' property to determine the value, otherwise use the 'value' property.
    }

    return (
        <div>
            <div className="checkboxes">
                <label className="checkboxContainer" htmlFor="stoneFlakeCheckbox">
                    <input 
                        type="checkbox" 
                        name="stoneFlakeCheckbox" 
                        id="stoneFlakeCheckbox" 
                        checked={formData.stoneFlakeCheckbox || false}
                        onChange={handlechange}
                    />
                    <span className="checkmark"></span>
                    <p>
                    <span className="bold">Stone Flake on a Lake</span>
                    </p>
                </label>       
            </div>
            <p className="checkboxInstruction">Imagine that you are by a clear blue lake on a beautiful sunny day. Then imagine that you are a small flake of stone, flat and light. Imagine that you have been tossed out on to the lake and are now gently, slowly floating through the calm, clear blue water to the lake's smooth, sandy bottom. </p>
            <br />
            <p className="checkboxInstruction">Notice what you see and what you feel as you float down, perhaps in slow circles, floating toward the bottom. As you reach the bottom of the lake, settle your attention there within yourself.</p>
            <br />
            <p className="checkboxInstruction">Notice the serenity of the lake; become aware of the calmness and quiet deep within.</p>
            <br />
            <p className="checkboxInstructions">As you reach the center of yourself, settle your attention there.</p>
        </div>
    )
}

function slide3({ formData, onFormDataChange }) {
    const handlechange = (event) => {
        const { name, value, type, checked } = event.target;
        onFormDataChange(name, type === "checkbox" ? checked : value);
    }

    return (
        <div>
            <div className="checkboxes">
                <label className="checkboxContainer" htmlFor="spiralStairsCheckbox">
                    <input 
                        type="checkbox" 
                        name="spiralStairsCheckbox" 
                        id="spiralStairsCheckbox" 
                        checked={formData.spiralStairsCheckbox || false}
                        onChange={handlechange}
                    />
                    <span className="checkmark"></span>
                    <p>
                    <span className="bold">Walking Down the Spiral Stairs</span>
                    </p>
                </label>       
            </div>
            <p className="checkboxInstruction">Imagine that within you is a spiral staircase, winding down to your very center. Starting at the top walk very slowly down the staircase, going deeper and deeper within yourself. </p>
            <br />
            <p className="checkboxInstruction">Notice the sensations. Rest by sitting on a step, or turn on lights on the way down if you wish. Do not force yourself further than you want to go. Notice the quiet. As you reach the center of your self, settle your attention there—perhaps in your gut or your abdomen.</p>
        </div>
    )
}

function slide4({ formData, onFormDataChange }) {
    const handlechange = (event) => {
        const { name, value, type, checked } = event.target;
        onFormDataChange(name, type === "checkbox" ? checked : value);
    }

    return (
        <div>
            <div className="checkboxes">
                <label className="checkboxContainer" htmlFor="breathingWiseCheckbox">
                    <input 
                        type="checkbox" 
                        name="breathingWiseCheckbox" 
                        id="breathingWiseCheckbox" 
                        checked={formData.breathingWiseCheckbox || false}
                        onChange={handlechange}
                    />
                    <span className="checkmark"></span>
                    <p>
                    <span className="bold">Breathing "Wise" in, "Mind" out</span>
                    </p>
                </label>       
            </div>
            <p className="checkboxInstruction">Breathing in, say to yourself, "Wise"; breathing out, say "Mind."</p>
            <br />
            <p className="checkboxInstruction">Focus your entire attention on the word "wise," then, focus it again entirely on the word "mind."</p>
            <br />
            <p className="checkboxInstruction">Continue until you sense that you have settled into Wise Mind.</p>
        </div>
    )
}

function slide5({ formData, onFormDataChange }) {
    const handlechange = (event) => {
        const { name, value, type, checked } = event.target;
        onFormDataChange(name, type === "checkbox" ? checked : value);
    }

    return (
        <div>
            <div className="checkboxes">
                <label className="checkboxContainer" htmlFor="askingWiseMindCheckbox">
                    <input 
                        type="checkbox" 
                        name="askingWiseMindCheckbox" 
                        id="askingWiseMindCheckbox" 
                        checked={formData.askingWiseMindCheckbox || false}
                        onChange={handlechange}
                    />
                    <span className="checkmark"></span>
                    <p>
                    <span className="bold">Asking Wise Mind a Question</span>
                    </p>
                </label>       
            </div>
            <p className="checkboxInstruction">Breathing in, silently ask Wise Mind a question</p>
            <br />
            <p className="checkboxInstruction">Listen, but do not give yourself the answer. Do not tell yourself the answer; listen for it.</p>
            <br />
            <p className="checkboxInstruction">Continue asking on each in-breath for some time. If no answer comes, try again another time.</p>
        </div>
    )
}

function slide6({ formData, onFormDataChange }) {
    const handlechange = (event) => {
        const { name, value, type, checked } = event.target;
        onFormDataChange(name, type === "checkbox" ? checked : value);
    }

    return (
        <div>
            <div className="checkboxes">
                <label className="checkboxContainer" htmlFor="askingIsWiseMindCheckbox">
                    <input 
                        type="checkbox" 
                        name="askingIsWiseMindCheckbox" 
                        id="askingIsWiseMindCheckbox" 
                        checked={formData.askingIsWiseMindCheckbox || false}
                        onChange={handlechange}
                    />
                    <span className="checkmark"></span>
                    <p>
                    <span className="bold">Asking is This Wise Mind?</span>
                    </p>
                </label>       
            </div>
            <p className="checkboxInstruction">Breathing in, ask yourself, "Is this (action, thought, plan, etc.) Wise Mind?"</p>
            <br />
            <p className="checkboxInstruction">Breathing out, listen for the answer.</p>
            <br />
            <p className="checkboxInstruction">Listen, but do not give yourself the answer. Do not tell yourself the answer; listen for it.</p>
            <br />
            <p className="checkboxInstruction">Continue asking on each in-breath for some time. If no answer comes, try again another time.</p>
        </div>
    )
}

function slide7({ formData, onFormDataChange }) {
    const handlechange = (event) => {
        const { name, value, type, checked } = event.target;
        onFormDataChange(name, type === "checkbox" ? checked : value);
    }

    return (
        <div>
            <div className="checkboxes">
                <label className="checkboxContainer" htmlFor="attendingToBreathCheckbox">
                    <input 
                        type="checkbox" 
                        name="attendingToBreathCheckbox" 
                        id="attendingToBreathCheckbox" 
                        checked={formData.attendingToBreathCheckbox || false}
                        onChange={handlechange}
                    />
                    <span className="checkmark"></span>
                    <p>
                    <span className="bold">Attending to your breath coming in and out, let your attention settle into your center</span>
                    </p>
                </label>       
            </div>
            <p className="checkboxInstruction">Breathing in completely, notice and follow the sensations of your breath coming in.</p>
            <br />
            <p className="checkboxInstruction">Let your attention settle into your center, at the bottom of your breath, at your solar plexus—or</p>
            <br />
            <p className="checkboxInstruction">Let your attention settle in the center of your forehead, your “third eye,” at the top of your breath.</p>
            <br />
            <p className="checkboxInstruction">Keeping your attention at your center, exhale, breathing normally, maintaining attention.</p>
            <br />
            <p className="checkboxInstruction">Settle into Wise Mind.</p>
        </div>
    )
}

function slide8({ formData, onFormDataChange }) {
    const handlechange = (event) => {
        const { name, value, type, checked } = event.target;
        onFormDataChange(name, type === "checkbox" ? checked : value);
    }

    return (
        <div>
            <div className="checkboxes">
                <label className="checkboxContainer" htmlFor="expandingAwarenessCheckbox">
                    <input 
                        type="checkbox" 
                        name="expandingAwarenessCheckbox" 
                        id="expandingAwarenessCheckbox" 
                        checked={formData.expandingAwarenessCheckbox || false}
                        onChange={handlechange}
                    />
                    <span className="checkmark"></span>
                    <p>
                    <span className="bold">Expanding Awareness</span>
                    </p>
                </label>       
            </div>
            <p className="checkboxInstruction">Breathing in, focus your awareness on your center.</p>
            <br />
            <p className="checkboxInstruction">Breathing out, stay aware of your center, but expand awareness to the space you are in now.</p>
            <br />
            <p className="checkboxInstruction">Continue on in the moment.</p>
        </div>
    )
}

function slide9({ formData, onFormDataChange }) {
    const handlechange = (event) => {
        const { name, value, type, checked } = event.target;
        onFormDataChange(name, type === "checkbox" ? checked : value);
    }

    return (
        <div>
            <div className="checkboxes">
                <label className="checkboxContainer" htmlFor="dropIntoPausesCheckbox">
                    <input 
                        type="checkbox" 
                        name="dropIntoPausesCheckbox" 
                        id="dropIntoPausesCheckbox" 
                        checked={formData.dropIntoPausesCheckbox || false}
                        onChange={handlechange}
                    />
                    <span className="checkmark"></span>
                    <p>
                    <span className="bold">Dropping into the pauses between inhaling and exhaling</span>
                    </p>
                </label>       
            </div>
            <p className="checkboxInstruction">Breathing in, notice the pause after inhaling (top of breath).</p>
            <br />
            <p className="checkboxInstruction">Breathing out, notice the pause after exhaling (bottom of breath).</p>
            <br />
            <p className="checkboxInstruction">At each pause, let yourself "fall into" the center space within the pause.</p>
        </div>
    )
}