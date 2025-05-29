import { FaBookOpenReader, FaTrophy } from "react-icons/fa6";
import { FaPencilAlt } from "react-icons/fa";
import { useEffect, useState } from "react"
import OrientationLesson1 from "../../modals/mindfulnessCourse/OrientationLesson1";
import OrientationLesson1Practice from "../../modals/mindfulnessCourse/OrientationLesson1Practice";
import OrientationLesson1Quiz from "../../modals/mindfulnessCourse/OrientationLesson1Quiz";
import OrientationLesson2 from "../../modals/mindfulnessCourse/OrientationLesson2";
import OrientationLesson2Quiz from "../../modals/mindfulnessCourse/OrientationLesson2Quiz";
import OrientationLesson3 from "../../modals/mindfulnessCourse/OrientationLesson3";
import OrientationLesson3Practice from "../../modals/mindfulnessCourse/OrientationLesson3Practice";
import OrientationLesson3Quiz from "../../modals/mindfulnessCourse/OrientationLesson3Quiz";
import AnalyzingBehaviorLesson1 from "../../modals/mindfulnessCourse/AnalyzingBehaviorLesson1";
import AnalyzingBehaviorLesson1Practice from "../../modals/mindfulnessCourse/AnalyzingBehaviorLesson1Practice";
import AnalyzingBehaviorLesson1Quiz from "../../modals/mindfulnessCourse/AnalyzingBehaviorLesson1Quiz";
import AnalyzingBehaviorLesson2 from "../../modals/mindfulnessCourse/AnalyzingBehaviorLesson2";
import AnalyzingBehaviorLesson2Practice from "../../modals/mindfulnessCourse/AnalyzingBehaviorLesson2Practice";
import AnalyzingBehaviorLesson2Quiz from "../../modals/mindfulnessCourse/AnalyzingBehaviorLesson2Quiz";
import axios from "axios";
import IntroMindfulnessLesson1 from "../../modals/mindfulnessCourse/IntroMindfulnessLesson1";
import IntroMindfulnessLesson1Practice from "../../modals/mindfulnessCourse/IntroMindfulnessLesson1Practice"; //First import the modal component
import IntroMindfulnessLesson1Quiz from "../../modals/mindfulnessCourse/IntroMindfulnessLesson1Quiz";
import IntroMindfulnessLesson2 from "../../modals/mindfulnessCourse/IntroMindfulnessLesson2";
import IntroMindfulnessLesson2Practice from "../../modals/mindfulnessCourse/IntroMindfulnessLesson2Practice";

