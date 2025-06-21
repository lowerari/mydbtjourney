import React, { useEffect, useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import confetti from "canvas-confetti";
import axios from "axios";

export default function IntroMindfulnessLesson1Quiz({ setIntroMindfulnessLesson2QuizIsOpen, setMindfulnessWhatSkillsLesson1IsActive }) {
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
        Slide10,
        Slide11,
        Slide12,
        Slide13
    ]

    const handleUpdateCourseProgress = async () => {
        const token = localStorage.getItem('token');
        try {
            const response = await axios.patch('http://127.0.0.1:8000/update_course', {
                mindfulness_what_skills_lesson_1 : true
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
                    <h5 className="heading">Wise Mind: Quiz</h5>
                </div>
                <button className="closeBtn" onClick={() => setIntroMindfulnessLesson2QuizIsOpen(false)}>
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
                            setIntroMindfulnessLesson2QuizIsOpen(false); 
                            setCorrectAnswer(false);
                            setMindfulnessWhatSkillsLesson1IsActive(true);
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
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = () => {
        if (selectedAnswer === "False") {
            setMessage("Correct!");
            setCorrectAnswer(true);
        } else {
            setMessage("Try again!");
            setCorrectAnswer(false);
        }
    }

    return(
        <>
            <h3 className="slideHeading">Question 1</h3>
            <p>True or false: Not everyone has inner wisdom.</p>
            <div className="answers">
                <div className="answer">
                    <div className="radio">
                        <input type="radio" id="innerWisdomAnswer1" name="innerWisdomAnswer" value="True" onChange={(e) => setSelectedAnswer(e.target.value)} />
                        <span className="radioButton"></span>
                    </div>
                    <label htmlFor="innerWisdomAnswer1">True</label>
                </div>
                <div className="answer">
                    <div className="radio">
                        <input type="radio" id="innerWisdomAnswer2" name="innerWisdomAnswer" value="False" onChange={(e) => setSelectedAnswer(e.target.value)} />
                        <span className="radioButton"></span>
                    </div>
                    <label htmlFor="innerWisdomAnswer2">False</label>
                </div>
            </div>
            {message && <div className={message === "Correct!" ? "feedbackGood" : "feedbackBad"}>{message}</div>}
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
        if (selectedAnswer === "Your state of mind when your emotions are in control and are not balanced by reason.") {
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
            <p>What is "emotion mind"?</p>
            <div className="answers">
                <div className="answer">
                    <div className="radio">
                        <input type="radio" id="whatEmotionMindAnswer1" name="whatEmotionMindAnswer" value="Your state of mind when your emotions are in control and are not balanced by reason." onChange={(e) => setSelectedAnswer(e.target.value)} />
                        <span className="radioButton"></span>
                    </div>
                    <label htmlFor="whatEmotionMindAnswer1">Your state of mind when your emotions are in control and are not balanced by reason.</label>
                </div>
                <div className="answer">
                    <div className="radio">
                        <input type="radio" id="whatEmotionMindAnswer2" name="whatEmotionMindAnswer" value="A meditative state." onChange={(e) => setSelectedAnswer(e.target.value)} />
                        <span className="radioButton"></span>
                    </div>
                    <label htmlFor="whatEmotionMindAnswer2">A meditative state.</label>
                </div>
                <div className="answer">
                    <div className="radio">
                        <input type="radio" id="whatEmotionMindAnswer3" name="whatEmotionMindAnswer" value="The part of your brain that has feelings." onChange={(e) => setSelectedAnswer(e.target.value)}/>
                        <span className="radioButton"></span>
                    </div>
                    <label htmlFor="whatEmotionMindAnswer3">The part of your brain that has feelings.</label>
                </div>
                <div className="answer">
                    <div className="radio">
                        <input type="radio" id="whatEmotionMindAnswer4" name="whatEmotionMindAnswer" value="A technique used to ignore your emotions and focus only on logic." onChange={(e) => setSelectedAnswer(e.target.value)} />
                        <span className="radioButton"></span>
                    </div>
                    <label htmlFor="whatEmotionMindAnswer4">A technique used to ignore your emotions and focus only on logic.</label>
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
    const [selectedAnswers, setSelectedAnswers] = useState({
        "Drugs or alcohol.": false,
        "Being calm and well-rested.": false,
        "Daily mindfulness practice.": false,
        "Environmental stress.": false,
    });
    const [message, setMessage] = useState('');

    const handleCheckboxChange = (answer) => {
        setSelectedAnswers(prev => ({ ...prev, [answer]: !prev[answer] }));
    };

    const handleSubmit = () => {
        if (selectedAnswers["Drugs or alcohol."] && selectedAnswers["Environmental stress."] && !selectedAnswers["Being calm and well-rested."] && !selectedAnswers["Daily mindfulness practice."]) {
            setMessage("Good job!");
            setCorrectAnswer(true);
        } else {
            setMessage("Try again!");
            setCorrectAnswer(false);
        }
    };

    return(
        <>
            <h3 className="slideHeading">Question 3</h3>
            <p>Which of the following are vulnerability factors for emotion mind?</p>
            
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

function Slide4({setCorrectAnswer}){
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = () => {
        if (selectedAnswer === "True") {
            setMessage("Correct!");
            setCorrectAnswer(true);
        } else {
            setMessage("Try again!");
            setCorrectAnswer(false);
        }
    }

    return(
        <>
            <h3 className="slideHeading">Question 4</h3>
            <p>True or false: Even intense emotions can be very beneficial.</p>
            <div className="answers">
                <div className="answer">
                    <div className="radio">
                        <input type="radio" id="intenseEmotionsBenefitAnswer1" name="intenseEmotionsBenefitAnswer" value="True" onChange={(e) => setSelectedAnswer(e.target.value)} />
                        <span className="radioButton"></span>
                    </div>
                    <label htmlFor="intenseEmotionsBenefitAnswer1">True</label>
                </div>
                <div className="answer">
                    <div className="radio">
                        <input type="radio" id="intenseEmotionsBenefitAnswer2" name="intenseEmotionsBenefitAnswer" value="False" onChange={(e) => setSelectedAnswer(e.target.value)} />
                        <span className="radioButton"></span>
                    </div>
                    <label htmlFor="intenseEmotionsBenefitAnswer2">False</label>
                </div>
            </div>
            {message && <div className={message === "Correct!" ? "feedbackGood" : "feedbackBad"}>{message}</div>}
            <div className="submitButton" onClick={handleSubmit}>
                Check!
            </div>
        </>
    )
}

function Slide5({setCorrectAnswer}){
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = () => {
        if (selectedAnswer === "When the emotions are ineffective and control us.") {
            setMessage("Amazing!");
            setCorrectAnswer(true);
        } else {
            setMessage("Try again!");
            setCorrectAnswer(false);
        }
    }

    return(
        <>
            <h3 className="slideHeading">Question 5</h3>
            <p>When do problems with emotions occur?</p>
            <div className="answers">
                <div className="answer">
                    <div className="radio">
                        <input type="radio" id="whenProblemsEmotionsAnswer1" name="whenProblemsEmotionsAnswer" value="When you feel more than one emotion at a time." onChange={(e) => setSelectedAnswer(e.target.value)} />
                        <span className="radioButton"></span>
                    </div>
                    <label htmlFor="whenProblemsEmotionsAnswer1">When you feel more than one emotion at a time.</label>
                </div>
                <div className="answer">
                    <div className="radio">
                        <input type="radio" id="whenProblemsEmotionsAnswer2" name="whenProblemsEmotionsAnswer" value="When the emotions are ineffective and control us." onChange={(e) => setSelectedAnswer(e.target.value)} />
                        <span className="radioButton"></span>
                    </div>
                    <label htmlFor="whenProblemsEmotionsAnswer2">When the emotions are ineffective and control us.</label>
                </div>
                <div className="answer">
                    <div className="radio">
                        <input type="radio" id="whenProblemsEmotionsAnswer3" name="whenProblemsEmotionsAnswer" value="When you cry in public." onChange={(e) => setSelectedAnswer(e.target.value)}/>
                        <span className="radioButton"></span>
                    </div>
                    <label htmlFor="whenProblemsEmotionsAnswer3">When you cry in public.</label>
                </div>
                <div className="answer">
                    <div className="radio">
                        <input type="radio" id="whenProblemsEmotionsAnswer4" name="whenProblemsEmotionsAnswer" value="When you get emotional during a movie." onChange={(e) => setSelectedAnswer(e.target.value)} />
                        <span className="radioButton"></span>
                    </div>
                    <label htmlFor="whenProblemsEmotionsAnswer4">When you get emotional during a movie.</label>
                </div>
            </div>
            {message && <div className={message === "Amazing!" ? "feedbackGood" : "feedbackBad"}>{message}</div>}
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
        if (selectedAnswer === "False") {
            setMessage("Exactly!");
            setCorrectAnswer(true);
        } else {
            setMessage("Try again!");
            setCorrectAnswer(false);
        }
    }

    return(
        <>
            <h3 className="slideHeading">Question 6</h3>
            <p>True or false: When someone appears very calm outwardly, it's impossible that their emotions are in control and they can not be in emotion mind.</p>
            <div className="answers">
                <div className="answer">
                    <div className="radio">
                        <input type="radio" id="calmOutwardlyAnswer1" name="calmOutwardlyAnswer" value="True" onChange={(e) => setSelectedAnswer(e.target.value)} />
                        <span className="radioButton"></span>
                    </div>
                    <label htmlFor="calmOutwardlyAnswer1">True</label>
                </div>
                <div className="answer">
                    <div className="radio">
                        <input type="radio" id="calmOutwardlyAnswer2" name="calmOutwardlyAnswer" value="False" onChange={(e) => setSelectedAnswer(e.target.value)} />
                        <span className="radioButton"></span>
                    </div>
                    <label htmlFor="calmOutwardlyAnswer2">False</label>
                </div>
            </div>
            {message && <div className={message === "Exactly!" ? "feedbackGood" : "feedbackBad"}>{message}</div>}
            <div className="submitButton" onClick={handleSubmit}>
                Check!
            </div>
        </>
    )
}

function Slide7({setCorrectAnswer}){
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = () => {
        if (selectedAnswer === "False") {
            setMessage("Perfect!");
            setCorrectAnswer(true);
        } else {
            setMessage("Try again!");
            setCorrectAnswer(false);
        }
    }

    return(
        <>
            <h3 className="slideHeading">Question 7</h3>
            <p>True or false:  If you are highly emotional, you must be in emotion mind.</p>
            <div className="answers">
                <div className="answer">
                    <div className="radio">
                        <input type="radio" id="highlyEmotionalAnswer1" name="highlyEmotionalAnswer" value="True" onChange={(e) => setSelectedAnswer(e.target.value)} />
                        <span className="radioButton"></span>
                    </div>
                    <label htmlFor="highlyEmotionalAnswer1">True</label>
                </div>
                <div className="answer">
                    <div className="radio">
                        <input type="radio" id="highlyEmotionalAnswer2" name="highlyEmotionalAnswer" value="False" onChange={(e) => setSelectedAnswer(e.target.value)} />
                        <span className="radioButton"></span>
                    </div>
                    <label htmlFor="highlyEmotionalAnswer2">False</label>
                </div>
            </div>
            {message && <div className={message === "Perfect!" ? "feedbackGood" : "feedbackBad"}>{message}</div>}
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
        if (selectedAnswer === "Because you ignore your emotions, needs, desires, and passions as well as those of others.") {
            setMessage("Keep it up!");
            setCorrectAnswer(true);
        } else {
            setMessage("Try again!");
            setCorrectAnswer(false);
        }
    }

    return(
        <>
            <h3 className="slideHeading">Question 8</h3>
            <p>Why can it be problematic to be stuck in reasonable mind?</p>
            <div className="answers">
                <div className="answer">
                    <div className="radio">
                        <input type="radio" id="whyReasonableMindProblemAnswer1" name="whyReasonableMindProblemAnswer" value="Because it prevents you from ever feeling stressed." onChange={(e) => setSelectedAnswer(e.target.value)} />
                        <span className="radioButton"></span>
                    </div>
                    <label htmlFor="whyReasonableMindProblemAnswer1">Because it prevents you from ever feeling stressed.</label>
                </div>
                <div className="answer">
                    <div className="radio">
                        <input type="radio" id="whyReasonableMindProblemAnswer2" name="whyReasonableMindProblemAnswer" value="Because it makes it impossible to set clear goals." onChange={(e) => setSelectedAnswer(e.target.value)} />
                        <span className="radioButton"></span>
                    </div>
                    <label htmlFor="whyReasonableMindProblemAnswer2">Because it makes it impossible to set clear goals.</label>
                </div>
                <div className="answer">
                    <div className="radio">
                        <input type="radio" id="whyReasonableMindProblemAnswer3" name="whyReasonableMindProblemAnswer" value="Because it encourages overreliance on gut feelings." onChange={(e) => setSelectedAnswer(e.target.value)}/>
                        <span className="radioButton"></span>
                    </div>
                    <label htmlFor="whyReasonableMindProblemAnswer3">Because it encourages overreliance on gut feelings.</label>
                </div>
                <div className="answer">
                    <div className="radio">
                        <input type="radio" id="whyReasonableMindProblemAnswer4" name="whyReasonableMindProblemAnswer" value="Because you ignore your emotions, needs, desires, and passions as well as those of others." onChange={(e) => setSelectedAnswer(e.target.value)} />
                        <span className="radioButton"></span>
                    </div>
                    <label htmlFor="whyReasonableMindProblemAnswer4">Because you ignore your emotions, needs, desires, and passions as well as those of others.</label>
                </div>
            </div>
            {message && <div className={message === "Keep it up!" ? "feedbackGood" : "feedbackBad"}>{message}</div>}
            <div className="submitButton" onClick={handleSubmit}>
                Check!
            </div>
        </>
    )
}

function Slide9({setCorrectAnswer}){
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = () => {
        if (selectedAnswer === "The state of mind where you are ruled by facts, reason, and logic and emotions are irrelevant.") {
            setMessage("Keep it up!");
            setCorrectAnswer(true);
        } else {
            setMessage("Try again!");
            setCorrectAnswer(false);
        }
    }

    return(
        <>
            <h3 className="slideHeading">Question 9</h3>
            <p>What is "reasonable mind"?</p>
            <div className="answers">
                <div className="answer">
                    <div className="radio">
                        <input type="radio" id="whatReasonableMindAnswer1" name="whatReasonableMindAnswer" value="A mind that never feels anything." onChange={(e) => setSelectedAnswer(e.target.value)} />
                        <span className="radioButton"></span>
                    </div>
                    <label htmlFor="whatReasonableMindAnswer1">A mind that never feels anything.</label>
                </div>
                <div className="answer">
                    <div className="radio">
                        <input type="radio" id="whatReasonableMindAnswer2" name="whatReasonableMindAnswer" value="A special mindset that you enter to solve puzzles." onChange={(e) => setSelectedAnswer(e.target.value)} />
                        <span className="radioButton"></span>
                    </div>
                    <label htmlFor="whatReasonableMindAnswer2">A special mindset that you enter to solve puzzles.</label>
                </div>
                <div className="answer">
                    <div className="radio">
                        <input type="radio" id="whatReasonableMindAnswer3" name="whatReasonableMindAnswer" value="The state of mind where you are ruled by facts, reason, and logic and emotions are irrelevant." onChange={(e) => setSelectedAnswer(e.target.value)}/>
                        <span className="radioButton"></span>
                    </div>
                    <label htmlFor="whatReasonableMindAnswer3">The state of mind where you are ruled by facts, reason, and logic and emotions are irrelevant.</label>
                </div>
                <div className="answer">
                    <div className="radio">
                        <input type="radio" id="whatReasonableMindAnswer4" name="whatReasonableMindAnswer" value="An emotional breakdown handled very politely." onChange={(e) => setSelectedAnswer(e.target.value)} />
                        <span className="radioButton"></span>
                    </div>
                    <label htmlFor="whatReasonableMindAnswer4">An emotional breakdown handled very politely.</label>
                </div>
            </div>
            {message && <div className={message === "Keep it up!" ? "feedbackGood" : "feedbackBad"}>{message}</div>}
            <div className="submitButton" onClick={handleSubmit}>
                Check!
            </div>
        </>
    )
}

function Slide10({setCorrectAnswer}){
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = () => {
        if (selectedAnswer === "The integration of emotion mind with reasonable mind to create a balanced state of mind.") {
            setMessage("Keep it up!");
            setCorrectAnswer(true);
        } else {
            setMessage("Try again!");
            setCorrectAnswer(false);
        }
    }

    return(
        <>
            <h3 className="slideHeading">Question 10</h3>
            <p>What is "wise mind"?</p>
            <div className="answers">
                <div className="answer">
                    <div className="radio">
                        <input type="radio" id="whatWiseMindAnswer1" name="whatWiseMindAnswer" value="The integration of emotion mind with reasonable mind to create a balanced state of mind." onChange={(e) => setSelectedAnswer(e.target.value)} />
                        <span className="radioButton"></span>
                    </div>
                    <label htmlFor="whatWiseMindAnswer1">The integration of emotion mind with reasonable mind to create a balanced state of mind.</label>
                </div>
                <div className="answer">
                    <div className="radio">
                        <input type="radio" id="whatWiseMindAnswer2" name="whatWiseMindAnswer" value="A state where you suppress emotion in favor of logic." onChange={(e) => setSelectedAnswer(e.target.value)} />
                        <span className="radioButton"></span>
                    </div>
                    <label htmlFor="whatWiseMindAnswer2">A state where you suppress emotion in favor of logic.</label>
                </div>
                <div className="answer">
                    <div className="radio">
                        <input type="radio" id="whatWiseMindAnswer3" name="whatWiseMindAnswer" value="A heightened emotional state used to make quick decisions." onChange={(e) => setSelectedAnswer(e.target.value)}/>
                        <span className="radioButton"></span>
                    </div>
                    <label htmlFor="whatWiseMindAnswer3">A heightened emotional state used to make quick decisions.</label>
                </div>
                <div className="answer">
                    <div className="radio">
                        <input type="radio" id="whatWiseMindAnswer4" name="whatWiseMindAnswer" value="A mental shortcut that helps you avoid overthinking by going with your first impulse." onChange={(e) => setSelectedAnswer(e.target.value)} />
                        <span className="radioButton"></span>
                    </div>
                    <label htmlFor="whatWiseMindAnswer4">A mental shortcut that helps you avoid overthinking by going with your first impulse.</label>
                </div>
            </div>
            {message && <div className={message === "Keep it up!" ? "feedbackGood" : "feedbackBad"}>{message}</div>}
            <div className="submitButton" onClick={handleSubmit}>
                Check!
            </div>
        </>
    )
}

function Slide11({setCorrectAnswer}){
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = () => {
        if (selectedAnswer === "True") {
            setMessage("Correct!");
            setCorrectAnswer(true);
        } else {
            setMessage("Try again!");
            setCorrectAnswer(false);
        }
    }

    return(
        <>
            <h3 className="slideHeading">Question 11</h3>
            <p>True or false: Emotion mind and wise mind both have the quality of "feeling" something to be the case.</p>
            <div className="answers">
                <div className="answer">
                    <div className="radio">
                        <input type="radio" id="emotionAndWiseMindAnswer1" name="emotionAndWiseMindAnswer" value="True" onChange={(e) => setSelectedAnswer(e.target.value)} />
                        <span className="radioButton"></span>
                    </div>
                    <label htmlFor="emotionAndWiseMindAnswer1">True</label>
                </div>
                <div className="answer">
                    <div className="radio">
                        <input type="radio" id="emotionAndWiseMindAnswer2" name="emotionAndWiseMindAnswer" value="False" onChange={(e) => setSelectedAnswer(e.target.value)} />
                        <span className="radioButton"></span>
                    </div>
                    <label htmlFor="emotionAndWiseMindAnswer2">False</label>
                </div>
            </div>
            {message && <div className={message === "Correct!" ? "feedbackGood" : "feedbackBad"}>{message}</div>}
            <div className="submitButton" onClick={handleSubmit}>
                Check!
            </div>
        </>
    )
}

function Slide12({setCorrectAnswer}){
    const [selectedAnswers, setSelectedAnswers] = useState({
        "Wise mind is only accessible during meditation.": false,
        "Wise mind is similar to intuition.": false,
        "Wise mind is the part of each person that can know and experience the truth.": false,
        "Wise mind guarantees perfect decisions every time.": false,
    });
    const [message, setMessage] = useState('');

    const handleCheckboxChange = (answer) => {
        setSelectedAnswers(prev => ({ ...prev, [answer]: !prev[answer] }));
    };

    const handleSubmit = () => {
        if (selectedAnswers["Wise mind is similar to intuition."] && selectedAnswers["Wise mind is the part of each person that can know and experience the truth."] && !selectedAnswers["Wise mind is only accessible during meditation."] && !selectedAnswers["Wise mind guarantees perfect decisions every time."]) {
            setMessage("Congratulations!");
            setCorrectAnswer(true);
        } else {
            setMessage("Try again!");
            setCorrectAnswer(false);
        }
    };

    return(
        <>
            <h3 className="slideHeading">Question 3</h3>
            <p>Which of the following are vulnerability factors for emotion mind?</p>
            
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

            {message && <div className={message === "Congratulations!" ? "feedbackGood" : "feedbackBad"}>{message}</div>}
            <div className="submitButton" onClick={handleSubmit}>
                Check!
            </div>
        </>
    )
}

function Slide13(){
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
            <p>Great work! You've got a solid grasp of the concept of Wise Mind and how it relates to Reasonable Mind and Emotion Mind. This is a powerful tool for making balanced, thoughtful decisions and you're well on your way to using it in real life. In our next lesson, we'll take a look at the first set of mindfulness "what" skills with "Observe". See you there!</p>
        </div>
    )
}