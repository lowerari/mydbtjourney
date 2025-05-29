import React, { useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import { MdOutlineScience } from "react-icons/md";
import { FaLightbulb } from "react-icons/fa";
import axios from "axios";

export default function IntroMindfulnessLesson1({ setIntroMindfulnessLesson1IsOpen, setIntroMindfulnessLesson1PracticeIsActive }) {
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
        slide15,
        slide16
    ];

    const handleUpdateCourseProgress = async () => {
        const token = localStorage.getItem('token');
        try {
            const response = await axios.patch('http://127.0.0.1:8000/update_course', {
                intro_mindfulness_lesson_1_practice : true
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
                        <h5 className="heading">Goals of Mindfulness</h5>
                    </div>
                    <button className="closeBtn" onClick={() => setIntroMindfulnessLesson1IsOpen(false)}>
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
                                setIntroMindfulnessLesson1IsOpen(false);
                                setIntroMindfulnessLesson1PracticeIsActive(true);
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
            <h3 className="slideHeading">Welcome to the Mindfulness Course!</h3>
            <p>In this course, you will be learning all about mindfulness; what it means, what it&apos;s used for, the different areas it covers, and many different ways to practice it. Let&apos;s get started with mindfulness goals!</p>
            <div className="slideImage">
                <img src="/pictures/photo-1611800065908-233b597db552.avif" alt="Photo by Shashi Chaturvedula on Unsplash" />
            </div>
        </>
    )
}

function slide2() {
    return(
        <>
            <h3 className="slideHeading">Reduce Suffering and Increase Happiness</h3>
            <p>The first goal of practicing mindfulness is to reduce your suffering and increase your happiness:</p>
            <ul>
                <li>Reduce pain, tension, and stress.</li>
                <li>Increase joy and happiness.</li>
                <li>Improve physical health, relationships, and distress tolerance.</li>
                <li>And more!</li>
            </ul>
            <div className="thinkAboutIt">
                <h3><MdOutlineScience /> Research Point!</h3>
                <p>Evidence suggests that the regular practice of mindfulness has many beneficial effects, including:</p>
                <ul>
                    <li>Increased emotional regulation</li>
                    <li>Decreased distractive and ruminative thoughts</li>
                    <li>Enhanced immune response and reduction of pain symptoms</li>
                    <li>Decrease depression, anxiety, anger, irritability, and much more!</li>
                </ul>
                <p>Most of these effects were seen in individuals who practiced mindfulness every day for eight or more weeks. The longer and more faithfully you practice, the more benefits you&apos;ll see. However, even very brief mindfulness practice has proven benefits!</p>
            </div>
        </>
    )
}

function slide3() {
    return(
        <>
            <h3 className="slideHeading">Increase Control of Your Mind</h3>
            <p>To a certain extent, being in control of your mind is being in control of your attention—that is, what you pay attention to and how long you pay attention to it.</p>
            <br />
            <p>In many ways, mindfulness practice is the practice of controlling your attention. With a lot of practice, you get better at it. <span className="bold">Mindfulness reduces automaticity of attentional processes.</span></p>
            <br />
            <p>Often we react to thoughts and images as if they are facts. We get entangled in the events in the mind and cannot tell the difference between a fact in the world and thoughts or images of the world. Mindfulness, practiced often and diligently, can <span className="bold">improve your skills of seeing the difference between facts and images and thoughts about facts.</span></p>
            <br />
            <p>Mindfulness is the practice of observing what is going on inside yourself as well as outside, without doing anything to change it. Thus, in some ways, you can consider it as a practice of observing things without reacting to or trying to change them. The ability to experience without reacting is essential in many situations. Mindfulness practice improves your ability to be less immediately reactive to everyday situations. <span className="bold">It gives you a chance to take whatever time is needed before you react</span></p>
        </>
    )
}

function slide4() {
    return(
        <>
            <h3 className="slideHeading">Experience Reality as It Is</h3>
            <p>If you walk across a dark room, is it better to see the furniture or not? Is it easier with the light on or with it off? A fundamental goal of mindFULness is to reduce mindLESSness—both of what is going on around us, and of what we ourselves are doing, thinking, and feeling.</p>
            <br />
            <p>The idea is that if we truly experience each present moment of our lives—if we let go of mental constructs, ideas, and judgments about what is—then we will ultimately see that our worst imaginings of reality are not true. We will at some point see that life itself is unceasing change, and also that clinging to any moment of reality is ultimately not in our best interests.</p>
            <div className="slideImage">
                <img src="/pictures/mike-labrum-fvl4b1gjpbk-unsplash.jpg" alt="Photo by Mike Labrum on Unsplash" />
            </div>
        </>
    )
}

function slide5() {
    return(
        <>
            <h3 className="slideHeading">Be Present in Your Own Life</h3>
            <p>Mindfulness is the practice of being in the present. It is being present to your own life. Many people find at some point that their life is whizzing by and they are missing a lot of it. Children are growing up; friends that we care about are moving away; we are getting older. It is easy to be so focused on distractions, the past, or the future that we actually miss many positive things in our lives.</p>
            <br />
            <p><span className="bold">Example:</span> If you are walking in the forest, and you slightly change directions without knowing this, it may not take long before you are really far from where you were originally going.</p>
            <div className="thinkAboutIt">
                <h3><MdOutlineScience /> Research Point!</h3>
                <p>Being present in our lives is the opposite of avoiding our lives and trying to avoid or suppress our experiences:</p>
                <ul>
                    <li>Suppression increases the frequency of the very thoughts we are trying to suppress.</li>
                    <li>Avoidance has no permanent effect on our well-being. It may temporarily decrease painful emotions, but when we avoid and escape painful events now, they will be painful in the future.</li>
                    <li>Escape often causes more problems and rarely solves problems.</li>
                </ul>
            </div>
        </>
    )
}

function slide6() {
    return(
        <>
            <h3 className="slideHeading">Be Present to Others</h3>
            <p>Mindfulness is focusing on the present moment and on the people we are with now. It is very easy to be around people but far away—thinking about something or someone else, looking for someone else to talk to, wishing we were somewhere else, planning what we will do next, dreaming about other things, focusing on our pain or our suffering. We are not present to the people around us. Others, of course, often notice this. They may eventually pull away from us; it is hard for them to be ignored in this way.</p>
            <div className="slideImage">
                <img src="/pictures/priscilla-du-preez-cIfLUEZYLVg-unsplash.jpg" alt="Photo by Priscilla Du Preez on Unsplash" />
            </div>
        </>
    )
}

function slide7() {
    return(
        <>
            <h3 className="slideHeading">Connection to the Universe</h3>
            <p>Everyone and everything in the universe is connected. As physicists would point out, the universe is a network of interconnected atoms, cells, and particles that are constantly moving and changing. We touch the air around us that touches everything else around us, and on and on. Each move that we make interacts with the entire universe at some point. It is this point that we need to get across. However, knowing that we are interconnected is one thing; experiencing it is another. Many people feel isolated and alone. Their experience of themselves is as outsiders. But once we see that the world and universe is an interconnected network, we can see that there is really no outside or inside. Thus our experience is built on the delusion of separation. Mindfulness is aimed at enhancing our experience of the universe as it is, without delusion or distortion.</p>
            <div className="slideImage">
                <img src="/pictures/greg-rakozy-oMpAz-DN-9I-unsplash.jpg" alt="Photo by Greg Rakozy on Unsplash" />
            </div>
        </>
    )
}

function slide8() {
    return(
        <>
            <h3 className="slideHeading">Essential &quot;Goodness&quot;</h3>
            <p>Many individuals experience themselves as bad, unworthy, or somehow defective. Mindfulness is the practice of seeing ourselves as we are—ultimately simply ourselves and inherently neither good nor bad, but rather just as we are. From this perspective, all things in the universe, including ourselves, are good. (Although the use of the term “goodness” may seem to contradict the notion that “good” and “bad” are concepts in the mind of the observer, we cannot deny the use of “good” as an adjective and “goodness” as a term to denote a quality of something. Thus it is important not to move too far into a rigid notion that we can never use the term “good,” as in saying “Good boy” to a dog when he does something he was taught, or “Good job” to a colleague at work. Once we have given up “good” and “bad” as judgments, we can revert to using them as shorthand comments about what is observed.)</p>
        </>
    )
}

function slide9() {
    return(
        <>
            <h3 className="slideHeading">Essential Validity</h3>
            <p>“Validity” here means that each person has inherent significance which cannot be taken away or discounted. Each person’s voice and needs warrant being heard and taken seriously. Each person’s point of view is important</p>
            <div className="thinkAboutIt">
                <h3><FaLightbulb />Think About It!</h3>
                <p>Consider the following:</p>
                <ul>
                    <li>Your own experiences of being connected to the universe, as well as feeling like an outsider.</li>
                    <li>Your own experiences of feeling bad or unworthy, or of not being taken seriously.</li>
                </ul>
            </div>
        </>
    )
}

function slide10() {
    return(
        <>
            <h3 className="slideHeading">Universal Characteristics of Mindfulness</h3>
            <p>There are three characteristics of mindfulness common to all forms of practice:</p>
            <ol>
                <li><span className="bold">Intentionally Living with Awareness in the Present Moment</span></li>
                <p>This means waking up from automatic or rote behaviors to participate and be present to our own lives.</p>
                <li><span className="bold">Without Judging or Rejecting the Moment</span></li>
                <p>This means noticing consequences, as well as discerning helpfulness and harmfulness—but letting go of evaluating, avoiding, suppressing, or blocking the present moment.</p>
                <li><span className="bold">Without Attachment to the Moment</span></li>
                <p>This means attending to the experience of each new moment, rather than ignoring the present by clinging to the past or grasping for the future.</p>
            </ol>
        </>
    )
}

function slide11() {
    return(
        <>
            <h3 className="slideHeading">Mindfulness Skills</h3>
            <p>“Mindfulness skills” are the specific behaviors that, put together, make up mindfulness.</p>
        </>
    )
}

function slide12() {
    return(
        <>
            <h3 className="slideHeading">Mindfulness Practice</h3>
            <p>“Mindfulness practice” is the intentional practice of mindfulness and mindfulness skills. There are many methods of mindfulness practice.</p>
            <br />
            <p>Mindfulness can be practiced at any time, anywhere, while doing anything. Intentionally paying attention to the moment, without judging it or holding on to it, is all that is needed.</p>
        </>
    )
}

function slide13() {
    return(
        <>
            <h3 className="slideHeading">Meditation</h3>
            <p>The similarities in meditation methods are much greater than the differences. Similarities are as follows:</p>
            <ul>
                <li><span className="bold">Instructions to focus attention.</span></li>
                <li><span className="bold">Emphasis on observing nonjudgmentally, without attachment or avoidance.</span></li>
                <li><span className="bold">Emphasis on letting go of intellectual analyses.</span></li>
                <li><span className="bold">Letting the word or the practice do the work.</span></li>
                <li><span className="bold">Carrying the practice into everyday life.</span></li>
            </ul>
        </>
    )
}

function slide14() {
    return(
        <>
            <h3 className="slideHeading">Contemplative or “Centering” Prayer</h3>
            <p>Contemplative or “centering” prayer is a Christian mindfulness practice. Similar to meditation as described before, it emphasizes selecting a word to focus on. The difference is that contemplative prayer emphasizes a sacred word, interior silence, and the relationship with God within. (See the work of Thomas Keating.)</p>
        </>
    )
}

function slide15() {
    return(
        <>
            <h3 className="slideHeading">Mindfulness Movement</h3>
            <p>Mindfulness movement has many forms:</p>
            <ul>
                <li><span className="bold">Dance</span> (all religions; indigenous cultures)</li>
                <li><span className="bold">Martial Arts</span> (primarily Eastern religions)</li>
                <li><span className="bold">Walking or hiking with focused awareness on walking/moving and on the natural world</span></li>
                <li><span className="bold">Ritual music making</span> (e.g., drumming)</li>
            </ul>
            <div className="slideImage">
                <img src="/pictures/david-hofmann-klWtuMJE8Ho-unsplash.jpg" alt="Photo by David Hofmann on Unsplash" />
            </div>
        </>
    )
}

function slide16() {
    return(
        <>
            <h3 className="slideHeading">The Importance of Practicing Mindfulness Skills</h3>
            <p>Mindfulness skills require practice, practice, practice. <span className="bold">Mindfulness practice can be very difficult at first.</span> Focusing the mind can take a lot of energy. Distractions may be frequent, and it is very easy to find that a few minutes after you started practicing your mindfulness skills, you have fallen out of it and are doing something else.</p>
            <div className="thinkAboutIt">
                <h3><FaLightbulb />Think About It!</h3>
                <p>Consider the crucial importance of behavioral practice in learning any new skill. Behavioral practice includes practicing control of one’s mind, attention, overt behavior, body, and emotions. Can you learn without practice?</p>
            </div>
        </>
    )
}