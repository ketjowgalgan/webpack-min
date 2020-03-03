import React from "react";

import './Init.less';

class Init extends React.PureComponent {
    constructor() {
        super();

        this.state = {
            value: "stan poczatkowy"
        };
    }
    
    render() {
        return (<div>Init komponent {this.state.value}</div>);
    }
}

export default Init;
