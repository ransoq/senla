import React, { Component } from "react";

export default class ReposList extends Component {

    render () {

        return (    
            <ul id="ulRepos">{this.props.children}</ul>
        )
    }
}