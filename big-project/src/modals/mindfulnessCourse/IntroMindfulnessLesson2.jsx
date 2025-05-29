import React, { useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import { MdOutlineScience } from "react-icons/md";
import { FaLightbulb } from "react-icons/fa";
import axios from "axios";

export default function IntroMindfulnessLesson1({ setIntroMindfulnessLesson2IsOpen, setIntroMindfulnessLesson2PracticeIsActive }) {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        slide1,
        slide2,
        slide3,
        slide4,
        slide5,
        slide6,
        slide7,
        slide8,
        slide9,
        slide10,
        slide11,
        slide12,
        slide13,
        slide14,
        slide15
    ];

    const handleUpdateCourseProgress = async () => {
        const token = localStorage.getItem('token');
        try {
            const response = await axios.patch('http://127.0.0.1:8000/update_course', {
                intro_mindfulness_lesson_2_practice : true
            }, {
                headers: {
                    'Authorization': `Token ${token}`
                }
            })
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

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
    }

    return(
        <>
            <div className="centered">
                <div className="modal">
                    <div className="modalHeader">
                        <h5 className="heading">Wise Mind</h5>
                    </div>
                    <button className="closeBtn" onClick={() => setIntroMindfulnessLesson2IsOpen(false)}>
                        <RiCloseLine style={{ marginBottom: "-3px" }}/>
                    </button>

                    <div className="modalContent">
                        <div className="progressBar">
                            <div className="progressFill" style={{ width: `${(currentSlide + 1) * (100 / slides.length)}%` }}></div>
                        </div>
                        <div className="slide">
                            {/* Dynamically render the current slide component */}
                            {React.createElement(slides[currentSlide])}
                        </div>
                        <div className="slideNav">
                            {currentSlide !== 0 && <button className="prevButton" onClick={goToPreviousSlide}>Previous</button>}
                            {currentSlide === 0 && <div className="invisoDiv"></div>}
                            {currentSlide === slides.length - 1 && <button className="nextButton" onClick={() => {
                                setIntroMindfulnessLesson2IsOpen(false);
                                setIntroMindfulnessLesson2PracticeIsActive(true);
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
            <h3 className="slideHeading">What is "Wise Mind"?</h3>
            <p>Each person has inner wisdom. We call this inner wisdom "wise mind." Wise mind includes the ability to identify and use skillful means for attaining valued ends, as well as the ability to access and apply knowledge, experience, and common sense to the situation at hand. Everyone has wise mind, even if they cannot always access it at a particular point.</p>
            <div className="slideImage">
                <img src="/pictures/agto-nugroho-wuDvhtaAYYI-unsplash.jpg" alt="Photo by Agto Nugroho on Unsplash" />
            </div>
        </>
    )
}

function slide2() {
    return(
        <>
            <h3 className="slideHeading">Reasonable Mind and Emotion Mind</h3>
            <p>Reasonable mind and emotion mind are the states of mind that get in the way of wise mind. Our state of mind can interfere with our ability to access our inner wisdom. We can be in different states of mind at different times, which can cause us to feel, think, and act very differently from one state to the next.</p>
            <div className="slideImage">
                <img src="/pictures/dimmis-vart-CFqUdmzzti0-unsplash.jpg" alt="Photo by Dimmis Vart on Unsplash" />
            </div>
        </>
    )
}

function slide3() {
    return(
        <>
            <h3 className="slideHeading">Emotion Mind</h3>
            <p>Emotion mind is your state of mind when your emotions are in control and are not balanced by reason. Emotions control your thinking and your behavior. When completely in emotion mind, you are ruled by your moods, feelings, and urges to do or say things. Facts, reason, and logic are not important.</p>
            <div className="thinkAboutIt">
                <h3><FaLightbulb /> Think About It!</h3>
                <p>Which emotions usually get in the way of your acting wisely?</p>
            </div>
        </>
    )
}

function slide4() {
    return(
        <>
            <h3 className="slideHeading">Vulnerabily Factors for Emotion Mind</h3>
            <p>Factors that make us all vulnerable to emotion mind include:</p>
            <ol>
                <li>Illness</li>
                <li>Tiredness</li>
                <li>Drugs or alcohol</li>
                <li>Hunger, bloating, overeating, or poor nutrition</li>
                <li>Environmental stress</li>
                <li>Environmental threats</li>
            </ol>
            <div className="thinkAboutIt">
                <h3><FaLightbulb /> Think About It!</h3>
                <p>Can you think of any other possible vulnerability factors?</p>
            </div>
        </>
    )
}

function slide5() {
    return(
        <>
            <h3 className="slideHeading">Benefits of Emotions</h3>
            <p>Emotions, even when intense, can be very beneficial. And many people have more intense emotions that most. People with intense emotions are often passionate about people, causes, beliefs, and so on. There are times when emotion mind is the cause of great feats of courage or compassion when, if reason were there at all, a person would not overcome great danger or act on great love.</p>
            <div className="slideImage">
                <img src="/pictures/ekaterina-shakharova-L4nwL3195U0-unsplash.jpg" alt="Photo by Ekaterina Shakharova on Unsplash" />
            </div>
        </>
    )
}

function slide6() {
    return(
        <>
            <h3 className="slideHeading">Problems with Emotions</h3>
            <p>Problems occur when emotions are ineffective and control us. This occurs when the results are positive in the short term, but highly negative in the long term, or when the emotional experience itself does not fit the facts of our lives and is very painful, or when it leads to other painful states and events (e.g. anxiety and depression)</p>
            <div className="slideImage">
                <img src="/pictures/francisco-gonzalez-M8UEJd58GcE-unsplash.jpg" alt="Photo by Francisco Gonzalez on Unsplash" />
            </div>
        </>
    )
}

function slide7() {
    return(
        <>
            <h3 className="slideHeading">Different Effects of Emotions</h3>
            <p>Sometimes people become so emotional, they shut down and act like robots. They may dissociate and appear very calm, or they may isolate themselves. They appear cool, deliberate, and reasonable, but their behavior is really under the control of overwhelming emotions that they would experience if they let go and relaxed. This is emotion mind: emotions are in control.</p>
            <div className="slideImage">
                <img src="/pictures/emilipothese-R4WCbazrD1g-unsplash.jpg" alt="Photo by Emilipothèse on Unsplash" />
            </div>
        </>
    )
}

function slide8() {
    return(
        <>
            <h3 className="slideHeading">Strong Emotion vs. Emotion Mind</h3>
            <p>Don't confuse being highly emotional with emotion mind. <span className="bold">Emotion mind occurs when emotions are in control at the expense of reason.</span> People often have intense emotions <span className="bold">without</span> losing control.</p>
            <div className="slideImage">
                <img src="/pictures/jonathan-borba-RWgE9_lKj_Y-unsplash.jpg" alt="Photo by Jonathan Borba on Unsplash" />
            </div>
        </>
    )
}

function slide9() {
    return(
        <>
            <h3 className="slideHeading">Reasonable Mind</h3>
            <p>Reasonable mind is the extreme of reason. It is reason that is not balanced by emotions and values. It is the part of you that plans and evaluates things logically. When completely in reasonable mind, you are ruled by facts, reason, logic, and pragmatics. Emotions, such as love, guilt, or grief, are irrelevant.</p>
            <div className="slideImage">
                <img src="/pictures/nino-maghradze-0f8P-Y4Ib5U-unsplash.jpg" alt="Photo by Nino Maghradze on Unsplash" />
            </div>
        </>
    )
}

function slide10() {
    return(
        <>
            <h3 className="slideHeading">Benefits of Reason</h3>
            <p>Reason can be very beneficial. Without it, we could not solve problems. It is your cool part. But when you are completely in reasonable mind, you are ruled by facts, logic, and reason. Values and feelings are not important.</p>
            <div className="slideImage">
                <img src="/pictures/ksenia-W0YSKWCKDS8-unsplash.jpg" alt="Photo by Ksenia on Unsplash" />
            </div>
        </>
    )
}

function slide11() {
    return(
        <>
            <h3 className="slideHeading">Problems with Reason</h3>
            <p>Reasonable mind is cold and dismissive of emotions, needs, desires, and passions. For example, a task-focused person attending only to what must be done next and igoring even loved ones who want at least a nod hello is in reasonable mind. It is hard to make and keep friends if you are only in reasonable mind. Relationships require emotional responses and sensitivity to others' emotions. When you ignore your own emotions and treat other people's emotions as unimportant, it is hard to maintain relationships.</p>
            <div className="thinkAboutIt">
                <h3><FaLightbulb /> Think About It!</h3>
                <p>When other people say "If you could just think straight, you would be all right" they mean "If you could be reasonable, you would do OK." Are there times in your life when people have said this or something similar to you? Or when you have said it to yourself? What are the pros and cons of emotion and reason?</p>
            </div>
        </>
    )
}

function slide12() {
    return(
        <>
            <h3 className="slideHeading">Wise Mind as the Synthesis of Opposites</h3>
            <p>Wise mind is the integration of opposites: emotion mind and reasonable mind. You cannot overcome emotion mind with reasonable mind. Nor can you create emotions with reasonableness. You must go within and bring the two together.</p>
            <br />
            <p><span className="bold">Everyone has wise mind, even if you have never experienced it.</span> Also, no one is in wise mind all the time.</p>
            <div className="slideImage">
                <img src="/pictures/rishabh-dharmani-x0gw9YspcR4-unsplash.jpg" alt="Photo by Rishabh Dharmani on Unsplash" />
            </div>
        </>
    )
}

function slide13() {
    return(
        <>
            <h3 className="slideHeading">It Is Not Always Easy to Find Wise Mind</h3>
            <p>Emotion mind and wise mind both have the quality of "feeling" something to be the case. The intensity of emotions can generate experiences of certainty that mimic the stable, cool certainty of wisdom.</p>
            <div className="thinkAboutIt">
                <h3><FaLightbulb /> Think About It!</h3>
                <p>How can you tell the difference between emotion mind and wise mind? If intense emotion is obvious, suspect emotion mind. For example, when we are angry we often think we are right about everything we think. Give it time; if certainty remains when you are feeling calm, suspect wise mind.</p>
            </div>
        </>
    )
}

function slide14() {
    return(
        <>
            <h3 className="slideHeading">Wise Mind Is...</h3>
            <p><span className="bold">Wise mind is the part of each person that can know and experience the truth.</span> It is where the person knows something in a centered way.</p>
            <br />
            <p><span className="bold">Wise mind is similar to intuition.</span> It is a kind of knowing that is more than reasoning and more than what is observed directly. It has qualities of direct experience, immediate knowing, understaning an event without having to analyze it intellecutally, and feelings of deepening coherence.</p>
            <br />
            <p><span className="bold">Wise mind is free of conflict.</span> Making a wise action is almost effortless, even when it is difficult beyond words. Wise mind has a certain peace.</p>
            <br />
            <p>Wisdom, wise mind, or wise knowing depends upon integration of all ways of knowing: knowing by <span className="bold">observing,</span> knowing by <span className="bold">analyzing logically,</span> knowing by what we <span className="bold">experience,</span> knowing by what we <span className="bold">do,</span> and knowing by <span className="bold">intuition.</span></p>
        </>
    )
}

function slide15() {
    return(
        <>
            <h3 className="slideHeading">Finding Wise Mind Consistently</h3>
            <p>Learning to find wise mind is like searching for a new channel on the radio. First you hear a lot of static, but over time the signal gets louder. You will learn to know right where the station is, and the lyrics become part of you so that you can access them automatically, just like you know the lyrics to your favorite song.</p>
            <br />
            <p>At this point, it's important to point out that the goal of mindfulness is not to make life all effort and work, work, work. The idea is to practice skills enough so that life gets easier and better. Wise mind is the road to that: In wise mind, it is easier to act in our own best interests instead of being controlled by our moods and emotions.</p>
            <div className="slideImage">
                <img src="/pictures/frank-albrecht-EOG8BeJfz4I-unsplash.jpg" alt="Photo by Frank Albrecht on Unsplash" />
            </div>
        </>
    )
}