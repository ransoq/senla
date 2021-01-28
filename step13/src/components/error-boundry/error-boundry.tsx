import React, { Component } from "react";
import ErrorIndicator from '../error-indicator/error-indicator';

type State = {
    hasError: boolean
}

export default class ErrorBoundry extends Component {

    state: State = {
        hasError: false
    };

    componentDidCatch() {
        this.setState({hasError: true});
    }

    render() {
        if (this.state.hasError) {
            return <ErrorIndicator/>
        }

        return this.props.children;
    }
}