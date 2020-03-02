import React from 'react';
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'

import './Init.less';

const LEVELS = [
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark',
];

class Init extends React.PureComponent {
    constructor() {
        super();

        this.state = {
            value: "stan poczatkowy"
        };
    }

    render() {
        const alert = (variant, idx) => <Alert key={idx} variant={variant}>This is a {variant} alert—check it out!</Alert>

        const alerts = LEVELS.map((variant, idx) => alert(variant, idx));

        const buttons = (
            <ButtonToolbar>
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="success">Success</Button>
                <Button variant="warning">Warning</Button>
                <Button variant="danger">Danger</Button>
                <Button variant="info">Info</Button>
                <Button variant="light">Light</Button>
                <Button variant="dark">Dark</Button>
                <Button variant="link">Link</Button>
            </ButtonToolbar>
        )
        return (
            <React.Fragment>
                <div>
                    {buttons}
                </div>
                {alerts};
            </React.Fragment>
        );
    }
}

export default Init;
