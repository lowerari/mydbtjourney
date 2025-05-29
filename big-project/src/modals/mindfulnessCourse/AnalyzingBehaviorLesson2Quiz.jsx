import React, { useEffect, useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import confetti from "canvas-confetti";
import axios from "axios";

export default function AnalyzingBehaviorLesson2Quiz({ setAnalyzingBehaviorLesson2QuizIsOpen, setIntroMindfulnessLesson1IsActive }) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [correctAnswer, setCorrectAnswer] = useState(false);
    

    const slides = [
        Slide1,
        Slide2,
        Slide3,
        Slide4,
        Slide5,
    ]

    const handleUpdateCourseProgress = async () => {
        const token = localStorage.getItem('token');
        try {
            const response = await axios.patch('http://127.0.0.1:8000/update_course', {
                intro_mindfulness_lesson_1 : true
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
        <div className="centered">
            <div className="modal">
                <div className="modalHeader">
                    <h5 className="heading">Missing-Links Analysis: Quiz</h5>
                </div>
                <button className="closeBtn" onClick={() => setAnalyzingBehaviorLesson2QuizIsOpen(false)}>
                    <RiCloseLine style={{ marginBottom: "-3px" }}/>
                </button>

                <div className="modalContent">
                    <div className="progressBar">
                        <div className="progressFill" style={{ width: `${(currentSlide + 1) * (100 / slides.length)}%` }}></div>
                    </div>

                    <div className="slide">
                        {React.createElement(slides[currentSlide], {setCorrectAnswer})}
                    </div>

                    <div className="slideNav">
                        {/* {currentSlide !== 0 && <button className="prevButton" onClick={() => setCurrentSlide(currentSlide - 1)}>Previous</button>} */}
                        <div className="invisoDiv"></div>
                        {currentSlide === slides.length - 1 && <button className="nextButton" onClick={() => {
                            setAnalyzingBehaviorLesson2QuizIsOpen(false); 
                            setCorrectAnswer(false);
                            setIntroMindfulnessLesson1IsActive(true);
                            handleUpdateCourseProgress();
                        }}>Finish!</button>}
                        {currentSlide !== slides.length - 1 && <button className={correctAnswer ? "nextButton" : "nextButton bad"} onClick={() => {
                            setCurrentSlide(currentSlide + 1);
                            setCorrectAnswer(false);
                        }}>Next</button>}
                    </div>
                </div>
            </div>
        </div>
    )
}

function Slide1({setCorrectAnswer}){
    const [selectedAnswers, setSelectedAnswers] = useState({
        "Expected behaviors": false,
        "Wanted behaviors": false,
        "Needed behaviors": false,
        "Destructive behaviors": false,
    });
    const [message, setMessage] = useState('');

    const handleCheckboxChange = (answer) => {
        setSelectedAnswers(prev => ({ ...prev, [answer]: !prev[answer] }));
    };

    const handleSubmit = () => {
        if (selectedAnswers["Expected behaviors"] && selectedAnswers["Needed behaviors"] && !selectedAnswers["Wanted behaviors"] && !selectedAnswers["Destructive behaviors"]) {
            setMessage("Good job!");
            setCorrectAnswer(true);
        } else {
            setMessage("Try again!");
            setCorrectAnswer(false);
        }
    };

    return(
        <>
            <h3 className="slideHeading">Question 1</h3>
            <p>What are the two types of effective behaviors analyzed in missing-links analysis?</p>
            
            <div className="checkboxes">
                {Object.keys(selectedAnswers).map((answer, index) => (
                    <label key={index} className="checkboxContainer">
                        <input
                            type="checkbox"
                            checked={selectedAnswers[answer]}
                            onChange={() => handleCheckboxChange(answer)}
                        />
                        <span className="checkmark"></span>
                        <p>{answer}</p>
                    </label>
                ))}
            </div>

            {message && <div className={message === "Good job!" ? "feedbackGood" : "feedbackBad"}>{message}</div>}
            <div className="submitButton" onClick={handleSubmit}>
                Check!
            </div>
        </>
    )
}

function Slide2({setCorrectAnswer}){
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = () => {
        if (selectedAnswer === "When you know what the effective behavior is and are willing to do it, but you still don't do it.") {
            setMessage("Great Work!");
            setCorrectAnswer(true);
        } else {
            setMessage("Try again!");
            setCorrectAnswer(false);
        }
    }

    return(
        <>
            <h3 className="slideHeading">Question 2</h3>
            <p>When should you use missing-links analysis together with chain link analysis?</p>
            <div className="answers">
                <div className="answer">
                    <div className="radio">
                        <input type="radio" id="missingLinksAndChainLinkAnswer1" name="missingLinksAndChainLinkAnswer" value="When you know what the effective behavior is and are willing to do it, but you still don't do it." onChange={(e) => setSelectedAnswer(e.target.value)} />
                        <span className="radioButton"></span>
                    </div>
                    <label htmlFor="missingLinksAndChainLinkAnswer1">When you know what the effective behavior is and are willing to do it, but you still don't do it.</label>
                </div>
                <div className="answer">
                    <div className="radio">
                        <input type="radio" id="missingLinksAndChainLinkAnswer2" name="missingLinksAndChainLinkAnswer" value="When you don't know what is needed or expected." onChange={(e) => setSelectedAnswer(e.target.value)} />
                        <span className="radioButton"></span>
                    </div>
                    <label htmlFor="missingLinksAndChainLinkAnswer2">When you don't know what is needed or expected.</label>
                </div>
                <div className="answer">
                    <div className="radio">
                        <input type="radio" id="missingLinksAndChainLinkAnswer3" name="missingLinksAndChainLinkAnswer" value="When you are unwilling to do what is needed or expected." onChange={(e) => setSelectedAnswer(e.target.value)}/>
                        <span className="radioButton"></span>
                    </div>
                    <label htmlFor="missingLinksAndChainLinkAnswer3">When you are unwilling to do what is needed or expected.</label>
                </div>
                <div className="answer">
                    <div className="radio">
                        <input type="radio" id="missingLinksAndChainLinkAnswer4" name="missingLinksAndChainLinkAnswer" value="When it never occurs to you to do what is needed or expected." onChange={(e) => setSelectedAnswer(e.target.value)} />
                        <span className="radioButton"></span>
                    </div>
                    <label htmlFor="missingLinksAndChainLinkAnswer4">When it never occurs to you to do what is needed or expected.</label>
                </div>
            </div>
            {message && <div className={message === "Great Work!" ? "feedbackGood" : "feedbackBad"}>{message}</div>}
            <div className="submitButton" onClick={handleSubmit}>
                Check!
            </div>
        </>
    )
}

function Slide3({setCorrectAnswer}){
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = () => {
        if (selectedAnswer === "It can be a useful tool for assessing situations when effective behaviors are repeatedly missing.") {
            setMessage("Amazing!");
            setCorrectAnswer(true);
        } else {
            setMessage("Try again!");
            setCorrectAnswer(false);
        }
    }

    return(
        <>
            <h3 className="slideHeading">Question 3</h3>
            <p>Why is missing-links analysis important?</p>
            <div className="answers">
                <div className="answer">
                    <div className="radio">
                        <input type="radio" id="missingLinksImportant1" name="missingLinksImportant" value="It shows you how to solve a problem." onChange={(e) => setSelectedAnswer(e.target.value)} />
                        <span className="radioButton"></span>
                    </div>
                    <label htmlFor="missingLinksImportant1">It shows you how to solve a problem.</label>
                </div>

                <div className="answer">
                    <div className="radio">
                        <input type="radio" id="missingLinksImportant2" name="missingLinksImportant" value="It can be a useful tool for assessing situations when effective behaviors are repeatedly missing." onChange={(e) => setSelectedAnswer(e.target.value)} />
                        <span className="radioButton"></span>
                    </div>
                    <label htmlFor="missingLinksImportant2">It can be a useful tool for assessing situations when effective behaviors are repeatedly missing.</label>
                </div>

                <div className="answer">
                    <div className="radio">
                        <input type="radio" id="missingLinksImportant3" name="missingLinksImportant" value="It helps you figure out what went wrong in a chain of events." onChange={(e) => setSelectedAnswer(e.target.value)} />
                        <span className="radioButton"></span>
                    </div>
                    <label htmlFor="missingLinksImportant3">It helps you figure out what went wrong in a chain of events.</label>
                </div>

                <div className="answer">
                    <div className="radio">
                        <input type="radio" id="missingLinksImportant4" name="missingLinksImportant" value="It makes you feel guilty for not doing what was needed." onChange={(e) => setSelectedAnswer(e.target.value)} />
                        <span className="radioButton"></span>
                    </div>
                    <label htmlFor="missingLinksImportant4">It makes you feel guilty for not doing what was needed.</label>
                </div>
            </div>
            {message && <div className={message === "Amazing!" ? "feedbackGood" : "feedbackBad"}>{message}</div>}
            <div className="submitButton" onClick={handleSubmit}>
                Check!
            </div>
        </>
    )
}

function Slide4({setCorrectAnswer}){
    const [selectedAnswers, setSelectedAnswers] = useState({
        "What vulnerability factors were present that caused you not to do the effective behavior?": false,
        "Did you know what effective behavior was needed or expected?": false,
        "Were you willing to do the needed or expected behavior?": false,
        "Did the thought of doing the needed or expected behavior ever enter your mind?": false,
    });
    const [message, setMessage] = useState('');

    const handleCheckboxChange = (answer) => {
        setSelectedAnswers(prev => ({ ...prev, [answer]: !prev[answer] }));
    };

    const handleSubmit = () => {
        if (selectedAnswers["Did the thought of doing the needed or expected behavior ever enter your mind?"] && selectedAnswers["Did you know what effective behavior was needed or expected?"] && selectedAnswers["Were you willing to do the needed or expected behavior?"] && !selectedAnswers["What vulnerability factors were present that caused you not to do the effective behavior?"]) {
            setMessage("Good job!");
            setCorrectAnswer(true);
        } else {
            setMessage("Try again!");
            setCorrectAnswer(false);
        }
    };

    return(
        <>
            <h3 className="slideHeading">Question 4</h3>
            <p>Which of these questions appears as part of missing-links analysis?</p>
            
            <div className="checkboxes">
                {Object.keys(selectedAnswers).map((answer, index) => (
                    <label key={index} className="checkboxContainer">
                        <input
                            type="checkbox"
                            checked={selectedAnswers[answer]}
                            onChange={() => handleCheckboxChange(answer)}
                        />
                        <span className="checkmark"></span>
                        <p>{answer}</p>
                    </label>
                ))}
            </div>

            {message && <div className={message === "Good job!" ? "feedbackGood" : "feedbackBad"}>{message}</div>}
            <div className="submitButton" onClick={handleSubmit}>
                Check!
            </div>
        </>
    )
}

function Slide5(){
    useEffect(() => {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    }, []);

    return(
        <div>
            <h3 className="slideHeading">Congratulations!</h3>
            <p>Another quiz down! You've successfully finished the "Analyzing Behavior" module! Are you ready to begin mindfulness practice? Don't forget, you can find your missing-links analysis worksheet in the skill practice area!</p>
        </div>
    )
}