export default function MindfulnessCourse() {
    const token = localStorage.getItem('token');

    const [orientationLesson1IsOpen, setOrientationLesson1IsOpen] = useState(false);
    const [orientationLesson1PracticeIsOpen, setOrientationLesson1PracticeIsOpen] = useState(false);
    const [orientationLesson1QuizIsOpen, setOrientationLesson1QuizIsOpen] = useState(false);
    const [orientationLesson2IsOpen, setOrientationLesson2IsOpen] = useState(false);
    const [orientationLesson2QuizIsOpen, setOrientationLesson2QuizIsOpen] = useState(false);
    const [orientationLesson3IsOpen, setOrientationLesson3IsOpen] = useState(false);
    const [orientationLesson3PracticeIsOpen, setOrientationLesson3PracticeIsOpen] = useState(false);
    const [orientationLesson3QuizIsOpen, setOrientationLesson3QuizIsOpen] = useState(false);
    const [analyzingBehaviorLesson1IsOpen, setAnalyzingBehaviorLesson1IsOpen] = useState(false);
    const [analyzingBehaviorLesson1PracticeIsOpen, setAnalyzingBehaviorLesson1PracticeIsOpen] = useState(false);
    const [analyzingBehaviorLesson1QuizIsOpen, setAnalyzingBehaviorLesson1QuizIsOpen] = useState(false);
    const [analyzingBehaviorLesson2IsOpen, setAnalyzingBehaviorLesson2IsOpen] = useState(false);
    const [analyzingBehaviorLesson2PracticeIsOpen, setAnalyzingBehaviorLesson2PracticeIsOpen] = useState(false);
    const [analyzingBehaviorLesson2QuizIsOpen, setAnalyzingBehaviorLesson2QuizIsOpen] = useState(false);
    const [introMindfulnessLesson1IsOpen, setIntroMindfulnessLesson1IsOpen] = useState(false);
    const [introMindfulnessLesson1PracticeIsOpen, setIntroMindfulnessLesson1PracticeIsOpen] = useState(false); //Then create a state variable to control the modal's visibility
    const [introMindfulnessLesson1QuizIsOpen, setIntroMindfulnessLesson1QuizIsOpen] = useState(false);
    const [introMindfulnessLesson2IsOpen, setIntroMindfulnessLesson2IsOpen] = useState(false);
    const [introMindfulnessLesson2PracticeIsOpen, setIntroMindfulnessLesson2PracticeIsOpen] = useState(false);

    const [orientationLesson1PracticeIsActive, setOrientationLesson1PracticeIsActive] = useState(false);
    const [orientationLesson1QuizIsActive, setOrientationLesson1QuizIsActive] = useState(false);
    const [orientationLesson2IsActive, setOrientationLesson2IsActive] = useState(false);
    const [orientationLesson2QuizIsActive, setOrientationLesson2QuizIsActive] = useState(false);
    const [orientationLesson3IsActive, setOrientationLesson3IsActive] = useState(false);
    const [orientationLesson3PracticeIsActive, setOrientationLesson3PracticeIsActive] = useState(false);
    const [orientationLesson3QuizIsActive, setOrientationLesson3QuizIsActive] = useState(false);
    const [analyzingBehaviorLesson1IsActive, setAnalyzingBehaviorLesson1IsActive] = useState(false);
    const [analyzingBehaviorLesson1PracticeIsActive, setAnalyzingBehaviorLesson1PracticeIsActive] = useState(false);
    const [analyzingBehaviorLesson1QuizIsActive, setAnalyzingBehaviorLesson1QuizIsActive] = useState(false);
    const [analyzingBehaviorLesson2IsActive, setAnalyzingBehaviorLesson2IsActive] = useState(false);
    const [analyzingBehaviorLesson2PracticeIsActive, setAnalyzingBehaviorLesson2PracticeIsActive] = useState(false);
    const [analyzingBehaviorLesson2QuizIsActive, setAnalyzingBehaviorLesson2QuizIsActive] = useState(false);
    const [introMindfulnessLesson1IsActive, setIntroMindfulnessLesson1IsActive] = useState(false);
    const [introMindfulnessLesson1PracticeIsActive, setIntroMindfulnessLesson1PracticeIsActive] = useState(false);
    const [introMindfulnessLesson1QuizIsActive, setIntroMindfulnessLesson1QuizIsActive] = useState(false);
    const [introMindfulnessLesson2IsActive, setIntroMindfulnessLesson2IsActive] = useState(false);
    const [introMindfulnessLesson2PracticeIsActive, setIntroMindfulnessLesson2PracticeIsActive] = useState(false);
    const [introMindfulnessLesson2QuizIsActive, setIntroMindfulnessLesson2QuizIsActive] = useState(false);
    const [mindfulnessWhatSkillsLesson1IsActive, setMindfulnessWhatSkillsLesson1IsActive] = useState(false);
    const [mindfulnessWhatSkillsLesson1PracticeIsActive, setMindfulnessWhatSkillsLesson1PracticeIsActive] = useState(false);
    const [mindfulnessWhatSkillsLesson1QuizIsActive, setMindfulnessWhatSkillsLesson1QuizIsActive] = useState(false);
    const [mindfulnessWhatSkillsLesson2IsActive, setMindfulnessWhatSkillsLesson2IsActive] = useState(false);
    const [mindfulnessWhatSkillsLesson2PracticeIsActive, setMindfulnessWhatSkillsLesson2PracticeIsActive] = useState(false);
    const [mindfulnessWhatSkillsLesson2QuizIsActive, setMindfulnessWhatSkillsLesson2QuizIsActive] = useState(false);
    const [mindfulnessWhatSkillsLesson3IsActive, setMindfulnessWhatSkillsLesson3IsActive] = useState(false);
    const [mindfulnessWhatSkillsLesson3PracticeIsActive, setMindfulnessWhatSkillsLesson3PracticeIsActive] = useState(false);
    const [mindfulnessWhatSkillsLesson3QuizIsActive, setMindfulnessWhatSkillsLesson3QuizIsActive] = useState(false);
    const [mindfulnessHowSkillsLesson1IsActive, setMindfulnessHowSkillsLesson1IsActive] = useState(false);
    const [mindfulnessHowSkillsLesson1PracticeIsActive, setMindfulnessHowSkillsLesson1PracticeIsActive] = useState(false);
    const [mindfulnessHowSkillsLesson1QuizIsActive, setMindfulnessHowSkillsLesson1QuizIsActive] = useState(false);
    const [mindfulnessHowSkillsLesson2IsActive, setMindfulnessHowSkillsLesson2IsActive] = useState(false);
    const [mindfulnessHowSkillsLesson2PracticeIsActive, setMindfulnessHowSkillsLesson2PracticeIsActive] = useState(false);
    const [mindfulnessHowSkillsLesson2QuizIsActive, setMindfulnessHowSkillsLesson2QuizIsActive] = useState(false);
    const [mindfulnessHowSkillsLesson3IsActive, setMindfulnessHowSkillsLesson3IsActive] = useState(false);
    const [mindfulnessHowSkillsLesson3PracticeIsActive, setMindfulnessHowSkillsLesson3PracticeIsActive] = useState(false);
    const [mindfulnessHowSkillsLesson3QuizIsActive, setMindfulnessHowSkillsLesson3QuizIsActive] = useState(false);
    const [optionalSkillsLesson1IsActive, setOptionalSkillsLesson1IsActive] = useState(false);
    const [optionalSkillsLesson1PracticeIsActive, setOptionalSkillsLesson1PracticeIsActive] = useState(false);
    const [optionalSkillsLesson1QuizIsActive, setOptionalSkillsLesson1QuizIsActive] = useState(false);
    const [optionalSkillsLesson2IsActive, setOptionalSkillsLesson2IsActive] = useState(false);
    const [optionalSkillsLesson2PracticeIsActive, setOptionalSkillsLesson2PracticeIsActive] = useState(false);
    const [optionalSkillsLesson2QuizIsActive, setOptionalSkillsLesson2QuizIsActive] = useState(false);
    const [optionalSkillsLesson3IsActive, setOptionalSkillsLesson3IsActive] = useState(false);
    const [optionalSkillsLesson3PracticeIsActive, setOptionalSkillsLesson3PracticeIsActive] = useState(false);
    const [optionalSkillsLesson3QuizIsActive, setOptionalSkillsLesson3QuizIsActive] = useState(false);

    useEffect(() => {
        const fetchCourseProgress = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/course', {
                    headers: {
                        'Authorization' : `Token ${token}`
                    }
                })

                console.log(response.data);
                setOrientationLesson1PracticeIsActive(response.data[0].orientation_lesson_1_practice);
                setOrientationLesson1QuizIsActive(response.data[0].orientation_lesson_1_quiz);
                setOrientationLesson2IsActive(response.data[0].orientation_lesson_2);
                setOrientationLesson2QuizIsActive(response.data[0].orientation_lesson_2_quiz);
                setOrientationLesson3IsActive(response.data[0].orientation_lesson_3);
                setOrientationLesson3PracticeIsActive(response.data[0].orientation_lesson_3_practice);
                setOrientationLesson3QuizIsActive(response.data[0].orientation_lesson_3_quiz);
                setAnalyzingBehaviorLesson1IsActive(response.data[0].analyzing_behavior_lesson_1);
                setAnalyzingBehaviorLesson1PracticeIsActive(response.data[0].analyzing_behavior_lesson_1_practice);
                setAnalyzingBehaviorLesson1QuizIsActive(response.data[0].analyzing_behavior_lesson_1_quiz);
                setAnalyzingBehaviorLesson2IsActive(response.data[0].analyzing_behavior_lesson_2);
                setAnalyzingBehaviorLesson2PracticeIsActive(response.data[0].analyzing_behavior_lesson_2_practice);
                setAnalyzingBehaviorLesson2QuizIsActive(response.data[0].analyzing_behavior_lesson_2_quiz);
                setIntroMindfulnessLesson1IsActive(response.data[0].intro_mindfulness_lesson_1);
                setIntroMindfulnessLesson1PracticeIsActive(response.data[0].intro_mindfulness_lesson_1_practice); //Then set the state variable to the value of the response data from the back end (this way even if you leave the page and come back, the progress will still be saved)
                setIntroMindfulnessLesson1QuizIsActive(response.data[0].intro_mindfulness_lesson_1_quiz);
                setIntroMindfulnessLesson2IsActive(response.data[0].intro_mindfulness_lesson_2);
                setIntroMindfulnessLesson2PracticeIsActive(response.data[0].intro_mindfulness_lesson_2_practice);
            } catch (error) {
                console.error(error);
            }
        }
        fetchCourseProgress();
    }, [token, orientationLesson1PracticeIsActive]);

    return(
        <div className="coursePage">
            <div className="courseBanner mindfulness">
                <p>Mindfulness</p>
            </div>
            <div className="courseInfo">
                <p className="title">About this course:</p>
                <p className="courseDescription">
                    Mindfulness is the heart of all DBT skills. It is the foundation of all the other skills.
                    It is the practice of being present in the moment and accepting it without judgment. 
                    Beginning with an orientation to DBT itself, we will then move on to the core mindfulness skills.
                    This course will teach you how to practice mindfulness and how to incorporate it into your daily life.
                </p>
            </div>
            <div className="subCourse">
                <div className="courseSubHeader">Orientation</div>
                <div className="subCourseName">Goals of Skills Training</div>
                <div className="courseLesson" onClick={() => setOrientationLesson1IsOpen(true)}><FaBookOpenReader /></div>
                <div className={orientationLesson1PracticeIsActive ? "coursePractice" : "coursePractice inactive"} onClick={() => setOrientationLesson1PracticeIsOpen(true)}><FaPencilAlt /></div>
                <div className={orientationLesson1QuizIsActive ? "courseQuiz" : "courseQuiz inactive"} onClick={() => setOrientationLesson1QuizIsOpen(true)}><FaTrophy /></div>
                <div className="subCourseName">Intro to Skills Training</div>
                <div className={orientationLesson2IsActive ? "courseLesson" : "courseLesson inactive"} onClick={() => setOrientationLesson2IsOpen(true)}><FaBookOpenReader /></div>
                {/* <div className={"coursePractice"}><FaPencilAlt /></div> */}
                <div className={orientationLesson2QuizIsActive ? "courseQuiz" : "courseQuiz inactive"} onClick={() => setOrientationLesson2QuizIsOpen(true)}><FaTrophy /></div>
                <div className="subCourseName">Biosocial Theory of Emotion Dysregulation</div>
                <div className={orientationLesson3IsActive ? "courseLesson" : "courseLesson inactive"} onClick={() => setOrientationLesson3IsOpen(true)}><FaBookOpenReader /></div>
                <div className={orientationLesson3PracticeIsActive ? "coursePractice" : "coursePractice inactive"} onClick={() => setOrientationLesson3PracticeIsOpen(true)}><FaPencilAlt /></div>
                <div className={orientationLesson3QuizIsActive ? "courseQuiz" : "courseQuiz inactive"} onClick={() => setOrientationLesson3QuizIsOpen(true)}><FaTrophy /></div>
            </div>
            <div className="subCourse">
                <div className="courseSubHeader">Analyzing Behavior</div>
                <div className="subCourseName">Chain Analysis of Problem Behavior</div>
                <div className={analyzingBehaviorLesson1IsActive ? "courseLesson" : "courseLesson inactive"} onClick={() => setAnalyzingBehaviorLesson1IsOpen(true)}><FaBookOpenReader /></div>
                <div className={analyzingBehaviorLesson1PracticeIsActive ? "coursePractice": "coursePractice inactive"} onClick={() => setAnalyzingBehaviorLesson1PracticeIsOpen(true)}><FaPencilAlt /></div>
                <div className={analyzingBehaviorLesson1QuizIsActive ? "courseQuiz" : "courseQuiz inactive"} onClick={() => setAnalyzingBehaviorLesson1QuizIsOpen(true)}><FaTrophy /></div>
                <div className="subCourseName">Analyzing Missing Links</div>
                <div className={analyzingBehaviorLesson2IsActive ? "courseLesson" : "courseLesson inactive"} onClick={() => setAnalyzingBehaviorLesson2IsOpen(true)}><FaBookOpenReader /></div>
                <div className={analyzingBehaviorLesson2PracticeIsActive ? "coursePractice": "coursePractice inactive"} onClick={() => setAnalyzingBehaviorLesson2PracticeIsOpen(true)}><FaPencilAlt /></div>
                <div className={analyzingBehaviorLesson2QuizIsActive ? "courseQuiz" : "courseQuiz inactive"} onClick={() => setAnalyzingBehaviorLesson2QuizIsOpen(true)}><FaTrophy /></div>
            </div>
            <div className="subCourse">
                <div className="courseSubHeader">Intro to Mindfulness</div>
                <div className="subCourseName">Goals of Mindfulness</div>
                <div className={introMindfulnessLesson1IsActive ? "courseLesson" : "courseLesson inactive"} onClick={() => setIntroMindfulnessLesson1IsOpen(true)}><FaBookOpenReader /></div>
                <div className={introMindfulnessLesson1PracticeIsActive ? "coursePractice" : "coursePractice inactive"} onClick={() => setIntroMindfulnessLesson1PracticeIsOpen(true)}><FaPencilAlt /></div>{/*Then add an onClick event to the icon to open the modal*/}
                <div className={introMindfulnessLesson1QuizIsActive ? "courseQuiz" : "courseQuiz inactive"} onClick={() => setIntroMindfulnessLesson1QuizIsOpen(true)}><FaTrophy /></div>
                <div className="subCourseName">Wise Mind</div>
                <div className={introMindfulnessLesson2IsActive ? "courseLesson" : "courseLesson inactive"} onClick={() => setIntroMindfulnessLesson2IsOpen(true)}><FaBookOpenReader /></div>
                <div className={introMindfulnessLesson2PracticeIsActive ? "coursePractice" : "coursePractice inactive"} onClick={() => setIntroMindfulnessLesson2PracticeIsOpen(true)}><FaPencilAlt /></div>
                <div className={introMindfulnessLesson2QuizIsActive ? "courseQuiz" : "courseQuiz inactive"}><FaTrophy /></div>
            </div>
            <div className="subCourse">
                <div className="courseSubHeader">Mindfulness "What" Skills</div>
                <div className="subCourseName">Observe</div>
                <div className={mindfulnessWhatSkillsLesson1IsActive ? "courseLesson" : "courseLesson inactive"}><FaBookOpenReader /></div>
                <div className={mindfulnessWhatSkillsLesson1PracticeIsActive ? "coursePractice" : "coursePractice inactive"}><FaPencilAlt /></div>
                <div className={mindfulnessWhatSkillsLesson1QuizIsActive ? "courseQuiz" : "courseQuiz inactive"}><FaTrophy /></div>
                <div className="subCourseName">Describe</div>
                <div className={mindfulnessWhatSkillsLesson2IsActive ? "courseLesson" : "courseLesson inactive"}><FaBookOpenReader /></div>
                <div className={mindfulnessWhatSkillsLesson2PracticeIsActive ? "coursePractice" : "coursePractice inactive"}><FaPencilAlt /></div>
                <div className={mindfulnessWhatSkillsLesson2QuizIsActive ? "courseQuiz" : "courseQuiz inactive"}><FaTrophy /></div>
                <div className="subCourseName">Participate</div>
                <div className={mindfulnessWhatSkillsLesson3IsActive ? "courseLesson" : "courseLesson inactive"}><FaBookOpenReader /></div>
                <div className={mindfulnessWhatSkillsLesson3PracticeIsActive ? "coursePractice" : "coursePractice inactive"}><FaPencilAlt /></div>
                <div className={mindfulnessWhatSkillsLesson3QuizIsActive ? "courseQuiz" : "courseQuiz inactive"}><FaTrophy /></div>
            </div>
            <div className="subCourse">
                <div className="courseSubHeader">Mindfulness "How" Skills</div>
                <div className="subCourseName">Nonjudgementally</div>
                <div className={mindfulnessHowSkillsLesson1IsActive ? "courseLesson" : "courseLesson inactive"}><FaBookOpenReader /></div>
                <div className={mindfulnessHowSkillsLesson1PracticeIsActive ? "coursePractice" : "coursePractice inactive"}><FaPencilAlt /></div>
                <div className={mindfulnessHowSkillsLesson1QuizIsActive ? "courseQuiz" : "courseQuiz inactive"}><FaTrophy /></div>
                <div className="subCourseName">One-Mindfully</div>
                <div className={mindfulnessHowSkillsLesson2IsActive ? "courseLesson" : "courseLesson inactive"}><FaBookOpenReader /></div>
                <div className={mindfulnessHowSkillsLesson2PracticeIsActive ? "coursePractice" : "coursePractice inactive"}><FaPencilAlt /></div>
                <div className={mindfulnessHowSkillsLesson2QuizIsActive ? "courseQuiz" : "courseQuiz inactive"}><FaTrophy /></div>
                <div className="subCourseName">Effectively</div>
                <div className={mindfulnessHowSkillsLesson3IsActive ? "courseLesson" : "courseLesson inactive"}><FaBookOpenReader /></div>
                <div className={mindfulnessHowSkillsLesson3PracticeIsActive ? "coursePractice" : "coursePractice inactive"}><FaPencilAlt /></div>
                <div className={mindfulnessHowSkillsLesson3QuizIsActive ? "courseQuiz" : "courseQuiz inactive"}><FaTrophy /></div>
            </div>
            <div className="subCourse">
                <div className="courseSubHeader">Optional Skills</div>
                <div className="subCourseName">Mindfulness: A Spiritual Perspective</div>
                <div className={optionalSkillsLesson1IsActive ? "courseLesson" : "courseLesson inactive"}><FaBookOpenReader /></div>
                <div className={optionalSkillsLesson1PracticeIsActive ? "coursePractice" : "coursePractice inactive"}><FaPencilAlt /></div>
                <div className={optionalSkillsLesson1QuizIsActive ? "courseQuiz" : "courseQuiz inactive"}><FaTrophy /></div>
                <div className="subCourseName">Skillful Means: Doing Mind and Being Mind</div>
                <div className={optionalSkillsLesson2IsActive ? "courseLesson" : "courseLesson inactive"}><FaBookOpenReader /></div>
                <div className={optionalSkillsLesson2PracticeIsActive ? "coursePractice" : "coursePractice inactive"}><FaPencilAlt /></div>
                <div className={optionalSkillsLesson2QuizIsActive ? "courseQuiz" : "courseQuiz inactive"}><FaTrophy /></div>
                <div className="subCourseName">Wise Mind: Walking the Middle Path</div>
                <div className={optionalSkillsLesson3IsActive ? "courseLesson" : "courseLesson inactive"}><FaBookOpenReader /></div>
                <div className={optionalSkillsLesson3PracticeIsActive ? "coursePractice" : "coursePractice inactive"}><FaPencilAlt /></div>
                <div className={optionalSkillsLesson3QuizIsActive ? "courseQuiz" : "courseQuiz inactive"}><FaTrophy /></div>
            </div>

            {orientationLesson1IsOpen && <OrientationLesson1 setOrientationLesson1IsOpen={setOrientationLesson1IsOpen} setOrientationLesson1PracticeIsActive={setOrientationLesson1PracticeIsActive} />}
            {orientationLesson1PracticeIsOpen && <OrientationLesson1Practice setOrientationLesson1PracticeIsOpen={setOrientationLesson1PracticeIsOpen} setOrientationLesson1QuizIsActive={setOrientationLesson1QuizIsActive} />}
            {orientationLesson1QuizIsOpen && <OrientationLesson1Quiz setOrientationLesson1QuizIsOpen={setOrientationLesson1QuizIsOpen} setOrientationLesson2IsActive={setOrientationLesson2IsActive} />}
            {orientationLesson2IsOpen && <OrientationLesson2 setOrientationLesson2IsOpen={setOrientationLesson2IsOpen} setOrientationLesson2QuizIsActive={setOrientationLesson2QuizIsActive} />}
            {orientationLesson2QuizIsOpen && <OrientationLesson2Quiz setOrientationLesson2QuizIsOpen={setOrientationLesson2QuizIsOpen} setOrientationLesson3IsActive={setOrientationLesson3IsActive} />}
            {orientationLesson3IsOpen && <OrientationLesson3 setOrientationLesson3IsOpen={setOrientationLesson3IsOpen} setOrientationLesson3PracticeIsActive={setOrientationLesson3PracticeIsActive} />}
            {orientationLesson3PracticeIsOpen && <OrientationLesson3Practice setOrientationLesson3PracticeIsOpen={setOrientationLesson3PracticeIsOpen} setOrientationLesson3QuizIsActive={setOrientationLesson3QuizIsActive} />}
            {orientationLesson3QuizIsOpen && <OrientationLesson3Quiz setOrientationLesson3QuizIsOpen={setOrientationLesson3QuizIsOpen} setAnalyzingBehaviorLesson1IsActive={setAnalyzingBehaviorLesson1IsActive} />}
            {analyzingBehaviorLesson1IsOpen && <AnalyzingBehaviorLesson1 setAnalyzingBehaviorLesson1IsOpen={setAnalyzingBehaviorLesson1IsOpen} setAnalyzingBehaviorLesson1PracticeIsActive={setAnalyzingBehaviorLesson1PracticeIsActive} />}
            {analyzingBehaviorLesson1PracticeIsOpen && <AnalyzingBehaviorLesson1Practice setAnalyzingBehaviorLesson1PracticeIsOpen={setAnalyzingBehaviorLesson1PracticeIsOpen} setAnalyzingBehaviorLesson1QuizIsActive={setAnalyzingBehaviorLesson1QuizIsActive} />}
            {analyzingBehaviorLesson1QuizIsOpen && <AnalyzingBehaviorLesson1Quiz setAnalyzingBehaviorLesson1QuizIsOpen={setAnalyzingBehaviorLesson1QuizIsOpen} setAnalyzingBehaviorLesson2IsActive={setAnalyzingBehaviorLesson2IsActive} />}
            {analyzingBehaviorLesson2IsOpen && <AnalyzingBehaviorLesson2 setAnalyzingBehaviorLesson2IsOpen={setAnalyzingBehaviorLesson2IsOpen} setAnalyzingBehaviorLesson2PracticeIsActive={setAnalyzingBehaviorLesson2PracticeIsActive} />}
            {analyzingBehaviorLesson2PracticeIsOpen && <AnalyzingBehaviorLesson2Practice setAnalyzingBehaviorLesson2PracticeIsOpen={setAnalyzingBehaviorLesson2PracticeIsOpen} setAnalyzingBehaviorLesson2QuizIsActive={setAnalyzingBehaviorLesson2QuizIsActive} />}
            {analyzingBehaviorLesson2QuizIsOpen && <AnalyzingBehaviorLesson2Quiz setAnalyzingBehaviorLesson2QuizIsOpen={setAnalyzingBehaviorLesson2QuizIsOpen} setIntroMindfulnessLesson1IsActive={setIntroMindfulnessLesson1IsActive} />}
            {introMindfulnessLesson1IsOpen && <IntroMindfulnessLesson1 setIntroMindfulnessLesson1IsOpen={setIntroMindfulnessLesson1IsOpen} setIntroMindfulnessLesson1PracticeIsActive={setIntroMindfulnessLesson1PracticeIsActive} />} {/*Add the state variable and the setter function as props to the modal component*/}
            {introMindfulnessLesson1PracticeIsOpen && <IntroMindfulnessLesson1Practice setIntroMindfulnessLesson1PracticeIsOpen={setIntroMindfulnessLesson1PracticeIsOpen} setIntroMindfulnessLesson1QuizIsActive={setIntroMindfulnessLesson1QuizIsActive} />} {/*Then add the modal component to the page and pass the setter function as a prop to the modal component*/}
            {introMindfulnessLesson1QuizIsOpen && <IntroMindfulnessLesson1Quiz setIntroMindfulnessLesson1QuizIsOpen={setIntroMindfulnessLesson1QuizIsOpen} setIntroMindfulnessLesson2IsActive={setIntroMindfulnessLesson2IsActive} />}
            {introMindfulnessLesson2IsOpen && <IntroMindfulnessLesson2 setIntroMindfulnessLesson2IsOpen={setIntroMindfulnessLesson2IsOpen} setIntroMindfulnessLesson2PracticeIsActive={setIntroMindfulnessLesson2PracticeIsActive} />}
            {introMindfulnessLesson2PracticeIsOpen && <IntroMindfulnessLesson2Practice setIntroMindfulnessLesson2PracticeIsOpen={setIntroMindfulnessLesson2PracticeIsOpen} /*setIntroMindfulnessLesson2QuizIsActive={setIntroMindfulnessLesson2QuizIsActive}*/ />}
            {/* {introMindfulnessLesson2QuizIsOpen && <IntroMindfulnessLesson2Quiz setIntroMindfulnessLesson2QuizIsOpen={setIntroMindfulnessLesson2QuizIsOpen} setOptionalSkillsLesson1IsActive={setOptionalSkillsLesson1IsActive} />} */}
            
        </div>
    )
}