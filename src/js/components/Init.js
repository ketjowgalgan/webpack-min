import React, { Component } from "react";

import './Init.less';

class Init extends Component {
    constructor() {
        super();

        this.state = {
            value: ""
        };
    }

    render() {
        return (<div>Init komponent</div>);
    }
}

export default Init;
