import React from 'react'

export default class SeedInput extends React.Component {
    render() {
        return (
            <div className="container">
                <form>
                    <div className="form-group">
                        <input type="number" className="form-control form-control-lg m-2" id="seedInput" placeholder="Enter seed value"/>
                    </div>
                    <button type="submit" className="btn btn-primary m-2">Compute</button>
                </form>
            </div>
        )
    }
}