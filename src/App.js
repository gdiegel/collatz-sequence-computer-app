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
    const [display, setDisplay] = useState("none");

    const handleChange = event => {
        console.log(`onChange target value [${event.target.value}]`);
        setSeed(event.target.value);
    };

    const handleClick = async event => {
        event.preventDefault();
        console.log(`State value [${seed}]`);
        await axios.get(`${computerServiceUrl}${seed}`, {crossdomain: true})
            .then(response => setSequence(response.data))
            .catch(error => {
                if (error.response) {
                    setSequence(error.response.data);
                } else if (error.request) {
                    console.log(error.request);
                }
            })
            .then(() => setDisplay("block"));
    };

    return (
        <React.StrictMode>
            <InfoHeader/>
            <Computer seed={seed} onChange={handleChange} onClick={handleClick}/>
            <SequenceOutput sequence={sequence} display={display}/>
            <Visualization sequence={sequence} display={display}/>
        </React.StrictMode>
    );
}