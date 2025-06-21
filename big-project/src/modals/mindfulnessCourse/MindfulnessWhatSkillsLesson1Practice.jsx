import React, { useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import axios from "axios";
import { BiSolidDice6 } from "react-icons/bi";

export default function IntroMindfulnessLesson1Practice({ setMindfulnessWhatSkillsLesson1PracticeIsOpen, }) {
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
        slide9,
        slide10,
        slide11,
        slide12
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

    // const handleUpdateCourseProgress = async () => {
    //     const token = localStorage.getItem('token');
    //     try {
    //         const response = await axios.patch('http://127.0.0.1:8000/update_course', {
    //             intro_mindfulness_lesson_2_quiz : true
    //         }, {
    //             headers: {
    //                 'Authorization': `Token ${token}`
    //             }
    //         })
    //         console.log(response.data);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }


    return(
        <>
            <div className="centered">
                <div className="modal">
                    <div className="modalHeader">
                        <h5 className="heading">Observing: Practice</h5>
                    </div>
                    <button className="closeBtn" onClick={() => setMindfulnessWhatSkillsLesson1PracticeIsOpen(false)}>
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
                                setMindfulnessWhatSkillsLesson1PracticeIsOpen(false);
                                //setIntroMindfulnessLesson2QuizIsActive(true);
                                //handleUpdateCourseProgress();
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
            <h3 className="slideHeading">Ideas for Practicing Observing</h3>
            <p>The following slides contain different ideas for practicing observing. Check the ideas that interest you, and either take some time to practice them now, or write them down to come back to them another time. Remember: Observing is bringing your mind back to the sensations of your body and mind. If it's difficult at first, don't worry. Just keep practicing and it will get easier with time.</p>
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
            <p><span className="bold">Observe with your eyes:</span></p>
            <div className="checkboxes">
                <label className="checkboxContainer" htmlFor="watchCloudsCheckbox">
                    <input 
                        type="checkbox" 
                        name="watchCloudsCheckbox" 
                        id="watchCloudsCheckbox" 
                        checked={formData.watchCloudsCheckbox || false}
                        onChange={handlechange}
                    />
                    <span className="checkmark"></span>
                    <p>
                    Lie on the ground and watch the clouds go by.
                    </p>
                </label>
        
                <label className="checkboxContainer" htmlFor="noticeNatureCheckbox">
                    <input 
                        type="checkbox" 
                        name="noticeNatureCheckbox" 
                        id="noticeNatureCheckbox"
                        checked={formData.noticeNatureCheckbox || false}
                        onChange={handlechange} 
                    />
                    <span className="checkmark"></span>
                    <p>
                    Walk slowly, stop somewhere with a view, and notice flowers, trees, and nature itself.
                    </p>
                </label>

                <label className="checkboxContainer" htmlFor="watchPeopleCheckbox">
                    <input 
                        type="checkbox" 
                        name="watchPeopleCheckbox" 
                        id="watchPeopleCheckbox"
                        checked={formData.watchPeopleCheckbox || false}
                        onChange={handlechange} 
                    />
                    <span className="checkmark"></span>
                    <p>
                    Sit outside. Watch who and what goes by in front of you, without following them with your head or eyes.
                    </p>
                </label>

                <label className="checkboxContainer" htmlFor="noticeFacialExpressionsCheckbox">
                    <input 
                        type="checkbox" 
                        name="noticeFacialExpressionsCheckbox" 
                        id="noticeFacialExpressionsCheckbox" 
                        checked={formData.noticeFacialExpressionsCheckbox || false}
                        onChange={handlechange}
                    />
                    <span className="checkmark"></span>
                    <p>
                    Notice the facial expressions and movements of another person. Refrain from labeling another person's emotions or thoughts.
                    </p>
                </label>

                <label className="checkboxContainer" htmlFor="noticeFacialFeaturesCheckbox">
                    <input 
                        type="checkbox" 
                        name="noticeFacialFeaturesCheckbox" 
                        id="noticeFacialFeaturesCheckbox" 
                        checked={formData.noticeFacialFeaturesCheckbox || false}
                        onChange={handlechange}
                    />
                    <span className="checkmark"></span>
                    <p>
                    Notice just the eyes, lips, or hands of another person (or just one feature of an animal).
                    </p>
                </label>

                <label className="checkboxContainer" htmlFor="pickUpLeafCheckbox">
                    <input 
                        type="checkbox" 
                        name="pickUpLeafCheckbox" 
                        id="pickUpLeafCheckbox" 
                        checked={formData.pickUpLeafCheckbox || false}
                        onChange={handlechange}
                    />
                    <span className="checkmark"></span>
                    <p>
                    Pick up a leaf, a flower, or a petal. Look at it closely, trying to notice each detail.
                    </p>
                </label>

                <label className="checkboxContainer" htmlFor="findSomethingBeautifulCheckbox">
                    <input 
                        type="checkbox" 
                        name="findSomethingBeautifulCheckbox" 
                        id="findSomethingBeautifulCheckbox" 
                        checked={formData.findSomethingBeautifulCheckbox || false}
                        onChange={handlechange}
                    />
                    <span className="checkmark"></span>
                    <p>
                    Find something beautiful to look at, and spend a few moments contemplating it.
                    </p>
                </label>                 
            </div>
            <div className="freeAnswerQuestion">
                <p>Other:</p>
                <input 
                    type="text"
                    name="otherObservingWithEyesIdeas"
                    value={formData.otherObservingWithEyesIdeas || ""}
                    onChange={handlechange} 
                />
            </div>
        </div>
    )
}

function slide3({ formData, onFormDataChange }) {
    const handlechange = (event) => {
        const { name, value, type, checked } = event.target;
        onFormDataChange(name, type === "checkbox" ? checked : value); // If the input is a checkbox, use the 'checked' property to determine the value, otherwise use the 'value' property.
    }

    return (
        <div>
            <p><span className="bold">Observe sounds:</span></p>
            <div className="checkboxes">
                <label className="checkboxContainer" htmlFor="stopAndListenCheckbox">
                    <input 
                        type="checkbox" 
                        name="stopAndListenCheckbox" 
                        id="stopAndListenCheckbox" 
                        checked={formData.stopAndListenCheckbox || false}
                        onChange={handlechange}
                    />
                    <span className="checkmark"></span>
                    <p>
                    Stop for a moment and just listen. Listen to the textures and shapes of sounds around you. Listen to the silences between the sounds.
                    </p>
                </label>
        
                <label className="checkboxContainer" htmlFor="someoneTalkingCheckbox">
                    <input 
                        type="checkbox" 
                        name="someoneTalkingCheckbox" 
                        id="someoneTalkingCheckbox"
                        checked={formData.someoneTalkingCheckbox || false}
                        onChange={handlechange} 
                    />
                    <span className="checkmark"></span>
                    <p>
                    If someone is talking, listen to the pitch of their voice, to the smoothness or roughness of the sounds, to the clarity or mumbling of the speech, to the pauses and silences between the words.
                    </p>
                </label>

                <label className="checkboxContainer" htmlFor="listenMusicCheckbox">
                    <input 
                        type="checkbox" 
                        name="listenMusicCheckbox" 
                        id="listenMusicCheckbox"
                        checked={formData.listenMusicCheckbox || false}
                        onChange={handlechange} 
                    />
                    <span className="checkmark"></span>
                    <p>
                    Listen to music, observing each note as it comes and the spaces between the notes. Try breathing the sounds into your body and letting them flow out again on your breath.
                    </p>
                </label>                
            </div>
            <div className="freeAnswerQuestion">
                <p>Other:</p>
                <input 
                    type="text"
                    name="otherObservingSoundsIdeas"
                    value={formData.otherObservingSoundsIdeas || ""}
                    onChange={handlechange} 
                />
            </div>
        </div>
    )
}

function slide4({ formData, onFormDataChange }) {
    const handlechange = (event) => {
        const { name, value, type, checked } = event.target;
        onFormDataChange(name, type === "checkbox" ? checked : value); // If the input is a checkbox, use the 'checked' property to determine the value, otherwise use the 'value' property.
    }

    return (
        <div>
            <p><span className="bold">Observe smells around you:</span></p>
            <div className="checkboxes">
                <label className="checkboxContainer" htmlFor="noticeSmellsAroundYouCheckbox">
                    <input 
                        type="checkbox" 
                        name="noticeSmellsAroundYouCheckbox" 
                        id="noticeSmellsAroundYouCheckbox" 
                        checked={formData.noticeSmellsAroundYouCheckbox || false}
                        onChange={handlechange}
                    />
                    <span className="checkmark"></span>
                    <p>
                    Breathing in, notice the smells around you. Bring something close to your nose, and notice the smells. Take it away, then notice the smells again. Do they linger?
                    </p>
                </label>
        
                <label className="checkboxContainer" htmlFor="smellingWhenDoingCheckbox">
                    <input 
                        type="checkbox" 
                        name="smellingWhenDoingCheckbox" 
                        id="smellingWhenDoingCheckbox"
                        checked={formData.smellingWhenDoingCheckbox || false}
                        onChange={handlechange} 
                    />
                    <span className="checkmark"></span>
                    <p>
                    When eating, notice the aroma of the food; when cooking, notice the aroma of the spices and ingredients; when bathing, smell the soap and shampoo; when walking outside, notice the aroma of the air; when near flowers, bend down and "smell the roses."
                    </p>
                </label>              
            </div>
            <div className="freeAnswerQuestion">
                <p>Other:</p>
                <input 
                    type="text"
                    name="otherObservingSmellsAroundYouIdeas"
                    value={formData.otherObservingSmellsAroundYouIdeas || ""}
                    onChange={handlechange} 
                />
            </div>
        </div>
    )
}

function slide5({ formData, onFormDataChange }) {
    const handlechange = (event) => {
        const { name, value, type, checked } = event.target;
        onFormDataChange(name, type === "checkbox" ? checked : value); // If the input is a checkbox, use the 'checked' property to determine the value, otherwise use the 'value' property.
    }

    return (
        <div>
            <p><span className="bold">Observe taste and the act of eating:</span></p>
            <div className="checkboxes">
                <label className="checkboxContainer" htmlFor="putSomethingInYourMouthCheckbox">
                    <input 
                        type="checkbox" 
                        name="putSomethingInYourMouthCheckbox" 
                        id="putSomethingInYourMouthCheckbox" 
                        checked={formData.putSomethingInYourMouthCheckbox || false}
                        onChange={handlechange}
                    />
                    <span className="checkmark"></span>
                    <p>
                    Putting something in your mouth, pay attention to the taste. Keep it in your mouth, and notice all the taste sensations.
                    </p>
                </label>
        
                <label className="checkboxContainer" htmlFor="lickLolipopCheckbox">
                    <input 
                        type="checkbox" 
                        name="lickLolipopCheckbox" 
                        id="lickLolipopCheckbox"
                        checked={formData.lickLolipopCheckbox || false}
                        onChange={handlechange} 
                    />
                    <span className="checkmark"></span>
                    <p>
                    Lick a lolipop or something else. Notice just the sensation of taste.
                    </p>
                </label>

                <label className="checkboxContainer" htmlFor="eatMealCheckbox">
                    <input 
                        type="checkbox" 
                        name="eatMealCheckbox" 
                        id="eatMealCheckbox"
                        checked={formData.eatMealCheckbox || false}
                        onChange={handlechange} 
                    />
                    <span className="checkmark"></span>
                    <p>
                    Eat a meal, or even part of a meal, paying attention to the taste of each mouthful.
                    </p>
                </label>                
            </div>
            <div className="freeAnswerQuestion">
                <p>Other:</p>
                <input 
                    type="text"
                    name="otherObservingTasteIdeas"
                    value={formData.otherObservingTasteIdeas || ""}
                    onChange={handlechange} 
                />
            </div>
        </div>
    )
}

function slide6({ formData, onFormDataChange }) {
    const handlechange = (event) => {
        const { name, value, type, checked } = event.target;
        onFormDataChange(name, type === "checkbox" ? checked : value); // If the input is a checkbox, use the 'checked' property to determine the value, otherwise use the 'value' property.
    }

    return (
        <div>
            <p><span className="bold">Observe urges to do something impulsive:</span></p>
            <div className="checkboxes">
                <label className="checkboxContainer" htmlFor="urgeSurfingCheckbox">
                    <input 
                        type="checkbox" 
                        name="urgeSurfingCheckbox" 
                        id="urgeSurfingCheckbox" 
                        checked={formData.urgeSurfingCheckbox || false}
                        onChange={handlechange}
                    />
                    <span className="checkmark"></span>
                    <p>
                    "Urge surf" by imagining that your urges are a surfboard, and you are standing on the surfboard riding the waves.
                    </p>
                </label>
        
                <label className="checkboxContainer" htmlFor="urgeToAvoidCheckbox">
                    <input 
                        type="checkbox" 
                        name="urgeToAvoidCheckbox" 
                        id="urgeToAvoidCheckbox"
                        checked={formData.urgeToAvoidCheckbox || false}
                        onChange={handlechange} 
                    />
                    <span className="checkmark"></span>
                    <p>
                    Notice any urge to avoid someone or something.
                    </p>
                </label>

                <label className="checkboxContainer" htmlFor="scanForUrgeCheckbox">
                    <input 
                        type="checkbox" 
                        name="scanForUrgeCheckbox" 
                        id="scanForUrgeCheckbox"
                        checked={formData.scanForUrgeCheckbox || false}
                        onChange={handlechange} 
                    />
                    <span className="checkmark"></span>
                    <p>
                    Scan your entire body and notice the sensations. Where in the body is the urge?
                    </p>
                </label>

                <label className="checkboxContainer" htmlFor="urgeToSwallowCheckbox">
                    <input 
                        type="checkbox" 
                        name="urgeToSwallowCheckbox" 
                        id="urgeToSwallowCheckbox"
                        checked={formData.urgeToSwallowCheckbox || false}
                        onChange={handlechange} 
                    />
                    <span className="checkmark"></span>
                    <p>
                    When you are chewing your food, notice when you have the urge to swallow.
                    </p>
                </label>                
            </div>
            <div className="freeAnswerQuestion">
                <p>Other:</p>
                <input 
                    type="text"
                    name="otherObservingUrgesIdeas"
                    value={formData.otherObservingUrgesIdeas || ""}
                    onChange={handlechange} 
                />
            </div>
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
            <p><span className="bold">Observe sensations of touch:</span></p>
            <div className="checkboxes">
                <label className="checkboxContainer" htmlFor="strokeLipCheckbox">
                    <input 
                        type="checkbox" 
                        name="strokeLipCheckbox" 
                        id="strokeLipCheckbox" 
                        checked={formData.strokeLipCheckbox || false}
                        onChange={handlechange}
                    />
                    <span className="checkmark"></span>
                    <p>
                    Stroke your upper lip with your fingernail. Stop stroking, and notice how long it takes before you can no longer sense your upper lip.
                    </p>
                </label>
        
                <label className="checkboxContainer" htmlFor="noticeWalkingCheckbox">
                    <input 
                        type="checkbox" 
                        name="noticeWalkingCheckbox" 
                        id="noticeWalkingCheckbox"
                        checked={formData.noticeWalkingCheckbox || false}
                        onChange={handlechange} 
                    />
                    <span className="checkmark"></span>
                    <p>
                    When walking, notice the sensations of walking: your feet hitting the ground, your legs moving up and down. Walk slowly and notice. Walk quickly and notice.
                    </p>
                </label>

                <label className="checkboxContainer" htmlFor="noticeSittingCheckbox">
                    <input 
                        type="checkbox" 
                        name="noticeSittingCheckbox" 
                        id="noticeSittingCheckbox"
                        checked={formData.noticeSittingCheckbox || false}
                        onChange={handlechange} 
                    />
                    <span className="checkmark"></span>
                    <p>
                    When sitting, notice your thighs on the chair. Notice the curve of your knees and your back.
                    </p>
                </label>

                <label className="checkboxContainer" htmlFor="noticeTouchingCheckbox">
                    <input 
                        type="checkbox" 
                        name="noticeTouchingCheckbox" 
                        id="noticeTouchingCheckbox"
                        checked={formData.noticeTouchingCheckbox || false}
                        onChange={handlechange} 
                    />
                    <span className="checkmark"></span>
                    <p>
                    Pay attention to anything touching you. Try to feel your feet in your shoes or your body in your clothes. Feel your arms touching the chair. Notice the sensations of your hands.
                    </p>
                </label>

                <label className="checkboxContainer" htmlFor="noticeTexturesCheckbox">
                    <input 
                        type="checkbox" 
                        name="noticeTexturesCheckbox" 
                        id="noticeTexturesCheckbox"
                        checked={formData.noticeTexturesCheckbox || false}
                        onChange={handlechange} 
                    />
                    <span className="checkmark"></span>
                    <p>
                    Touch something. Notice the texture of what you feel. Try it again with another part of your body.
                    </p>
                </label>

                <label className="checkboxContainer" htmlFor="noticeChestCheckbox">
                    <input 
                        type="checkbox" 
                        name="noticeChestCheckbox" 
                        id="noticeChestCheckbox"
                        checked={formData.noticeChestCheckbox || false}
                        onChange={handlechange} 
                    />
                    <span className="checkmark"></span>
                    <p>
                    Focus your attention on the sensations in your chest, your stomach, or your shoulders.
                    </p>
                </label>

                <label className="checkboxContainer" htmlFor="noticeTightnessCheckbox">
                    <input 
                        type="checkbox" 
                        name="noticeTightnessCheckbox" 
                        id="noticeTightnessCheckbox"
                        checked={formData.noticeTightnessCheckbox || false}
                        onChange={handlechange} 
                    />
                    <span className="checkmark"></span>
                    <p>
                    Focus your attention on the place in your body where you feel tight or tense.
                    </p>
                </label>

                <label className="checkboxContainer" htmlFor="noticeBetweenEyesCheckbox">
                    <input 
                        type="checkbox" 
                        name="noticeBetweenEyesCheckbox" 
                        id="noticeBetweenEyesCheckbox"
                        checked={formData.noticeBetweenEyesCheckbox || false}
                        onChange={handlechange} 
                    />
                    <span className="checkmark"></span>
                    <p>
                    Focus your attention on the space between your eyes.
                    </p>
                </label>                
            </div>
            <div className="freeAnswerQuestion">
                <p>Other:</p>
                <input 
                    type="text"
                    name="otherObservingTouchIdeas"
                    value={formData.otherObservingTouchIdeas || ""}
                    onChange={handlechange} 
                />
            </div>
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
            <p><span className="bold">Observe your breath:</span></p>
            <div className="checkboxes">
                <label className="checkboxContainer" htmlFor="noticeBellyAndChestCheckbox">
                    <input 
                        type="checkbox" 
                        name="noticeBellyAndChestCheckbox" 
                        id="noticeBellyAndChestCheckbox" 
                        checked={formData.noticeBellyAndChestCheckbox || false}
                        onChange={handlechange}
                    />
                    <span className="checkmark"></span>
                    <p>
                    As you breathe in, allow your belly to rise. As your lungs fill with air, your chest also begins to rise. As you breathe out, notice your belly, then notice your chest. Don't tire yourself.
                    </p>
                </label>
        
                <label className="checkboxContainer" htmlFor="noticeBreathPauseCheckbox">
                    <input 
                        type="checkbox" 
                        name="noticeBreathPauseCheckbox" 
                        id="noticeBreathPauseCheckbox"
                        checked={formData.noticeBreathPauseCheckbox || false}
                        onChange={handlechange} 
                    />
                    <span className="checkmark"></span>
                    <p>
                    As you breathe in, notice the brief pause when your lungs have filled with air. As you breathe out, notice the brief pause when your lungs are empty.
                    </p>
                </label>

                <label className="checkboxContainer" htmlFor="noticeNoseBreathingCheckbox">
                    <input 
                        type="checkbox" 
                        name="noticeNoseBreathingCheckbox" 
                        id="noticeNoseBreathingCheckbox"
                        checked={formData.noticeNoseBreathingCheckbox || false}
                        onChange={handlechange} 
                    />
                    <span className="checkmark"></span>
                    <p>
                    As you breathe, close your mouth and breathe through your nose, noticing the sensations of air passing through your nostrils.
                    </p>
                </label>

                <label className="checkboxContainer" htmlFor="noticeBreathWalkingCheckbox">
                    <input 
                        type="checkbox" 
                        name="noticeBreathWalkingCheckbox" 
                        id="noticeBreathWalkingCheckbox"
                        checked={formData.noticeBreathWalkingCheckbox || false}
                        onChange={handlechange} 
                    />
                    <span className="checkmark"></span>
                    <p>
                    Notice your breath while walking slowly. Determine the length of your breath by the number of your footsteps. Begin to lengthen your exhalation by one step. Watch your inhalation carefully to see if there is a desire to lengthen it. Lengthen the exhalation again. Only lengthen the inhalation when you feel it will be comfortable.
                    </p>
                </label>

                <label className="checkboxContainer" htmlFor="noticeBreathMusicCheckbox">
                    <input 
                        type="checkbox" 
                        name="noticeBreathMusicCheckbox" 
                        id="noticeBreathMusicCheckbox"
                        checked={formData.noticeBreathMusicCheckbox || false}
                        onChange={handlechange} 
                    />
                    <span className="checkmark"></span>
                    <p>
                    Notice your breath while listening to music. Follow your breath. Be master of it, while remaining aware of the movement and sentiment of the music. Do not get lost in the music, but continue to be master of your breath and yourself.
                    </p>
                </label>

                <label className="checkboxContainer" htmlFor="noticeBreathListeningCheckbox">
                    <input 
                        type="checkbox" 
                        name="noticeBreathListeningCheckbox" 
                        id="noticeBreathListeningCheckbox"
                        checked={formData.noticeBreathListeningCheckbox || false}
                        onChange={handlechange} 
                    />
                    <span className="checkmark"></span>
                    <p>
                    Notice your breath while listening to a friends words and their own replies. Continue as with music.
                    </p>
                </label>               
            </div>
            <div className="freeAnswerQuestion">
                <p>Other:</p>
                <input 
                    type="text"
                    name="otherObservingBreathingIdeas"
                    value={formData.otherObservingBreathingIdeas || ""}
                    onChange={handlechange} 
                />
            </div>
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
            <p><span className="bold">Observe thoughts:</span></p>
            <div className="checkboxes">
                <label className="checkboxContainer" htmlFor="noticeThoughtsComeFromCheckbox">
                    <input 
                        type="checkbox" 
                        name="noticeThoughtsComeFromCheckbox" 
                        id="noticeThoughtsComeFromCheckbox" 
                        checked={formData.noticeThoughtsComeFromCheckbox || false}
                        onChange={handlechange}
                    />
                    <span className="checkmark"></span>
                    <p>
                    Notice thoughts as they come into your mind. Ask: "Where do thoughts come from?" Then watch them to see if you can see where they come into your mind.
                    </p>
                </label>
        
                <label className="checkboxContainer" htmlFor="noticeThoughtPausesCheckbox">
                    <input 
                        type="checkbox" 
                        name="noticeThoughtPausesCheckbox" 
                        id="noticeThoughtPausesCheckbox"
                        checked={formData.noticeThoughtPausesCheckbox || false}
                        onChange={handlechange} 
                    />
                    <span className="checkmark"></span>
                    <p>
                    As you notice thoughts in your mind, notice the pauses between each thought.
                    </p>
                </label>

                <label className="checkboxContainer" htmlFor="imagineThoughtCloudsCheckbox">
                    <input 
                        type="checkbox" 
                        name="imagineThoughtCloudsCheckbox" 
                        id="imagineThoughtCloudsCheckbox"
                        checked={formData.imagineThoughtCloudsCheckbox || false}
                        onChange={handlechange} 
                    />
                    <span className="checkmark"></span>
                    <p>
                    Imagine your mind is the sky and thoughts are clouds. Notice each thought-cloud as it drifts by, letting it drift in and out of your mind. Or imagine thoughts as leaves on a stream, or boats on a lake, or train cars rolling by.
                    </p>
                </label>

                <label className="checkboxContainer" htmlFor="noticeWorrySensationsCheckbox">
                    <input 
                        type="checkbox" 
                        name="noticeWorrySensationsCheckbox" 
                        id="noticeWorrySensationsCheckbox"
                        checked={formData.noticeWorrySensationsCheckbox || false}
                        onChange={handlechange} 
                    />
                    <span className="checkmark"></span>
                    <p>
                    When worries go round and round in your mind, move your attention to the sensations in your body. Then, keeping your attention on your body sensations, notice how long it takes before the worries begin to ooze away.
                    </p>
                </label>

                <label className="checkboxContainer" htmlFor="watchMindBoulderCheckbox">
                    <input 
                        type="checkbox" 
                        name="watchMindBoulderCheckbox" 
                        id="watchMindBoulderCheckbox"
                        checked={formData.watchMindBoulderCheckbox || false}
                        onChange={handlechange} 
                    />
                    <span className="checkmark"></span>
                    <p>
                    Step back from your mind, as if you are on top of a mountain and your mind is just a boulder down below. Gaze at your mind, watching what thoughts come up while you are watching it. Come back into your mind before you stop.
                    </p>
                </label>

                <label className="checkboxContainer" htmlFor="noticeFirstTwoThoughtsCheckbox">
                    <input 
                        type="checkbox" 
                        name="noticeFirstTwoThoughtsCheckbox" 
                        id="noticeFirstTwoThoughtsCheckbox"
                        checked={formData.noticeFirstTwoThoughtsCheckbox || false}
                        onChange={handlechange} 
                    />
                    <span className="checkmark"></span>
                    <p>
                    Watch for the first two thoughts that come into your mind.
                    </p>
                </label>               
            </div>
            <div className="freeAnswerQuestion">
                <p>Other:</p>
                <input 
                    type="text"
                    name="otherObservingThoughtsIdeas"
                    value={formData.otherObservingThoughtsIdeas || ""}
                    onChange={handlechange} 
                />
            </div>
        </div>
    )
}

function slide10({ formData, onFormDataChange }) {
    const handlechange = (event) => {
        const { name, value, type, checked } = event.target;
        onFormDataChange(name, type === "checkbox" ? checked : value);
    }

    return (
        <div>
            <p><span className="bold">Imagine your mind is a:</span></p>
            <div className="checkboxes">
                <label className="checkboxContainer" htmlFor="thoughtsComingDownConveyorBeltCheckbox">
                    <input 
                        type="checkbox" 
                        name="thoughtsComingDownConveyorBeltCheckbox" 
                        id="thoughtsComingDownConveyorBeltCheckbox" 
                        checked={formData.thoughtsComingDownConveyorBeltCheckbox || false}
                        onChange={handlechange}
                    />
                    <span className="checkmark"></span>
                    <p>
                    Conveyor belt, and thoughts and feelings are coming down the belt. Put each thought or feeling into a box, then put the box onto the conveyor belt and let it go by.
                    </p>
                </label>
        
                <label className="checkboxContainer" htmlFor="sortingThoughtsIntoBoxesCheckbox">
                    <input 
                        type="checkbox" 
                        name="sortingThoughtsIntoBoxesCheckbox" 
                        id="sortingThoughtsIntoBoxesCheckbox"
                        checked={formData.sortingThoughtsIntoBoxesCheckbox || false}
                        onChange={handlechange} 
                    />
                    <span className="checkmark"></span>
                    <p>
                    Conveyor belt, and that you are sorting thoughts and feelings as they come down the belt. Label the types of thoughts and feelings coming by (e.g. "worries," "thoughts about the past", etc.). Put them in boxes nearby for another time.
                    </p>
                </label>

                <label className="checkboxContainer" htmlFor="imagineThoughtsAsBoatsCheckbox">
                    <input 
                        type="checkbox" 
                        name="imagineThoughtsAsBoatsCheckbox" 
                        id="imagineThoughtsAsBoatsCheckbox"
                        checked={formData.imagineThoughtsAsBoatsCheckbox || false}
                        onChange={handlechange} 
                    />
                    <span className="checkmark"></span>
                    <p>
                    River, and that your thoughts and feelings are boats going down the river. Imagine you are sitting on the grass, watching the boats go by. Describe or label each boat as it goes by, but try not to get into the boat.
                    </p>
                </label>

                <label className="checkboxContainer" htmlFor="thoughtsAsTrainCarsCheckbox">
                    <input 
                        type="checkbox" 
                        name="thoughtsAsTrainCarsCheckbox" 
                        id="thoughtsAsTrainCarsCheckbox"
                        checked={formData.thoughtsAsTrainCarsCheckbox || false}
                        onChange={handlechange} 
                    />
                    <span className="checkmark"></span>
                    <p>
                    Railroad track, and thoughts and feelings are train cars going down the track. Describe or label each train car as it goes by, but try not to get into the train car.
                    </p>
                </label>              
            </div>
            <div className="freeAnswerQuestion">
                <p>Other:</p>
                <input 
                    type="text"
                    name="otherImaginingThoughtsIdeas"
                    value={formData.otherImaginingThoughtsIdeas || ""}
                    onChange={handlechange} 
                />
            </div>
        </div>
    )
}

function slide11({ formData, onFormDataChange }) {
    const handlechange = (event) => {
        const { name, value, type, checked } = event.target;
        onFormDataChange(name, type === "checkbox" ? checked : value);
    }

    return (
        <div>
            <p><span className="bold">Observe by expanding awareness:</span></p>
            <div className="checkboxes">
                <label className="checkboxContainer" htmlFor="awarenessInThreesCheckbox">
                    <input 
                        type="checkbox" 
                        name="awarenessInThreesCheckbox" 
                        id="awarenessInThreesCheckbox" 
                        checked={formData.awarenessInThreesCheckbox || false}
                        onChange={handlechange}
                    />
                    <span className="checkmark"></span>
                    <p>
                    Breating in, notice your breath. Then, keeping breath in your awareness, on the next breath notice your hands. Then, keeping both in your awareness, on the next breath expand your awareness to sounds. Continue holding all three in awareness at the same time. Practice again with three different things.
                    </p>
                </label>
        
                <label className="checkboxContainer" htmlFor="expandAwarenessToRoomCheckbox">
                    <input 
                        type="checkbox" 
                        name="expandAwarenessToRoomCheckbox" 
                        id="expandAwarenessToRoomCheckbox"
                        checked={formData.expandAwarenessToRoomCheckbox || false}
                        onChange={handlechange} 
                    />
                    <span className="checkmark"></span>
                    <p>
                    Keeping your focus on what you are currently doing, gently expand your awareness to include the space around you.
                    </p>
                </label>

                <label className="checkboxContainer" htmlFor="hugATreeCheckbox">
                    <input 
                        type="checkbox" 
                        name="hugATreeCheckbox" 
                        id="hugATreeCheckbox"
                        checked={formData.hugATreeCheckbox || false}
                        onChange={handlechange} 
                    />
                    <span className="checkmark"></span>
                    <p>
                    Go hug a tree, and feel the sensations of the embrace. Attend to the embrace of the sheets and blanket around you when you are in bed. Do this when you feel lonely and want to love or be loved.
                    </p>
                </label>             
            </div>
            <div className="freeAnswerQuestion">
                <p>Other:</p>
                <input 
                    type="text"
                    name="otherExpandingAwarenessIdeas"
                    value={formData.otherExpandingAwarenessIdeas || ""}
                    onChange={handlechange} 
                />
            </div>
        </div>
    )
}

function slide12({ formData, onFormDataChange }) {
    const handlechange = (event) => {
        const { name, value, type, checked } = event.target;
        onFormDataChange(name, type === "checkbox" ? checked : value);
    }

    return (
        <div>
            <p><span className="bold">Open your mind to your senses:</span></p>
            <div className="checkboxes">
                <label className="checkboxContainer" htmlFor="practiceWalkingCheckbox">
                    <input 
                        type="checkbox" 
                        name="practiceWalkingCheckbox" 
                        id="practiceWalkingCheckbox" 
                        checked={formData.practiceWalkingCheckbox || false}
                        onChange={handlechange}
                    />
                    <span className="checkmark"></span>
                    <p>
                    Practice walking with your senses as wide open as you can make them. Notice what you hear, see, and feel. Notice what you feel when you shift your weight or turn.
                    </p>
                </label>
        
                <label className="checkboxContainer" htmlFor="oneMouthfulCheckbox">
                    <input 
                        type="checkbox" 
                        name="oneMouthfulCheckbox" 
                        id="oneMouthfulCheckbox"
                        checked={formData.oneMouthfulCheckbox || false}
                        onChange={handlechange} 
                    />
                    <span className="checkmark"></span>
                    <p>
                    For one mouthful in a meal, pause with a spoonful or forkful of food. Look at what you're going to eat, smell and listen to it. Then, when you are ready, put it in your mouth and notice the sensations of taste, sound, and texture. Notice the changes in texture, taste, and sound as you chew.
                    </p>
                </label>

                <label className="checkboxContainer" htmlFor="examineSensationsCheckbox">
                    <input 
                        type="checkbox" 
                        name="examineSensationsCheckbox" 
                        id="examineSensationsCheckbox"
                        checked={formData.examineSensationsCheckbox || false}
                        onChange={handlechange} 
                    />
                    <span className="checkmark"></span>
                    <p>
                    Focus your mind on paying attention to each sensation that comes into your mind. Attend to your senses and thoughts. Notice sensations as they arise and fall away. Notice each sensation with curiosity, allowing it to be.
                    </p>
                </label>

                <label className="checkboxContainer" htmlFor="sensationsStatementsCheckbox">
                    <input 
                        type="checkbox" 
                        name="sensationsStatementsCheckbox" 
                        id="sensationsStatementsCheckbox"
                        checked={formData.sensationsStatementsCheckbox || false}
                        onChange={handlechange} 
                    />
                    <span className="checkmark"></span>
                    <p>
                    Be here. Be in the present now. Take a moment to notice every sensation you are aware of. To yourself, make a statement about each sense, e.g. "I feel the chair, the chair feels me" "I see the wall, the wall sees me" "I hear my stomach, my stomach hears me."
                    </p>
                </label>

                <label className="checkboxContainer" htmlFor="feelingsArisingStatementsCheckbox">
                    <input 
                        type="checkbox" 
                        name="feelingsArisingStatementsCheckbox" 
                        id="feelingsArisingStatementsCheckbox"
                        checked={formData.feelingsArisingStatementsCheckbox || false}
                        onChange={handlechange} 
                    />
                    <span className="checkmark"></span>
                    <p>
                    When a feeling/thought arises, notice it saying, for example, "A feeling of sadness is arising in me."
                    </p>
                </label>

                <label className="checkboxContainer" htmlFor="nothingToDoMindCheckbox">
                    <input 
                        type="checkbox" 
                        name="nothingToDoMindCheckbox" 
                        id="nothingToDoMindCheckbox"
                        checked={formData.nothingToDoMindCheckbox || false}
                        onChange={handlechange} 
                    />
                    <span className="checkmark"></span>
                    <p>
                    Take a moment of your time, and practice "nothing-to-do" mind. Let yourself become completely aware of your present experience, noticing sensations in the space around you.
                    </p>
                </label>

                <label className="checkboxContainer" htmlFor="noticeSmallObjectCheckbox">
                    <input 
                        type="checkbox" 
                        name="noticeSmallObjectCheckbox" 
                        id="noticeSmallObjectCheckbox"
                        checked={formData.noticeSmallObjectCheckbox || false}
                        onChange={handlechange} 
                    />
                    <span className="checkmark"></span>
                    <p>
                    Find a small object you can hold in your hand. Place it in front of you. Observe it closely, first not moving it, and then picking it up, gazing at it from different angles. Just notice shapes, colors, and sizes. Then change your focus to your fingers and hands touching the object. Put the object down. Close your eyes. Then, with beginner's mind, open your eyes. With new eyes, notice the object again.
                    </p>
                </label>                 
            </div>
            <div className="freeAnswerQuestion">
                <p>Other:</p>
                <input 
                    type="text"
                    name="otherOpeningMindIdeas"
                    value={formData.otherOpeningMindIdeas || ""}
                    onChange={handlechange} 
                />
            </div>
        </div>
    )
}