import React from 'react'
import Jumbo from './components/Jumbo'
import Computer from './components/Computer'

export default class App extends React.Component {
    render() {
        return (
            <React.StrictMode>
                <Jumbo/>
                <Computer/>
            </React.StrictMode>
        )
    }
}