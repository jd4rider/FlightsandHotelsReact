import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class FindFlight extends Component {
  render() {
    return (
      <div className='container'>
        <Form inline>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="fromcity" className="mr-sm-2">From City</Label>
            <Input type="text" name="fromcity" id="fromcity" placeholder="City Flying From" />
          </FormGroup>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="tocity" className="mr-sm-2">To City</Label>
            <Input type="text" name="tocity" id="tocity" placeholder="City Flying To" />
          </FormGroup>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="flightdate" className="mr-sm-2">Password</Label>
            <Input type="date" name="flightdate" id="flightdate" placeholder="don't tell!" />
          </FormGroup>
          <Button>Check Availability</Button>
        </Form>
      </div>
    );
  }
}