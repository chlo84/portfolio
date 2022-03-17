import React from 'react';
import {Button, Card} from 'react-bootstrap';

function Footer () {
return (
    <div className='page footerPage' id='contact'>
        <h1>Footer</h1>
        <Button>Click here for more Information</Button>
        <Card>
            <Card.Header>Quote</Card.Header>
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p>
                        {' '}
                        Test a Quote
                        {' '}
                    </p>
                    <footer className="blockquote-footer">
                        Someone famous in <cite title="Source Title">Source Title</cite>
                    </footer>
                </blockquote>
            </Card.Body>
        </Card>
    </div>
)
}
export default Footer