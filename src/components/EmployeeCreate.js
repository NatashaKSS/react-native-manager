import React, { Component } from 'react';
import { Card, CardSection, Input, Button } from './common';

class EmployeeCreate extends Component {
  render() {
    return (
      <Card>

        <CardSection>
          <Input
            label='Name'
            placeholder='Tom'
          />
        </CardSection>

        <CardSection>
          <Input
            label='Phone'
            placeholder='5555-5555'
          />
        </CardSection>

        <CardSection>
          <Button>
            Create
          </Button>
        </CardSection>

      </Card>
    );
  }
}

export default EmployeeCreate;
