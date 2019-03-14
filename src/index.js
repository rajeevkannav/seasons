import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './seasonDisplay.js';
import Spinner from './Spinnner.js';

class App extends React.Component {

    constructor(props) {
        super(props);
    };

    state = {
        latitude: null,
        longitude: null,
        errorMessage: ''
    };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            }),
            (err) => this.setState({errorMessage: err.message.toString()})
        );

    }

    componentDidUpdate() {
        console.log('componentDidUpdate')
    }

    render() {
        if (this.state.errorMessage && !this.state.latitude) {
            return <div>{this.state.errorMessage}</div>
        }
        if (!this.state.errorMessage && this.state.latitude) {
            return (
                <SeasonDisplay lat={this.state.latitude} long={this.state.longitude}/>
            )
        }
        return <Spinner message="Please accept the location request"/>
    }
}

ReactDOM.render(
    <App/>,
    document
        .querySelector(
            '#root'
        )
);