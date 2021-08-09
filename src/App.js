import React from "react";
import InfoHeader from "./components/infoHeader";
import Computer from "./components/Computer";

export default class App extends React.Component {
    render() {
        return (
            <React.StrictMode>
                <InfoHeader/>
                <Computer/>
            </React.StrictMode>
        );
    }
}