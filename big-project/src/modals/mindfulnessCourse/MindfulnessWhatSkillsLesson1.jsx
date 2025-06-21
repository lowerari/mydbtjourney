import React, { useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import { MdOutlineScience } from "react-icons/md";
import { FaLightbulb } from "react-icons/fa";
import axios from "axios";

export default function IntroMindfulnessLesson1({ setMindfulnessWhatSkillsLesson1IsOpen, setMindfulnessWhatSkillsLesson1PracticeIsActive }) {
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
        slide16,
    ];

    const handleUpdateCourseProgress = async () => {
        const token = localStorage.getItem('token');
        try {
            const response = await axios.patch('http://127.0.0.1:8000/update_course', {
                mindfulness_what_skills_lesson_1_practice : true
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
                    <button className="closeBtn" onClick={() => setMindfulnessWhatSkillsLesson1IsOpen(false)}>
                        <RiCloseLine style={{ marginBottom: "-3px" }}/>
                    </button>

                    <div className="modalContent">
                        <div className="progressBar">
                            <div className="progressFill" style={{ width: `${(currentSlide + 1) * (100 / slides.length)}%` }}></div>
                        </div>
                        <div className="slide">
                            {React.createElement(slides[currentSlide])}
                        </div>
                        <div className="slideNav">
                            {currentSlide !== 0 && <button className="prevButton" onClick={goToPreviousSlide}>Previous</button>}
                            {currentSlide === 0 && <div className="invisoDiv"></div>}
                            {currentSlide === slides.length - 1 && <button className="nextButton" onClick={() => {
                                setMindfulnessWhatSkillsLesson1IsOpen(false);
                                setMindfulnessWhatSkillsLesson1PracticeIsActive(true);
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
            <h3 className="slideHeading">The Mindfulness "What" and "How" Skills</h3>
            <p>There are three mindfulness "what" skills and three mindfulness "how" skills.</p>
            <br />
            <p>"What" skills are what we do when practicing mindfulness, and "how" skills are how we do it.</p>
            <br />
            <p>Each "what" skill is a distinct activity; that is to say, they are practiced one at a time. You cannot do them simultaneously. On the other hand, "how" skills can be applied all at once.</p>
            <br />
            <p>In this lesson, we will be focusing on the "what" skill: Observe.</p>
            <div className="slideImage">
                <img src="/pictures/frederick-marschall-bL8MDg0p_nI-unsplash.jpg" alt="Photo by Frederick Marschall on Unsplash" />
            </div>
        </>
    )
}

function slide2() {
    return(
        <>
            <h3 className="slideHeading">We Observe to See What Is</h3>
            <p>Observing is like walking across a room full of furniture with your eyes open instead of closed. You can walk across the room either way, however, you will be more effective with your eyes open. If you don't like the furniture in your room, you can close your eyes, but ultimately it's not very effective. You keep running into the furniture.</p>
            <br />
            <p>We walk through life with our eyes closed sometimes, but opening our eyes and actually observing what is there can be very helpful. Observing bring us into contact with the real, factual, present moment. That's where we live. We can't experience the past, we can't experience the future, and so if we are living in the past or future we are not really living. Observing is about learning to feel fully alive in the here and now.</p>
            <div className="thinkAboutIt">
                <h3><FaLightbulb /> Think About It!</h3>
                <p>Observing is the opposite of multitasking. For example, think about multitasking while you drive. How might multitasking interfere with seeing and responding to what is right in front of you?</p>
            </div>
        </>
    )
}

function slide3() {
    return(
        <>
            <h3 className="slideHeading">We Observe to Get Information So That We Can Change</h3>
            <p>Research shows that information coming into our senses will help us change in desired ways. For example:</p>
            <ul>
                <li>Weighing ourselves consistently and seeing our weight regularly will often make our weight go down (if we feel too fat) or up (if we feel too thin).</li>
                <li>Filling out DBT diary entries is known to be reactive; that is, it can change the behavior it is measuring.</li>
            </ul>
            <div className="thinkAboutIt">
                <h3><FaLightbulb /> Think About It!</h3>
                <p>Reflect on your own tendencies to avoid reality, particularly to avoid even noticing reality. What are the consequences of such avoidance?</p>
            </div>
        </>
    )
}

function slide4() {
    return(
        <>
            <h3 className="slideHeading">Observing: What to Do</h3>
            <p>Notice what you are experiencing through your eyes, ears, nose, skin, and tongue. You observe the world outside yourself through your five senses: seeing, hearing, smelling, tasting, and touching. You also observe the world inside yourself through sensing your thoughts, emotions, and internal body sensations.</p>
            <br />
            <p>What you sense depends on where you focus your attention. Ultimately, you want to be able to observe events occurring within your mind and body, such as thoughts, sensations, and emotions, and events occurring outside your body.</p>
            <div className="slideImage">
                <img src="/pictures/marina-vitale-t809JJ6r9KA-unsplash.jpg" alt="Photo by Marina Vitale on Unsplash" />
            </div>
        </>
    )
}

function slide5() {
    return(
        <>
            <h3 className="slideHeading">Sense Your Mind</h3>
            <p>Observing your thoughts can sometimes be very difficult. This is because your thoughts about events may often seem to you like facts instead of thoughts. Many people have never really tried to just sit back and watch their thoughts. When you observe your own mind, you will see that your thoughts (and also your emotions and bodily sensations) never stop following one another. From morning till night, there is an uninterrupted flow of events inside your mind; you might notice thoughts, emotions, and other bodily sensations. As you watch, these will come and go like clouds in the sky. This is what thoughts and feelings do inside the mind when just observed, they come and go.</p>
            <br />
            <p><span className="bold">Some people are terrified to look at their own minds.</span> For these individuals, it may be more effective to start observing things outside their bodies first.</p>
            <br />
            <p><span className="bold">Some people can't stop analyzing their own minds.</span> For these individuals, it might be harder to start by observing their own minds, particularly if they are very used to analyzing themselves. In contrast, here it is important in observing the mind to adopt a curious attitude and simply watch what goes through the mind. That is, not to try to understand the mind, figure out the mind, or analyze the mind.</p>
        </>
    )
}

function slide6() {
    return(
        <>
            <h3 className="slideHeading">Pay Attention to Right Now</h3>
            <p>Mindfulness can be thought of as paying attention to present experiences on purpose. To observe, you simply step back, be alert, and notice. When you observe, it is the only thing you are doing, nothing else. Don't react, don't label, don't describe; just notice the experience. When you observe, you pay attention to direct physical sensation.</p>
            <div className="slideImage">
                <img src="/pictures/caleb-george-FmMivfgHCiM-unsplash.jpg" alt="Photo by Caleb George on Unsplash" />
            </div>
        </>
    )
}

function slide7() {
    return(
        <>
            <h3 className="slideHeading">Observe by Controlling Attention</h3>
            <p>When you can control your attention, you can control your mind. There are two types of attending: focusing the mind and opening the mind.</p>
            <br />
            <p>"Focusing the mind" is the practice of concentrating attention on specific activities, objects, or events. A common example in mindfulness practice is observing your breath.</p>
            <br />
            <p>In "opening the mind," instead of focusing on specific activities, objects, or events, we focus our attention on observing or watching whatever comes into awareness as it comes into and goes out of awareness. It is noticing thoughts, emotions, and sensations that enter awareness without holding onto or pursuing them. The object in opening the mind is to observe the flow of moment-to-moment experience.</p>
        </>
    )
}

function slide8() {
    return(
        <>
            <h3 className="slideHeading">Practice Wordless Watching</h3>
            <p>Observing without describing can be very hard, and for many people it takes a lot of practice. Our minds may be in the habit of immediately adding labels to anything we observe. We hear "chirp chirp" and think "bird." We often trade observations for concepts. But when hearing "chirp chirp" we aren't actually seeing any birds. For all we know, it could be someone practicing bird calls. All we can know for sure is the sound we hear. Observing is noticing the sound "chirp chirp." That's it. In fact, jumping to label the sound as "bird" gets in the way of paying attention to the sound. No one can observe well while describing (the second "what" skill) at the same time.</p>
            <div className="slideImage">
                <img src="/pictures/boris-smokrovic-DPXytK8Z59Y-unsplash.jpg" alt="Photo by Boris Smokrovic on Unsplash" />
            </div>
        </>
    )
}

function slide9() {
    return(
        <>
            <h3 className="slideHeading">Observe with a "Nonstick Mind"</h3>
            <p>Allowing emotions, images, and sensations to come and go is central to mindful observing. A "nonstick mind" is important in practicing opening the mind, and also in practicing focusing the mind. In both practices, thoughts, emotions, and images will come up in the mind. The idea is to let all experiences (feelings, thoughts, and images) flow out of the mind, rather than either grabbing experiences or holding onto them, or pushing experiences away.</p>
            <br />
            <p>Observing inside your mind can be like sitting on a hill and watching a train go by. Some train cars are thoughts or emotions, strung together. They come into view, they go out of view. Watch, observe, but do not get on the train.</p>
            <div className="slideImage">
                <img src="/pictures/balazs-busznyak-El5zuQAtfeo-unsplash.jpg" alt="Photo by Balazs Busznyak on Unsplash" />
            </div>
        </>
    )
}

function slide10() {
    return(
        <>
            <h3 className="slideHeading">Avoid Pushing Away Experiences</h3>
            <p>"Experiential avoidance" is trying to suppress or avoid experiencing what is happening in the present. Some individuals may be afraid to observe their thoughts. Some thoughts are scary, and others may be thoughts a person would like not to have. If worried about any particular thought, a person may try to get rid of it, to shut it out of the mind.</p>
            <div className="thinkAboutIt">
                <h3><MdOutlineScience /> Research Point!</h3>
                <p>However, there is scientific evidence that trying to shut out thoughts is the best way to keep having them. The harder a person tries to shut them out, the more they will pop back into the mind. The best way to get rid of unwanted thoughts is to step back and simply observe them. They will go away by themselves. The attempt to avoid or suppress our own experiences is associated with higher, not lower, emotion dysregulation.</p>
            </div>
        </>
    )
}

function slide11() {
    return(
        <>
            <h3 className="slideHeading">Avoid Holding on to Experiences</h3>
            <p>"Experiential hunger" is trying to hold on to positive experiences. We try to create positive experiences at the expense of noticing what is currently in our lives. People often overindulge in drugs, alcohol, sex, fast driving, and other exciting activities, seeking an emotional high or thrill.</p>
            <br />
            <p>We may try to hold on to a sense of security or a sense of being loved. Holding on to damaging relationships, or being overly demanding of those we love, are often efforts to hold on to a false sense of safety and security.</p>
            <br />
            <p>It is even possible to become overly "addicted" to spiritual experiences. Mindfulness meditation and/or prayer can become efforts to have "spiritual highs." Individuals constantly seeking reassurance or frequently demanding proof of unwavering love fall into the same category. When this happens, the individuals can become like ocean fish swimming around and around, constantly searching for water.</p>
        </>
    )
}

function slide12() {
    return(
        <>
            <h3 className="slideHeading">Observe with a "Beginner's Mind"</h3>
            <p>Each moment in the universe is completely new. This one moment, right now, has never occurred before. In "beginner's mind" we focus on noticing the experience of each moment, noticing that each moment is new and unique. It is easy to forget this. We forget to observe and notice the moment. A new moment may be very similar to a previous moment. We may find ourselves saying "same old, same old," but actually everything is changing, is constantly new.</p>
            <br />
            <p>Nothing has ever been in your mind that has not gone away. If you just watch your mind, thoughts, images, emotions, and sensations all eventually go away. It is a fascinating thing. If you just sit there and look at them, they go away. When you try to get rid of thoughts, they keep coming back.</p>
            <div className="slideImage">
                <img src="/pictures/jonathan-borba-CgWTqYxHEkg-unsplash.jpg" alt="Photo by Jonathan Borba on Unsplash" />
            </div>
        </>
    )
}

function slide13() {
    return(
        <>
            <h3 className="slideHeading">Practice, Practice, Practice</h3>
            <p>Learning to observe your mind takes patience and practice. It means training your mind to pay attention. It may seem impossible to get your attention under control, <span className="bold">but it is possible.</span> It just takes practice, practice, and more practice.</p>
            <div className="slideImage">
                <img src="/pictures/michel-catalisano-OZDmI-vO7Io-unsplash.jpg" alt="Photo by Michel Catalisano on Unsplash" />
            </div>
        </>
    )
}

function slide14() {
    return(
        <>
            <h3 className="slideHeading">Keep Bringing the Mind Back to Observing</h3>
            <p>Observe by bringing your mind back to observing over and over, each time you notice that you are distracted. Most people, when they practice observing, find that their minds frequently and sometimes very quickly start thinking about something and before they know it, they become lost in thoughts, unaware of the present moment, no longer observing. Whenever your attention is drawn away from observing and awareness, gently but resolutely push distractions to the side as if you are dividing clouds in the sky, and return, single-mindedly, to the object of attention. <span className="bold">The idea here is to observe being distracted,</span> that is, to observe yourself as you become aware that you were distracted. Notice, if you can, when you start to become distracted. Practice noticing distractions.</p>
        </>
    )
}

function slide15() {
    return(
        <>
            <h3 className="slideHeading">Observing Requires Controlling Action</h3>
            <p>The first rule of observing is to notice the urge to quit observing. One of the first things that happens when people start practicing observing is that they want to quit. They get bored, tired, they experience painful emotions, their bodies start hurting, they remember something else important, and so on.</p>
            <br />
            <p>You don't have to act on whatever comes into your mind. You might observe you feel sleepy. Notice it, but don't fall asleep. Instead, bring your attention back to whatever you are observing. You might notice you are hungry, but don't get something to eat right now. Notice that you are hungry, and bring your attention back.</p>
            <div className="thinkAboutIt">
                <h3><FaLightbulb /> Think About It!</h3>
                <p>What do you think about your own ability to stay focused? What strategies could you use to increase your ability to continue observing in the face of temptations to quit?</p>
            </div>
        </>
    )
}

function slide16() {
    return(
        <>
            <h3 className="slideHeading">Observing Can Be Very Painful at Times</h3>
            <p>The trouble with observing is that people may wind up seeing things they do not want to see. This can be hard. In particular, those with histories of trauma may find observing very scary. They are afraid to watch what goes through their minds. Some are worried that thoughts and images that ordinarily cause enormous anxiety will race through their minds. Others are afraid of thoughts and images of the past, particularly when these set off intense emotions like sadness or anger. However, there is research showing that control of attention can reduce rumination.</p>
            <br />
            <p>Remember to step back within yourself, not outside yourself, to observe. Observing is not dissociating. If you have trouble staying inside, try imagining that the place you go outside yourself is a flower. The flower is connected to your center by a long stem. Your center is the root of the flower. Imagine coming down the stem to the root, and observe at the root.</p>
        </>
    )
}