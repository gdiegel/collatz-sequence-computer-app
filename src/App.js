import React, {useState} from "react";
import axios from "axios";
import InfoHeader from "./components/infoHeader";
import Computer from "./components/computer";
import SequenceOutput from "./components/sequenceOutput";
import Visualization from "./components/visualization";

const computerServiceUrl = "https://collatz-sequence-computer-service.azurewebsites.net/collatz/";

export default () => {
    const [seed, setSeed] = useState(0);
    const [sequence, setSequence] = useState([]);
    const [displayOutput, setDisplayOutput] = useState("none");
    const [displayWarning, setDisplayWarning] = useState("none");
    const [alertText, setAlertText] = useState("none");

    const handleChange = event => {
        setSeed(event.target.value);
    };

    const handleClick = async event => {
        event.preventDefault();
        console.log(`State value [${seed}]`);
        if (!seed || seed === 0 || isNaN(seed)) {
            return;
        }
        await axios.get(`${computerServiceUrl}${seed}`, {crossdomain: true})
            .then(response => {
                setSequence(response.data);
                setDisplayOutput("block");
                setDisplayWarning("none");
            })
            .catch(error => {
                if (error.response) {
                    setAlertText(error.response.data);
                    setDisplayWarning("block");
                } else if (error.request) {
                    console.log(error.request);
                }
            });
    };

    return (
        <React.StrictMode>
            <InfoHeader/>
            <Computer seed={seed} onChange={handleChange} onClick={handleClick} alertText={alertText} displayWarning={displayWarning}/>
            <SequenceOutput sequence={sequence} display={displayOutput}/>
            <Visualization sequence={sequence} display={displayOutput}/>
        </React.StrictMode>
    );
}