import React from 'react'
import Jumbo from './components/Jumbo'
import SeedInput from './components/SeedInput'

export default class App extends React.Component {
    render() {
        return (
            <React.StrictMode>
                <Jumbo/>
                <SeedInput/>
            </React.StrictMode>
        )
    }
}