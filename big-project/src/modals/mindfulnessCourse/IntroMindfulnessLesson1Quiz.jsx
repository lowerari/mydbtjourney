import React, { useEffect, useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import confetti from "canvas-confetti";
import axios from "axios";

export default function IntroMindfulnessLesson1Quiz({ setIntroMindfulnessLesson1QuizIsOpen, setIntroMindfulnessLesson2IsActive }) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [correctAnswer, setCorrectAnswer] = useState(false);

    const slides = [
        Slide1,
        Slide2,
        Slide3,
        Slide4,
        Slide5,
        Slide6,
        Slide7,
        Slide8,
        Slide9,
    ]

    const handleUpdateCourseProgress = async () => {
        const token = localStorage.getItem('token');
        try {
            const response = await axios.patch('http://127.0.0.1:8000/update_course', {
                intro_mindfulness_lesson_2 : true
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
                    <h5 className="heading">Goals of Mindfulness: Quiz</h5>
                </div>
                <button className="closeBtn" onClick={() => setIntroMindfulnessLesson1QuizIsOpen(false)}>
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
                        
                        <div className="invisoDiv"></div>
                        {currentSlide === slides.length - 1 && <button className="nextButton" onClick={() => {
                            setIntroMindfulnessLesson1QuizIsOpen(false); 
                            setCorrectAnswer(false);
                            setIntroMindfulnessLesson2IsActive(true);
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
        "Increased emotional regulation": false,
        "Increased irritability": false,
        "Enhanced immune response": false,
        "Permanent happiness": false,
    });
    const [message, setMessage] = useState('');

    const handleCheckboxChange = (answer) => {
        setSelectedAnswers(prev => ({ ...prev, [answer]: !prev[answer] }));
    };

    const handleSubmit = () => {
        if (selectedAnswers["Increased emotional regulation"] && selectedAnswers["Enhanced immune response"] && !selectedAnswers["Increased irritability"] && !selectedAnswers["Permanent happiness"]) {
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
            <p>Which of the following are proven benefits of regular minfulness practice?</p>
            
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
        if (selectedAnswer === "It increases the frequency of the very thoughts and feelings you are trying to avoid.") {
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
            <p>Which of the following happens when you try to suppress emotions?</p>
            <div className="answers">
                <div className="answer">
                    <div className="radio">
                        <input type="radio" id="introToMindfulness1Answer1" name="introToMindfulness1Answer" value="The emotions disappear permenently." onChange={(e) => setSelectedAnswer(e.target.value)} />
                        <span className="radioButton"></span>
                    </div>
                    <label htmlFor="introToMindfulness1Answer1">The emotions disappear permenently.</label>
                </div>
                <div className="answer">
                    <div className="radio">
                        <input type="radio" id="introToMindfulness1Answer2" name="introToMindfulness1Answer" value="It increases the frequency of the very thoughts and feelings you are trying to avoid." onChange={(e) => setSelectedAnswer(e.target.value)} />
                        <span className="radioButton"></span>
                    </div>
                    <label htmlFor="introToMindfulness1Answer2">It increases the frequency of the very thoughts and feelings you are trying to avoid.</label>
                </div>
                <div className="answer">
                    <div className="radio">
                        <input type="radio" id="introToMindfulness1Answer3" name="introToMindfulness1Answer" value="You gain superhuman control over your mind." onChange={(e) => setSelectedAnswer(e.target.value)}/>
                        <span className="radioButton"></span>
                    </div>
                    <label htmlFor="introToMindfulness1Answer3">You gain superhuman control over your mind.</label>
                </div>
                <div className="answer">
                    <div className="radio">
                        <input type="radio" id="introToMindfulness1Answer4" name="introToMindfulness1Answer" value="Your brain rewards you with extra dopamine." onChange={(e) => setSelectedAnswer(e.target.value)} />
                        <span className="radioButton"></span>
                    </div>
                    <label htmlFor="introToMindfulness1Answer4">Your brain rewards you with extra dopamine.</label>
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
        if (selectedAnswer === "False") {
            setMessage("You're on fire!");
            setCorrectAnswer(true);
        } else {
            setMessage("Try again!");
            setCorrectAnswer(false);
        }
    }

    return(
        <>
            <h3 className="slideHeading">Question 3</h3>
            <p>True or false: Others do not notice when our minds are somewhere else when we are with them.</p>
            <div className="answers">
                <div className="answer">
                    <div className="radio">
                        <input type="radio" id="othersAwarenessAnswer1" name="othersAwarenessAnswer" value="True" onChange={(e) => setSelectedAnswer(e.target.value)} />
                        <span className="radioButton"></span>
                    </div>
                    <label htmlFor="othersAwarenessAnswer1">True</label>
                </div>
                <div className="answer">
                    <div className="radio">
                        <input type="radio" id="othersAwarenessAnswer2" name="othersAwarenessAnswer" value="False" onChange={(e) => setSelectedAnswer(e.target.value)} />
                        <span className="radioButton"></span>
                    </div>
                    <label htmlFor="othersAwarenessAnswer2">False</label>
                </div>
            </div>
            {message && <div className={message === "You're on fire!" ? "feedbackGood" : "feedbackBad"}>{message}</div>}
            <div className="submitButton" onClick={handleSubmit}>
                Check!
            </div>
        </>
    )
}

function Slide4({setCorrectAnswer}){
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = () => {
        if (selectedAnswer === "True") {
            setMessage("Incredible!");
            setCorrectAnswer(true);
        } else {
            setMessage("Try again!");
            setCorrectAnswer(false);
        }
    }

    return(
        <>
            <h3 className="slideHeading">Question 4</h3>
            <p>True or false: Each person has inherent significance.</p>
            <div className="answers">
                <div className="answer">
                    <div className="radio">
                        <input type="radio" id="significanceAnswer1" name="significanceAnswer" value="True" onChange={(e) => setSelectedAnswer(e.target.value)} />
                        <span className="radioButton"></span>
                    </div>
                    <label htmlFor="significanceAnswer1">True</label>
                </div>
                <div className="answer">
                    <div className="radio">
                        <input type="radio" id="significanceAnswer2" name="significanceAnswer" value="False" onChange={(e) => setSelectedAnswer(e.target.value)} />
                        <span className="radioButton"></span>
                    </div>
                    <label htmlFor="significanceAnswer2">False</label>
                </div>
            </div>
            {message && <div className={message === "Incredible!" ? "feedbackGood" : "feedbackBad"}>{message}</div>}
            <div className="submitButton" onClick={handleSubmit}>
                Check!
            </div>
        </>
    )
}

function Slide5({setCorrectAnswer}){
    const [selectedAnswers, setSelectedAnswers] = useState({
        "Intentionally living with awareness in the present moment.": false,
        "Experiencing the moment without judgement.": false,
        "Experiencing the moment without attachment.": false,
        "They all require sitting in silence.": false,
    });
    const [message, setMessage] = useState('');

    const handleCheckboxChange = (answer) => {
        setSelectedAnswers(prev => ({ ...prev, [answer]: !prev[answer] }));
    };

    const handleSubmit = () => {
        if (selectedAnswers["Intentionally living with awareness in the present moment."] && selectedAnswers["Experiencing the moment without judgement."] && selectedAnswers["Experiencing the moment without attachment."] && !selectedAnswers["They all require sitting in silence."]) {
            setMessage("Good job!");
            setCorrectAnswer(true);
        } else {
            setMessage("Try again!");
            setCorrectAnswer(false);
        }
    };

    return(
        <>
            <h3 className="slideHeading">Question 5</h3>
            <p>There are many different forms of mindfulness practice. What are three characteristics that they all have in common?</p>
            
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

function Slide6({setCorrectAnswer}){
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = () => {
        if (selectedAnswer === "True") {
            setMessage("Fantastic!");
            setCorrectAnswer(true);
        } else {
            setMessage("Try again!");
            setCorrectAnswer(false);
        }
    }

    return(
        <>
            <h3 className="slideHeading">Question 6</h3>
            <p>True or false: Mindfulness can be practiced at any time, anywhere, while doing anything.</p>
            <div className="answers">
                <div className="answer">
                    <div className="radio">
                        <input type="radio" id="mindfulnessCanBePracticedAnswer1" name="mindfulnessCanBePracticedAnswer" value="True" onChange={(e) => setSelectedAnswer(e.target.value)} />
                        <span className="radioButton"></span>
                    </div>
                    <label htmlFor="mindfulnessCanBePracticedAnswer1">True</label>
                </div>
                <div className="answer">
                    <div className="radio">
                        <input type="radio" id="mindfulnessCanBePracticedAnswer2" name="mindfulnessCanBePracticedAnswer" value="False" onChange={(e) => setSelectedAnswer(e.target.value)} />
                        <span className="radioButton"></span>
                    </div>
                    <label htmlFor="mindfulnessCanBePracticedAnswer2">False</label>
                </div>
            </div>
            {message && <div className={message === "Fantastic!" ? "feedbackGood" : "feedbackBad"}>{message}</div>}
            <div className="submitButton" onClick={handleSubmit}>
                Check!
            </div>
        </>
    )
}

function Slide7({setCorrectAnswer}){
    const [selectedAnswers, setSelectedAnswers] = useState({
        "Speed typing": false,
        "Dance": false,
        "Hiking with awareness": false,
        "Scrolling through social media": false,
    });
    const [message, setMessage] = useState('');

    const handleCheckboxChange = (answer) => {
        setSelectedAnswers(prev => ({ ...prev, [answer]: !prev[answer] }));
    };

    const handleSubmit = () => {
        if (selectedAnswers["Dance"] && selectedAnswers["Hiking with awareness"] && !selectedAnswers["Speed typing"] && !selectedAnswers["Scrolling through social media"]) {
            setMessage("Good job!");
            setCorrectAnswer(true);
        } else {
            setMessage("Try again!");
            setCorrectAnswer(false);
        }
    };

    return(
        <>
            <h3 className="slideHeading">Question 7</h3>
            <p>Which of the following are examples of mindfulness movement?</p>
            
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

function Slide8({setCorrectAnswer}){
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = () => {
        if (selectedAnswer === "True") {
            setMessage("Fantastic!");
            setCorrectAnswer(true);
        } else {
            setMessage("Try again!");
            setCorrectAnswer(false);
        }
    }

    return(
        <>
            <h3 className="slideHeading">Question 8</h3>
            <p>True or false: Mindfulness skills can be difficult to master and require frequent practice.</p>
            <div className="answers">
                <div className="answer">
                    <div className="radio">
                        <input type="radio" id="mindfulnessDifficultAnswer1" name="mindfulnessDifficultAnswer" value="True" onChange={(e) => setSelectedAnswer(e.target.value)} />
                        <span className="radioButton"></span>
                    </div>
                    <label htmlFor="mindfulnessDifficultAnswer1">True</label>
                </div>
                <div className="answer">
                    <div className="radio">
                        <input type="radio" id="mindfulnessDifficultAnswer2" name="mindfulnessDifficultAnswer" value="False" onChange={(e) => setSelectedAnswer(e.target.value)} />
                        <span className="radioButton"></span>
                    </div>
                    <label htmlFor="mindfulnessDifficultAnswer2">False</label>
                </div>
            </div>
            {message && <div className={message === "Fantastic!" ? "feedbackGood" : "feedbackBad"}>{message}</div>}
            <div className="submitButton" onClick={handleSubmit}>
                Check!
            </div>
        </>
    )
}

function Slide9(){
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
            <p>Amazing job! You now have a good understanding of the basics of mindfulness practice. This is just the beginning! In our next lesson, we will explore the concept of "Wise Mind" and how you can apply it to your daily life.</p>
        </div>
    )
}